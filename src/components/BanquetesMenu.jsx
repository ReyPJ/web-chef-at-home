import { IoCheckmarkCircle } from 'react-icons/io5'

function BanquetesMenu() {
  const menuCategories = [
    {
      title: 'Entradas',
      items: [
        'Ensalada de queso de cabra con aderezo de frambuesa',
        'Crema de elote con huitlacoche',
        'Mousse de salmón ahumado',
        'Carpaccio de res con aceite de trufa'
      ]
    },
    {
      title: 'Platos Fuertes',
      items: [
        'Filete de res en salsa de vino tinto',
        'Medallones de cerdo en salsa de ciruela pasa',
        'Salmón a la mostaza antigua',
        'Pechuga de pollo rellena de espinacas y queso de cabra'
      ]
    },
    {
      title: 'Guarniciones',
      items: [
        'Verduras asadas al romero',
        'Papas cambray al gratín',
        'Arroz pilaf con almendras',
        'Puré de papa con ajo rostizado'
      ]
    }
  ]

  return (
    <section id="menu" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content Side */}
          <div className="text-white space-y-8">
            {/* Header */}
            <div>
              <p className="uppercase font-lora text-xs md:text-sm tracking-[0.25em] text-gold mb-4">
                Experiencia Culinaria
              </p>
              <h2 className="font-playball text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Menús Exclusivos
              </h2>
              <div className="divider-line" />
            </div>

            <div className="space-y-6">
              <p className="font-lora text-gray-300 text-base md:text-lg leading-relaxed">
                Cada menú es una obra maestra culinaria diseñada especialmente para tu evento.
                Trabajamos con ingredientes de la más alta calidad y presentaciones que
                deleitan todos los sentidos.
              </p>

              <p className="font-lora text-gray-300 text-base md:text-lg leading-relaxed">
                Nuestro chef ejecutivo y su equipo crean experiencias gastronómicas
                personalizadas que se adaptan a tus preferencias, restricciones dietéticas
                y el estilo de tu celebración.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                  <p className="font-lora text-sm md:text-base text-gray-300">Ingredientes premium de temporada</p>
                </div>
                <div className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                  <p className="font-lora text-sm md:text-base text-gray-300">Menús personalizados</p>
                </div>
                <div className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                  <p className="font-lora text-sm md:text-base text-gray-300">Opciones vegetarianas y veganas</p>
                </div>
                <div className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
                  <p className="font-lora text-sm md:text-base text-gray-300">Maridaje de vinos disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Categories Side */}
          <div className="space-y-6">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gold/20 rounded-sm p-6 md:p-8 hover:border-gold/50 transition-all duration-500"
              >
                <h3 className="font-lora text-2xl md:text-3xl text-gold mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="font-lora text-gray-300 text-sm md:text-base flex items-start gap-3"
                    >
                      <span className="text-gold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Note */}
            <div className="bg-gold/10 border border-gold/30 rounded-sm p-6 text-center">
              <p className="font-lora text-white text-sm md:text-base italic">
                Estos son ejemplos de nuestro menú. Cada evento tiene un menú único diseñado a medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanquetesMenu
