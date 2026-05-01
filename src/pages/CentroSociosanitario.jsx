import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CentroSociosanitarioHero from '../components/CentroSociosanitarioHero'
import LogopediaSection from '../components/LogopediaSection'
import FisioterapiaSection from '../components/FisioterapiaSection'
import PsicologiaSection from '../components/PsicologiaSection'
import TerapiaOcupacionalSection from '../components/TerapiaOcupacionalSection'
import MapSection from '../components/MapSection'
<section id="hero-sociosanitario" className="..."></section>
const CentroSociosanitario = () => {
  return (
    <main className="bg-white text-black">
      <TopBar />
      <Navbar />
      <CentroSociosanitarioHero />
      <LogopediaSection />
      <FisioterapiaSection />
      <PsicologiaSection />
      <TerapiaOcupacionalSection />
      <MapSection />
      <Footer />
    </main>
  )
}

export default CentroSociosanitario