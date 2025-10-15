import './App.css'
// import { useState } from "react";
// import { restaurantes } from "./data/restaurantes.js";
import Hero from "./components/Hero.jsx"
import Navbar from "./components/navbar.jsx";
import HowIsAdjid from "./components/HowIsAdjid.jsx";

function App() {
    // const [activeRestaurant, setActiveRestaurant] = useState(restaurantes[0].id)
    // const currentRestaurant = restaurantes.find(r => r.id === activeRestaurant)


  return (
      <div className="min-h-screen bg-white">
          <Navbar />
          <Hero />
          <HowIsAdjid />
          {/*<RestaurantTabs*/}
          {/*  restaurants={restaurantes}*/}
          {/*  activeRestaurant={activeRestaurant}*/}
          {/*  onTabChange={setActiveRestaurant}*/}
          {/*/>*/}
          {/*<RestaurantContent*/}
          {/*  restaurant={currentRestaurant}*/}
          {/*/>*/}
          {/*<Footer />*/}
      </div>
  )
}

export default App
