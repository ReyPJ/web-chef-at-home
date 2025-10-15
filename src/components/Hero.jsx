function Hero() {
    return (
        <section className="hero-background pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75 z-10"></div>
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