import chefLogo from "../assets/images/chetatlogo.png"
function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 border-y border-gold mt-6">
            <div className="relative flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                {/* Logo a la izquierda - sobresale del navbar */}
                <div className="logo-container absolute left-4 -top-10 z-20">
                    <img
                        src={`${chefLogo}`}
                        alt="Chef At Home"
                        className="w-24 h-24 object-contain"
                    />
                </div>

                {/* Links de navegación a la derecha */}
                <div className="flex items-center gap-6 ml-auto text-white">
                    <a
                        href="/index.html"
                        className="font-playfair text-xs uppercase tracking-widest hover:text-gold transition-colors"
                    >
                        Inicio
                    </a>

                    <a
                        href="#adjid"
                        className="font-playfair text-xs uppercase tracking-widest hover:text-gold transition-colors"
                    >
                        Adjid
                    </a>

                    <a
                        href="#restaurantes"
                        className="font-playfair text-xs uppercase tracking-widest hover:text-gold transition-colors"
                    >
                        Restaurantes
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;