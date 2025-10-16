import './App.css'
// import { useState } from "react";
// import { restaurantes } from "./data/restaurantes.js";
import Hero from "./components/Hero.jsx"
import Navbar from "./components/navbar.jsx";
import WhoIsAdjid from "./components/HowIsAdjid.jsx";
import bgImage from "./assets/images/background.webp"

function App() {
    // const [activeRestaurant, setActiveRestaurant] = useState(restaurantes[0].id)
    // const currentRestaurant = restaurantes.find(r => r.id === activeRestaurant)


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
            </div>
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
