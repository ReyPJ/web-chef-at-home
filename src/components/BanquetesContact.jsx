import { useState } from 'react'
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md'

function BanquetesContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const eventTypes = [
    'Boda',
    'Evento Corporativo',
    'Cumpleaños',
    'Aniversario',
    'Graduación',
    'Cena Privada',
    'Otro'
  ]

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '')

    // Limit to 10 digits
    const limited = cleaned.substring(0, 10)

    // Format as (XXX) XXX-XXXX
    if (limited.length >= 6) {
      return `(${limited.substring(0, 3)}) ${limited.substring(3, 6)}-${limited.substring(6)}`
    } else if (limited.length >= 3) {
      return `(${limited.substring(0, 3)}) ${limited.substring(3)}`
    } else if (limited.length > 0) {
      return `(${limited}`
    }
    return limited
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }))
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else {
      // Validate Mexican phone format (10 digits)
      const digitsOnly = formData.phone.replace(/\D/g, '')
      if (digitsOnly.length !== 10) {
        newErrors.phone = 'El teléfono debe tener 10 dígitos'
      }
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Selecciona el tipo de evento'
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'La fecha es requerida'
    } else {
      // Validate date is in the future
      const selectedDate = new Date(formData.eventDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.eventDate = 'La fecha debe ser futura'
      }
    }

    if (!formData.guestCount) {
      newErrors.guestCount = 'El número de invitados es requerido'
    } else if (formData.guestCount < 1) {
      newErrors.guestCount = 'Debe ser al menos 1 invitado'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(false)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitError(true)
      setTimeout(() => {
        setSubmitError(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="uppercase font-lora text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-3 sm:mb-4">
            Contáctanos
          </p>
          <h2 className="font-playball text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-4">
            Planea tu Evento
          </h2>
          <div className="divider-line max-w-2xl mx-auto" />
          <p className="font-lora text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4 sm:mt-5 md:mt-6 px-4">
            Completa el formulario y nos pondremos en contacto contigo para discutir
            los detalles de tu evento soñado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            {submitSuccess && (
              <div className="mb-5 sm:mb-6 bg-gold/10 border border-gold text-white rounded-sm p-3 sm:p-4 font-lora text-xs sm:text-sm md:text-base">
                Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            {submitError && (
              <div className="mb-5 sm:mb-6 bg-red-900/20 border border-red-500 text-white rounded-sm p-3 sm:p-4 font-lora text-xs sm:text-sm md:text-base">
                Hubo un error al enviar el formulario. Por favor intenta de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.name}</p>}
              </div>

              {/* Email and Phone */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label htmlFor="email" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.phone}</p>}
                </div>
              </div>

              {/* Event Type and Date */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label htmlFor="eventType" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.eventType ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                  >
                    <option value="">Selecciona...</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.eventType && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.eventType}</p>}
                </div>

                <div>
                  <label htmlFor="eventDate" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Fecha del Evento *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full bg-black/50 border ${errors.eventDate ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                  />
                  {errors.eventDate && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.eventDate}</p>}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label htmlFor="guestCount" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                  Número de Invitados *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.guestCount ? 'border-red-500' : 'border-gold/30'} rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors`}
                  placeholder="50"
                  min="1"
                />
                {errors.guestCount && <p className="text-red-500 text-xs sm:text-sm mt-1 font-lora">{errors.guestCount}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-lora text-white text-xs sm:text-sm mb-1.5 sm:mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/50 border border-gold/30 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white font-lora text-sm sm:text-base focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Cuéntanos más sobre tu visión para el evento..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gold hover:bg-gold/90 text-black font-lora text-sm sm:text-base md:text-lg uppercase tracking-wider py-3 sm:py-3.5 md:py-4 rounded-sm transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-gold/30'}`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {/* Image */}
            <div className="relative rounded-sm overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80">
              <img
                src="/procesadas/19.webp"
                alt="Contacto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Info Cards */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="bg-black/50 border border-gold/20 rounded-sm p-4 sm:p-5 md:p-6 hover:border-gold/50 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MdEmail className="text-gold text-2xl sm:text-3xl flex-shrink-0" />
                  <div>
                    <h3 className="font-lora text-white text-base sm:text-lg mb-1 sm:mb-2">Email</h3>
                    <a href="mailto:banquetes@chefathome.com" className="font-lora text-gray-300 text-xs sm:text-sm md:text-base hover:text-gold transition-colors break-all">
                      banquetes@chefathome.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border border-gold/20 rounded-sm p-4 sm:p-5 md:p-6 hover:border-gold/50 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MdPhone className="text-gold text-2xl sm:text-3xl flex-shrink-0" />
                  <div>
                    <h3 className="font-lora text-white text-base sm:text-lg mb-1 sm:mb-2">Teléfono</h3>
                    <a href="tel:+525512345678" className="font-lora text-gray-300 text-xs sm:text-sm md:text-base hover:text-gold transition-colors">
                      +52 55 1234 5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border border-gold/20 rounded-sm p-4 sm:p-5 md:p-6 hover:border-gold/50 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MdAccessTime className="text-gold text-2xl sm:text-3xl flex-shrink-0" />
                  <div>
                    <h3 className="font-lora text-white text-base sm:text-lg mb-1 sm:mb-2">Horario</h3>
                    <p className="font-lora text-gray-300 text-xs sm:text-sm">
                      Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                      Sábados: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanquetesContact
