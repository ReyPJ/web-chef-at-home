import { useState } from 'react'
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

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto md:hidden text-white hover:text-gold transition-colors z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
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

        {/* Menú móvil - Deslizante desde la derecha */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out z-40 pt-20`}
        >
          <div className="flex flex-col gap-6 px-8 text-white">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3"
            >
              Inicio
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3 text-left"
            >
              Nosotros
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3 text-left"
            >
              Servicios
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3 text-left"
            >
              Galería
            </button>

            <button
              onClick={() => scrollToSection('menu')}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3 text-left"
            >
              Menú
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold/90 text-black font-lora text-sm uppercase tracking-wider px-6 py-2 rounded-sm transition-all duration-300 mt-2"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Overlay para cerrar el menú */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  )
}

export default BanquetesNavbar
