import chefLogo from "../assets/images/chetatlogo.png"

function BanquetesNavbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/30">
      <div className="relative flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo a la izquierda */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src={`${chefLogo}`}
            alt="Chef At Home"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <div className="hidden md:block">
            <p className="font-playball text-gold text-xl">Chef At Home</p>
            <p className="font-lora text-white text-xs uppercase tracking-wider">Banquetes</p>
          </div>
        </a>

        {/* Links de navegación a la derecha */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-white">
          <button
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            <a href="/">
              Inicio
            </a>
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Nosotros
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Servicios
          </button>

          <button
            onClick={() => scrollToSection('gallery')}
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Galería
          </button>

          <button
            onClick={() => scrollToSection('menu')}
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Menú
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gold hover:bg-gold/90 text-black font-lora text-xs md:text-sm uppercase tracking-wider px-6 py-2 rounded-sm transition-all duration-300"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BanquetesNavbar
