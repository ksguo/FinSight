import Header from '@/components/Header.tsx'
import Hero from '@/components/Hero.tsx'
import Footer from './components/Footer'
import {Route, Routes} from "react-router-dom"; 
import DashboardPage from './pages/DashboardPage';
import AuthenticationPage from './pages/AuthenticationPage';
import RegisterPage from './pages/RegisterPage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
