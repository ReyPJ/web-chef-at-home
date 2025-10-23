import { useState } from 'react';
import { restaurantes } from '../data/restaurantes.js';
import goldBg from '../assets/images/backgorund-gold.webp';

function RestaurantMenu({ activeRestaurant }) {
    const [activeMenuCategory, setActiveMenuCategory] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const currentRestaurant = restaurantes.find(r => r.id === activeRestaurant);
    const menuCategories = Object.keys(currentRestaurant.menu);
    const activeItems = currentRestaurant.menu[menuCategories[activeMenuCategory]];

    // 4 items en desktop, 2 en tablet, 1 en mobile
    const getItemsPerSlide = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 4; // Desktop
            if (window.innerWidth >= 768) return 2; // Tablet
            return 1; // Mobile
        }
        return 4; // Default para SSR
    };

    const [itemsPerSlide] = useState(getItemsPerSlide());
    const totalSlides = Math.ceil(activeItems.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentItems = () => {
        const start = currentSlide * itemsPerSlide;
        return activeItems.slice(start, start + itemsPerSlide);
    };

    // const times = [
    //     {key: "morning", time: "8 AM a 1 PM"},
    //     {key: "evening", time: "1 PM a 10 PM"},
    // ]


    return (
        <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
            {/* Background gold sutil */}
            <div
                className="absolute inset-0 opacity-30 z-0"
                style={{
                    backgroundImage: `url(${goldBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER MENÚ */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 pb-6 md:pb-8 border-b border-gold/30">
                    <h2 className="text-gold font-playball text-4xl md:text-6xl lg:text-7xl italic mb-6 md:mb-0 drop-shadow-lg">
                        MENU
                    </h2>

                    <div className="flex flex-col items-center gap-3">
                        <p className="text-gold font-lora text-sm md:text-base lg:text-lg italic tracking-wide">
                            Encuéntralo en
                        </p>
                        <div className="flex justify-center gap-4">
                            {currentRestaurant.deliveryLinks.uberEats !== "#" && (
                                <a
                                    href={currentRestaurant.deliveryLinks.uberEats}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110"
                                >
                                    <img src="/logos/uber-eats-logo.webp" alt="Uber Eats" className="h-8 md:h-10" />
                                </a>
                            )}
                            {currentRestaurant.deliveryLinks.rappi !== "#" && (
                                <a
                                    href={currentRestaurant.deliveryLinks.rappi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110"
                                >
                                    <img src="/logos/rappi-logo.webp" alt="Rappi" className="h-8 md:h-10" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* TABS DE CATEGORÍAS - Scrolleable en todas las pantallas */}
                <div className="mb-8 md:mb-10 -mx-4 md:mx-0">
                    <div className="flex gap-3 overflow-x-auto px-4 md:px-0 pb-4 md:scrollbar-hide">
                        {menuCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveMenuCategory(index);
                                    setCurrentSlide(0);
                                }}
                                className={`px-6 md:px-10 py-3 font-lora uppercase tracking-[0.2em] text-xs md:text-sm whitespace-nowrap transition-all duration-300 border-2 flex-shrink-0 ${
                                    activeMenuCategory === index
                                        ? 'text-black bg-gold border-gold shadow-lg shadow-gold/30 font-semibold'
                                        : 'text-white bg-black/30 border-white/40 hover:border-gold hover:bg-gold/10 hover:text-gold'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CATEGORÍA ACTIVA Y HORARIO */}
                <div className="text-center mb-8 md:mb-10 space-y-2 md:space-y-3">
                    <h3 className="text-white font-lora text-xl md:text-2xl lg:text-3xl italic uppercase tracking-widest">
                        {menuCategories[activeMenuCategory]}
                    </h3>
                    <p className="text-gold/90 font-lora text-xs md:text-sm italic uppercase tracking-[0.3em]">
                        Precios en Chef At Home App
                    </p>
                </div>

                {/* SLIDER DE ITEMS - Grid responsivo */}
                <div className="relative mb-10 md:mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 min-h-[500px] md:min-h-[400px] lg:min-h-[350px]">
                        {getCurrentItems().map((item, index) => (
                            <div
                                key={index}
                                className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg p-5 md:p-6 flex flex-col justify-between hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
                            >
                                <div>
                                    <div className="flex flex-col gap-2 mb-3">
                                        <h4 className="text-white font-lora text-lg md:text-xl lg:text-xl italic leading-tight">
                                            {item.name}
                                        </h4>
                                        <span className="text-gold font-lora text-2xl md:text-3xl font-bold">
                                            ${item.price}
                                        </span>
                                    </div>
                                    <p className="text-white/70 font-lora text-xs md:text-sm italic leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controles del slider */}
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gold/10 hover:bg-gold/20 border border-gold/50 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                                aria-label="Anterior"
                            >
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gold/10 hover:bg-gold/20 border border-gold/50 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                                aria-label="Siguiente"
                            >
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Indicadores de slide */}
                            <div className="flex justify-center gap-2 mt-6 md:mt-8">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            currentSlide === index
                                                ? 'w-8 bg-gold'
                                                : 'w-1.5 bg-gold/30 hover:bg-gold/50'
                                        }`}
                                        aria-label={`Ir a slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* DISCLAIMER FINAL */}
                <div className="mt-12 md:mt-16 text-center pt-6 md:pt-8 border-t border-gold/20">
                    <p className="text-gold/60 font-lora text-xs italic uppercase tracking-[0.25em] leading-relaxed max-w-3xl mx-auto px-4">
                        Los precios mostrados son válidos en la aplicación Chef At Home.
                        <br className="hidden md:block" />
                        Consulta Uber Eats y Rappi para sus precios respectivos.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RestaurantMenu;