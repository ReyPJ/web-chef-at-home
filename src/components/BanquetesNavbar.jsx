import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import chefLogo from "../assets/images/chetatlogo.png"

function BanquetesNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false) // Cerrar menú después de hacer clic
  }

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-gold/30 shadow-lg shadow-black/50">
      <div className="relative flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4 max-w-7xl mx-auto">
        {/* Logo a la izquierda */}
        <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity z-50">
          <img
            src={`${chefLogo}`}
            alt="Chef At Home"
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-playball text-gold text-base md:text-xl">Chef At Home</p>
            <p className="font-lora text-white text-[0.6rem] md:text-xs uppercase tracking-wider">Banquetes</p>
          </div>
        </a>

        {/* Hamburger Button - Solo mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-white hover:text-gold transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoClose className="w-7 h-7" />
          ) : (
            <IoMenu className="w-7 h-7" />
          )}
        </button>

        {/* Links de navegación - Desktop */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 text-white">
          <a
            href="/"
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Inicio
          </a>

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
            className="bg-gold hover:bg-gold/90 text-black font-lora text-xs md:text-sm uppercase tracking-wider px-6 py-2 rounded-sm transition-all duration-300"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="flex flex-col items-center justify-center h-full gap-6 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="/"
                className="font-lora text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>

              <button
                onClick={() => scrollToSection('about')}
                className="font-lora text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
              >
                Nosotros
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="font-lora text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
              >
                Servicios
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="font-lora text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
              >
                Galería
              </button>

              <button
                onClick={() => scrollToSection('menu')}
                className="font-lora text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
              >
                Menú
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gold hover:bg-gold/90 text-black font-lora text-base uppercase tracking-wider px-8 py-3 rounded-sm transition-all duration-300 mt-4"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default BanquetesNavbar
