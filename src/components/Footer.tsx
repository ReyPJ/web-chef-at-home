function Footer() {
    return (
        <footer className="relative bg-black pt-16 pb-8 px-4">
            {/* Separador elegante */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/10 flex-1"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold/60"></div>
                        <div className="w-1 h-1 rounded-full bg-gold/40"></div>
                    </div>
                    <div className="h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/10 flex-1"></div>
                </div>
            </div>

            {/* Logo y nombre */}
            <div className="max-w-6xl mx-auto text-center mb-8">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="/src/assets/images/chetatlogo.png"
                        alt="Chef At Home"
                        className="w-32 h-32 md:w-24 md:h-24 object-contain opacity-90"
                        loading="lazy"
                    />
                    <div>
                        <h3 className="font-playball text-2xl md:text-3xl text-gold italic mb-1">
                            Chef At Home
                        </h3>
                        <p className="font-playfair text-white/60 text-xs uppercase tracking-[0.3em]">
                            Zona Esmeralda
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto text-center pt-6 border-t border-gold/20">
                <p className="font-playfair text-white/40 text-xs uppercase tracking-widest">
                    Chef At Home © 2025
                </p>
            </div>
        </footer>
    );
}

export default Footer;