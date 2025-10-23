function ComingSoonApp() {
    return (
        <section className="relative py-12 md:py-16 px-4 bg-black border-y border-gold/30">
            <div className="max-w-3xl mx-auto text-center">
                {/* Título principal */}
                <h2 className="font-playball text-3xl md:text-5xl text-gold mb-2 italic">
                    Chef At Home App
                </h2>

                {/* Subtítulo */}
                <p className="font-lora text-white/80 text-sm md:text-base uppercase tracking-[0.25em] mb-8">
                    Próximamente
                </p>

                {/* Logos de las tiendas */}
                <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
                    <img
                        src="/logos/playstore-logo.webp"
                        alt="Google Play Store"
                        className="h-10 md:h-12 w-auto opacity-90"
                        loading="lazy"
                    />

                    <img
                        src="/logos/app-store-logo.webp"
                        alt="App Store"
                        className="h-10 md:h-12 w-auto opacity-90"
                        loading="lazy"
                    />
                </div>

                {/* Mensaje adicional */}
                <p className="font-lora text-gold/70 text-xs italic uppercase tracking-[0.2em]">
                    Ordena directo desde la app con los mejores precios
                </p>
            </div>
        </section>
    );
}

export default ComingSoonApp;