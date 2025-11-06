import chefLogo from "../assets/images/chetatlogo.png"

function Navbar() {
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

        {/* Links de navegación a la derecha */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 ml-auto text-white">
          <a
            href="/index.html"
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
      </div>
    </nav>
  );
}

export default Navbar;
