import { useState, useEffect } from 'react'

function BanquetesHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      image: '/procesadas/11.webp',
      title: 'Eventos Inolvidables',
      subtitle: 'Creamos experiencias únicas que superan expectativas'
    },
    {
      image: '/procesadas/2.webp',
      title: 'Bodas de Ensueño',
      subtitle: 'El día más importante merece la perfección absoluta'
    },
    {
      image: '/procesadas/3.webp',
      title: 'Eventos Corporativos',
      subtitle: 'Profesionalismo y elegancia en cada detalle'
    },
    {
      image: '/procesadas/4.webp',
      title: 'Celebraciones Especiales',
      subtitle: 'Cada momento cuenta, cada detalle importa'
    },
    {
      image: '/procesadas/1.webp',
      title: 'Banquetes Exclusivos',
      subtitle: 'Alta cocina y servicio excepcional'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <section className="banquetes-hero-slider relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(0.5) saturate(1.2) contrast(1.1)'
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Content */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-5xl px-6">
              <h2 className="uppercase font-lora text-sm md:text-base lg:text-xl tracking-[0.2em] font-light mb-4 opacity-90">
                Chef At Home Banquetes
              </h2>
              <h1 className="font-playball text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gold my-6 drop-shadow-[3px_3px_12px_rgba(0,0,0,0.8)]">
                {slide.title}
              </h1>
              <p className="font-lora text-base md:text-lg lg:text-xl tracking-[0.15em] font-light max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-gold transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-gold transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentSlide
              ? 'w-12 h-2 bg-gold'
              : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default BanquetesHero
