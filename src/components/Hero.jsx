function Hero() {
    return (
        <section className="hero-background pt-20">
            <img
                src="/src/assets/images/gourmet-kitchen.webp"
                alt=""
                fetchPriority="high"
                style={{ display: 'none' }}
            />
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
        </section>
    )
}

export default Hero