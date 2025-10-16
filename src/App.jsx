import './App.css'
import { useState } from "react";
import Hero from "./components/Hero.jsx"
import Navbar from "./components/navbar.jsx";
import WhoIsAdjid from "./components/HowIsAdjid.jsx";
import RestaurantTabs from "./components/RestaurantTabs.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import bgImage from "./assets/images/background.webp"

function App() {
    const [activeRestaurant, setActiveRestaurant] = useState('asador-dona-tina');


    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <div className="content-background z-10"
                 style={{
                     '--bg-image': `url(${bgImage})`,
                 }}
            >
                <style>{
                    `.content-background::before {
                        background-image: var(--bg-image);
                    }`
                }</style>
                <WhoIsAdjid />
                <RestaurantTabs
                    activeRestaurant={activeRestaurant}
                    onRestaurantChange={setActiveRestaurant}
                />

                <RestaurantMenu
                    activeRestaurant={activeRestaurant}
                />
            </div>
        </div>
    )
}

export default App
