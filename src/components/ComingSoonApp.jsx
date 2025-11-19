function ComingSoonApp() {
  return (
    <section className="relative py-12 md:py-16 px-4 bg-black border-y border-gold/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <div className="flex flex-col items-center my-8 gap-8">
          <h2 className="font-playball text-4xl md:text-5xl lg:text-6xl text-gold mb-2 italic">
            Chef At Home App
          </h2>
          <h2 className="font-lora text-5xl text-gold mb-2 italic">
            ¡GRAN PROMO DE APERTURA, 2x1 EN TODAS NUESTRAS SMASHED BURGERS!
          </h2>
        </div>

        <p className="font-lora text-white text-base uppercase tracking-[0.25em] mb-8">
          SERVICIO A DOMICILIO DE MIÉRCOLES A DOMINGO DE 8 AM a 9:00 PM
        </p>

        {/* Subtítulo */}
        <p className="font-lora text-white/80 text-xs md:text-sm lg:text-base uppercase tracking-[0.25em] mb-8">
          Próximamente en Playstore y AppStore
        </p>

        {/* Logos de las tiendas */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-6">
          <img
            src="/logos/playstore-logo.webp"
            alt="Google Play Store"
            className="h-10 md:h-12 lg:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />

          <img
            src="/logos/app-store-logo.webp"
            alt="App Store"
            className="h-10 md:h-12 lg:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>

        {/* Mensaje adicional */}
        <p className="font-lora text-gold/70 text-xs md:text-sm italic uppercase tracking-[0.2em] mb-6">
          Ordena directo desde la app con los mejores precios
        </p>

        {/* Número de teléfono */}
        <div className="mt-8 pt-6 border-t border-gold/20">
          <p className="font-lora text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Mientras tanto, ordena por el WhatsApp
          </p>
          <a
            href="tel:+525639511951"
            className="inline-block font-lora text-gold text-xl md:text-2xl lg:text-3xl font-semibold hover:text-gold/80 transition-colors duration-300"
          >
            56 3951 1951
          </a>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonApp;
