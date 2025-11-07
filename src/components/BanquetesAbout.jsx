function BanquetesAbout() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="chef-image-container">
              <img
                src="/procesadas/6.webp"
                alt="Banquetes Premium"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
            </div>
            {/* Decorative gold accent - más pequeño en mobile */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div className="text-white space-y-5 sm:space-y-6 order-1 md:order-2">
            <div>
              <p className="uppercase font-lora text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-3 sm:mb-4">
                Experiencia y Excelencia
              </p>
              <h2 className="font-playball text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                Más que un Banquete
              </h2>
              <div className="divider-line" />
            </div>

            <div className="space-y-4 sm:space-y-5 font-lora text-gray-300 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg">
                En <span className="text-gold font-semibold">Chef At Home Banquetes</span>, transformamos
                eventos en experiencias memorables que permanecen en el corazón de tus invitados.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Con años de experiencia creando celebraciones excepcionales, combinamos
                <span className="text-white font-semibold"> alta cocina gourmet</span>,
                <span className="text-white font-semibold"> servicio impecable</span> y
                <span className="text-white font-semibold"> atención a cada detalle</span> para
                garantizar que tu evento sea perfecto.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Desde bodas íntimas hasta grandes eventos corporativos, nos especializamos en crear
                momentos únicos que reflejan tu visión y superan tus expectativas.
              </p>

              <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="border border-gold/20 py-3 sm:py-4 px-1 sm:px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-2xl sm:text-3xl md:text-4xl text-gold">15+</p>
                  <p className="text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wider mt-1 sm:mt-2">Años</p>
                </div>
                <div className="border border-gold/20 py-3 sm:py-4 px-1 sm:px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-2xl sm:text-3xl md:text-4xl text-gold">500+</p>
                  <p className="text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wider mt-1 sm:mt-2">Eventos</p>
                </div>
                <div className="border border-gold/20 py-3 sm:py-4 px-1 sm:px-2 rounded-sm hover:border-gold/50 transition-colors">
                  <p className="font-playball text-2xl sm:text-3xl md:text-4xl text-gold">100%</p>
                  <p className="text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wider mt-1 sm:mt-2">Satisfacción</p>
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
