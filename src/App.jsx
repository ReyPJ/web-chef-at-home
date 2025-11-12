import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/Home.jsx"
import BanquetesPage from './pages/Banquetes.jsx'
import PrivacidadTerminosPage from './pages/PrivacidadTerminos.jsx'

function AppContent() {
  const location = useLocation()
  const isBanquetesPage = location.pathname === '/banquetes'
  const isPrivacidadTerminosPage = location.pathname === '/privacidad-terminos'

  return (
    <>
      {!isBanquetesPage && !isPrivacidadTerminosPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banquetes" element={<BanquetesPage />} />
        <Route path="/privacidad-terminos" element={<PrivacidadTerminosPage />} />
      </Routes>
      {!isPrivacidadTerminosPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
