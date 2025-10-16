import {restaurantes} from "../data/restaurantes.js";


function RestaurantTabs({activeRestaurant, onRestaurantChange}) {
    const currentRestaurant = restaurantes.find(r => r.id === activeRestaurant);

    return (
        <section className="bg-transparent pb-10 pt-0 px-6" id="restaurantes" >
            <div className="max-w-6xl mx-auto">

                {/* TABS CON LOGOS */}
                <div className="flex justify-center gap-8 mb-12">
                    {restaurantes.map(restaurant => (
                        <button
                            key={restaurant.id}
                            onClick={() => onRestaurantChange(restaurant.id)}
                            className={`transition-all duration-300 ${
                                activeRestaurant === restaurant.id
                                    ? 'opacity-100 scale-110'
                                    : 'opacity-60 hover:opacity-80'
                            }`}
                        >
                            <img
                                src={`/logos/${restaurant.id}.webp`}
                                alt={restaurant.name}
                                className="h-24 object-contain"
                            />
                        </button>
                    ))}
                </div>

                {/* QUOTE DEL CHEF */}
                <div className="text-center">
                    <p className="text-white font-semibold font-playfair italic text-lg text-center max-w-3xl leading-relaxed mx-auto mb-6">
                        "{currentRestaurant.description}"
                    </p>
                    <p className="text-white font-semibold font-playball text-2xl">
                        Chef Adjid Velasco
                    </p>
                </div>
            </div>
        </section>
    )
}


export default RestaurantTabs;