import WhatsAppButton from "../components/WhatsAppButton.jsx"
import BanquetesHero from "../components/BanquetesHero.jsx"
import BanquetesNavbar from "../components/BanquetesNavbar.jsx"
import BanquetesAbout from "../components/BanquetesAbout.jsx"
import BanquetesServices from "../components/BanquetesServices.jsx"
import BanquetesGallery from "../components/BanquetesGallery.jsx"
import BanquetesMenu from "../components/BanquetesMenu.jsx"
import BanquetesContact from "../components/BanquetesContact.jsx"

function BanquetesPage() {
  return (
    <div className="min-h-screen bg-black">
      <WhatsAppButton />
      <BanquetesHero />
      <BanquetesNavbar />
      <BanquetesAbout />
      <BanquetesServices />
      <BanquetesGallery />
      <BanquetesMenu />
      <BanquetesContact />
    </div>
  )
}

export default BanquetesPage
