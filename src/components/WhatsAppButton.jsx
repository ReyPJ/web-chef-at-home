function WhatsAppButton() {
    // Número de WhatsApp (formato internacional sin +, espacios ni guiones)
    const phoneNumber = "525639511951";

    // Mensaje predefinido (opcional)
    const message = "Hola, me gustaría hacer un pedido";

    // URL de WhatsApp con mensaje codificado
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
            aria-label="Contactar por WhatsApp"
        >
            {/* Aquí va tu logo de WhatsApp */}
            <img
                src="/logos/whatsapp-logo.png"
                alt="WhatsApp"
                className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
            />

            {/* Efecto de pulso */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </a>
    );
}

export default WhatsAppButton;