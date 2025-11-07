function BanquetesAbout() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="chef-image-container">
              <img
                src="/procesadas/6.webp"
                alt="Banquetes Premium"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div className="text-white space-y-6">
            <div>
              <p className="uppercase font-lora text-xs md:text-sm tracking-[0.25em] text-gold mb-4">
                Experiencia y Excelencia
              </p>
              <h2 className="font-playball text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Más que un Banquete
              </h2>
              <div className="divider-line" />
            </div>

            <div className="space-y-5 font-lora text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">
                En <span className="text-gold font-semibold">Chef At Home Banquetes</span>, transformamos
                eventos en experiencias memorables que permanecen en el corazón de tus invitados.
              </p>

              <p className="text-base md:text-lg">
                Con años de experiencia creando celebraciones excepcionales, combinamos
                <span className="text-white font-semibold"> alta cocina gourmet</span>,
                <span className="text-white font-semibold"> servicio impecable</span> y
                <span className="text-white font-semibold"> atención a cada detalle</span> para
                garantizar que tu evento sea perfecto.
              </p>

              <p className="text-base md:text-lg">
                Desde bodas íntimas hasta grandes eventos corporativos, nos especializamos en crear
                momentos únicos que reflejan tu visión y superan tus expectativas.
              </p>

              <div className="pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="border border-gold/20 py-4 px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-3xl md:text-4xl text-gold">15+</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider mt-2">Años</p>
                </div>
                <div className="border border-gold/20 py-4 px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-3xl md:text-4xl text-gold">500+</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider mt-2">Eventos</p>
                </div>
                <div className="border border-gold/20 py-4 px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-3xl md:text-4xl text-gold">100%</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider mt-2">Satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanquetesAbout
