import { useState } from "react";
import chefLogo from "../assets/images/chetatlogo.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 border-y border-gold mt-6">
      <div className="relative flex items-center justify-between px-4 md:px-6 lg:px-8 py-2 max-w-7xl mx-auto">
        {/* Logo a la izquierda - sobresale del navbar */}
        <div className="logo-container absolute left-4 md:left-6 lg:left-8 -top-7 md:-top-12 z-20">
          <img
            src={`${chefLogo}`}
            alt="Chef At Home"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
          />
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={toggleMenu}
          className="ml-auto md:hidden text-white hover:text-gold transition-colors z-30"
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

        {/* Links de navegación para desktop */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 ml-auto text-white">
          <a
            href="/"
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Inicio
          </a>

          <a
            href="#adjid"
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Adjid
          </a>

          <a
            href="/banquetes"
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Banquetes
          </a>

          <a
            href="#restaurantes"
            className="font-lora text-xs md:text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Restaurantes
          </a>
        </div>

        {/* Menú móvil */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out z-20 pt-20`}
        >
          <div className="flex flex-col gap-6 px-8 text-white">
            <a
              href="/"
              onClick={toggleMenu}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3"
            >
              Inicio
            </a>

            <a
              href="#adjid"
              onClick={toggleMenu}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3"
            >
              Adjid
            </a>

            <a
              href="/banquetes"
              onClick={toggleMenu}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3"
            >
              Banquetes
            </a>

            <a
              href="#restaurantes"
              onClick={toggleMenu}
              className="font-lora text-sm uppercase tracking-widest hover:text-gold transition-colors border-b border-gold pb-3"
            >
              Restaurantes
            </a>
          </div>
        </div>

        {/* Overlay para cerrar el menú */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
