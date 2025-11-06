import './App.css'
import { useState, lazy, Suspense } from "react";
import Hero from "./components/Hero.jsx"
import Navbar from "./components/navbar.jsx";
import WhoIsAdjid from "./components/HowIsAdjid.jsx";
import RestaurantTabs from "./components/RestaurantTabs.jsx";
import ComingSoonApp from "./components/ComingSoonApp.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.jsx"));

function App() {
  const [activeRestaurant, setActiveRestaurant] = useState('asador-dona-tina');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App
