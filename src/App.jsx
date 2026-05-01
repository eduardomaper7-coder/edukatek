import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import Legal from './pages/Legal'
import CentroEstudios from './pages/CentroEstudios'
import CentroSociosanitario from './pages/CentroSociosanitario'

const Home = () => {
  return (
    <main className="bg-white text-black">
      <TopBar />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <Treatments />
      <WhyUs />
      <Testimonials />
      <FeaturedBox />
      <BlogSection />
      <Location />
      <ContactSection />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centro-estudios" element={<CentroEstudios />} />
        <Route path="/centro-sociosanitario" element={<CentroSociosanitario />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App