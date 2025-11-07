import { GiAmpleDress } from 'react-icons/gi'
import { MdCelebration, MdBusinessCenter, MdRestaurantMenu } from 'react-icons/md'
import { BiCoffee } from 'react-icons/bi'
import { FaGlassCheers } from 'react-icons/fa'

function BanquetesServices() {
  const services = [
    {
      Icon: GiAmpleDress,
      title: 'Bodas',
      description: 'El día más especial de tu vida merece perfección. Creamos bodas de ensueño con cada detalle cuidadosamente planeado.'
    },
    {
      Icon: MdCelebration,
      title: 'Eventos Sociales',
      description: 'Celebraciones inolvidables para cumpleaños, aniversarios, graduaciones y toda ocasión especial.'
    },
    {
      Icon: MdBusinessCenter,
      title: 'Eventos Corporativos',
      description: 'Profesionalismo y elegancia para conferencias, lanzamientos de productos y cenas ejecutivas.'
    },
    {
      Icon: MdRestaurantMenu,
      title: 'Cenas Privadas',
      description: 'Experiencias gastronómicas exclusivas con menús personalizados y servicio de alta categoría.'
    },
    {
      Icon: BiCoffee,
      title: 'Coffee Breaks',
      description: 'Pausas gourmet para tus eventos empresariales con opciones dulces y saladas de primera calidad.'
    },
    {
      Icon: FaGlassCheers,
      title: 'Cóctel Reception',
      description: 'Recepciones elegantes con canapés sofisticados y bebidas de autor para impresionar.'
    }
  ]

  return (
    <section id="services" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase font-lora text-xs md:text-sm tracking-[0.25em] text-gold mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-playball text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Eventos a tu Medida
          </h2>
          <div className="divider-line max-w-2xl mx-auto" />
          <p className="font-lora text-gray-300 text-base md:text-lg max-w-3xl mx-auto mt-6">
            Ofrecemos soluciones completas para cada tipo de evento, adaptándonos a tus necesidades
            y superando tus expectativas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const { Icon } = service
            return (
            <div
              key={index}
              className="group relative bg-black/50 border border-gold/20 rounded-sm p-8 hover:border-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Icon */}
              <div className="text-gold mb-4 transform group-hover:scale-110 transition-transform duration-500">
                <Icon size={48} />
              </div>

              {/* Title */}
              <h3 className="font-lora text-2xl md:text-3xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-lora text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-bl-sm" />
            </div>
          )})}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-8 py-6">
            <p className="font-lora text-white text-base md:text-lg">
              <span className="text-gold font-semibold">Servicio completo incluido:</span> Personal capacitado,
              mobiliario, mantelería, vajilla, cristalería, decoración y coordinación del evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanquetesServices
