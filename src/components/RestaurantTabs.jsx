import { restaurantes } from "../data/restaurantes.js";


function RestaurantTabs({ activeRestaurant, onRestaurantChange }) {
  const currentRestaurant = restaurantes.find(r => r.id === activeRestaurant);

  return (
    <section className="bg-transparent pb-10 pt-0 px-6" id="restaurantes" >
      <div className="max-w-6xl mx-auto">

        {/* TABS CON LOGOS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-12">
          {restaurantes.map(restaurant => (
            <a href="#menu">
              <button
                key={restaurant.id}
                onClick={() => onRestaurantChange(restaurant.id)}
                className={`transition-all rounded-xl duration-300 bg-white/40 p-2 ${activeRestaurant === restaurant.id
                  ? 'opacity-100 scale-110'
                  : 'opacity-60 hover:opacity-80'
                  }`}
              >
                <img
                  src={`/logos/${restaurant.id}.webp`}
                  alt={restaurant.name}
                  className="h-20 md:h-24 lg:h-28 object-contain"
                />
              </button>
            </a>
          ))}
        </div>

        {/* QUOTE DEL CHEF */}
        <div className="text-center">
          <p className="text-white font-semibold font-lora italic text-base md:text-lg lg:text-xl text-center max-w-3xl leading-relaxed mx-auto mb-6 px-4">
            "{currentRestaurant.description}"
          </p>
          <p className="text-white font-semibold font-playball text-xl md:text-2xl lg:text-3xl">
            Chef Adjid Velasco
          </p>
        </div>
      </div>
    </section>
  )
}


export default RestaurantTabs;
