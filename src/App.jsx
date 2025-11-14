import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/Home.jsx"
import BanquetesPage from './pages/Banquetes.jsx'
import PrivacidadTerminosPage from './pages/PrivacidadTerminos.jsx'
import PagoExitosoPage from './pages/PagoExitoso.jsx'
import PagoCanceladoPage from './pages/PagoCancelado.jsx'

function AppContent() {
  const location = useLocation()
  const isBanquetesPage = location.pathname === '/banquetes'
  const isPrivacidadTerminosPage = location.pathname === '/privacidad-terminos'
  const isPagoExitosoPage = location.pathname === '/pago-exitoso'
  const isPagoCanceladoPage = location.pathname === '/pago-cancelado'

  // Pages that should not show navbar/footer (standalone pages)
  const isStandalonePage = isPrivacidadTerminosPage || isPagoExitosoPage || isPagoCanceladoPage

  return (
    <>
      {!isBanquetesPage && !isStandalonePage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banquetes" element={<BanquetesPage />} />
        <Route path="/privacidad-terminos" element={<PrivacidadTerminosPage />} />
        <Route path="/pago-exitoso" element={<PagoExitosoPage />} />
        <Route path="/pago-cancelado" element={<PagoCanceladoPage />} />
      </Routes>
      {!isStandalonePage && <Footer />}
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
