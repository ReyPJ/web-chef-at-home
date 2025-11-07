import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/Home.jsx"
import BanquetesPage from './pages/Banquetes.jsx'

function AppContent() {
  const location = useLocation()
  const isBanquetesPage = location.pathname === '/banquetes'

  return (
    <>
      {!isBanquetesPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banquetes" element={<BanquetesPage />} />
      </Routes>
      <Footer />
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
