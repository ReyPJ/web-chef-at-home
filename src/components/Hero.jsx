import gourmetBg from '../assets/images/gourmet-kitchen.webp'
import {useState} from "react";

function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <section
            className="hero-background pt-20"
            style={{
                '--bg-image': `url(${gourmetBg})`,
            }}
        >
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse z-0"></div>
            )}

            <style>{`
                .hero-background::before {
                    background-image: var(--bg-image);
                }
            `}</style>

            <div className="relative z-20 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-3xl px-6">
                    <h2 className="uppercase font-playfair text-base md:text-xl tracking-[0.15em] font-light mb-2">
                        Cocina Gourmet
                    </h2>
                    <h1 className="font-playball text-4xl md:text-6xl text-gold my-4 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.6)]">
                        Calidad Premium
                    </h1>
                    <h2 className="uppercase font-playfair text-base md:text-xl tracking-[0.15em] font-light">
                        Zona Esmeralda
                    </h2>
                </div>
            </div>

            {/* Imagen oculta solo para detectar cuando carga */}
            <img
                src={`${gourmetBg}`}
                alt=""
                style={{ display: 'none' }}
                onLoad={() => setImageLoaded(true)}
            />
        </section>
    )
}

export default Hero