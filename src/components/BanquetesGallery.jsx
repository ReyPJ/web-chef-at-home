import { useState } from 'react'
import { IoSearchSharp, IoClose } from 'react-icons/io5'

function BanquetesGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Using images 7-20 for gallery (14 images)
  const galleryImages = [
    { src: '/procesadas/7.webp', alt: 'Evento elegante' },
    { src: '/procesadas/8.webp', alt: 'Mesa decorada' },
    { src: '/procesadas/9.webp', alt: 'Banquete gourmet' },
    { src: '/procesadas/10.webp', alt: 'Celebración especial' },
    { src: '/procesadas/11.webp', alt: 'Montaje premium' },
    { src: '/procesadas/12.webp', alt: 'Evento corporativo' },
    { src: '/procesadas/13.webp', alt: 'Boda elegante' },
    { src: '/procesadas/14.webp', alt: 'Catering exclusivo' },
    { src: '/procesadas/15.webp', alt: 'Decoración sofisticada' },
    { src: '/procesadas/16.webp', alt: 'Mesa gourmet' },
    { src: '/procesadas/17.webp', alt: 'Evento nocturno' },
    { src: '/procesadas/18.webp', alt: 'Servicio premium' }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="gallery" className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="uppercase font-lora text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-3 sm:mb-4">
            Galería
          </p>
          <h2 className="font-playball text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-4">
            Nuestros Eventos
          </h2>
          <div className="divider-line max-w-2xl mx-auto" />
          <p className="font-lora text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4 sm:mt-5 md:mt-6 px-4">
            Cada evento es único y refleja la personalidad de nuestros clientes.
            Explora algunos de nuestros trabajos más recientes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-sm aspect-square"
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay - más visible en mobile con tap */}
              <div className="absolute inset-0 bg-black/0 active:bg-black/60 md:group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 active:opacity-100 md:group-hover:opacity-100 transition-opacity duration-500">
                  <IoSearchSharp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gold" />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 active:border-gold/50 md:group-hover:border-gold/50 transition-all duration-500 rounded-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gold transition-colors z-50 p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <IoClose className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl shadow-gold/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default BanquetesGallery
