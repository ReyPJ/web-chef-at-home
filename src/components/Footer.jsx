// @ts-ignore
import logo from "../assets/images/chetatlogo.png"

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
                        src={`${logo}`}
                        alt="Chef At Home"
                        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain opacity-90"
                        loading="lazy"
                    />
                    <div>
                        <h3 className="font-playball text-2xl md:text-3xl lg:text-4xl text-gold italic mb-1">
                            Chef At Home
                        </h3>
                        <p className="font-lora text-white/60 text-xs md:text-sm uppercase tracking-[0.3em]">
                            Zona Esmeralda
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto text-center pt-6 border-t border-gold/20">
                <p className="font-lora text-white/40 text-xs md:text-sm uppercase tracking-widest">
                    Chef At Home © 2025
                </p>
            </div>
        </footer>
    );
}

export default Footer;
