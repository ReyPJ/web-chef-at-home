
import { useState, lazy, Suspense } from "react";
import Hero from "../components/Hero.jsx"
import WhoIsAdjid from "../components/HowIsAdjid.jsx";
import RestaurantTabs from "../components/RestaurantTabs.jsx";
import ComingSoonApp from "../components/ComingSoonApp.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const RestaurantMenu = lazy(() => import("../components/RestaurantMenu.jsx"));

function HomePage() {
  const [activeRestaurant, setActiveRestaurant] = useState('asador-dona-tina');

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="content-background z-10">
        <ComingSoonApp />
        <WhoIsAdjid />
        <RestaurantTabs
          activeRestaurant={activeRestaurant}
          onRestaurantChange={setActiveRestaurant}
        />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gold font-playball text-4xl">Cargando...</div>
          </div>
        }>
          <RestaurantMenu activeRestaurant={activeRestaurant} />
        </Suspense>
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default HomePage
