import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import CentroSociosanitarioHero from '../components/CentroSociosanitarioHero'

import LogopediaSection from '../components/LogopediaSection'
import PsicologiaSection from '../components/PsicologiaSection'
import FisioterapiaSection from '../components/FisioterapiaSection'
import TerapiaOcupacionalSection from '../components/TerapiaOcupacionalSection'
import AcreditacionesSection from '../components/AcreditacionesSection'

import MapSection from '../components/MapSection'

const CentroSociosanitario = () => {
  return (
    <main className="bg-white text-black">
      <TopBar />

      <Navbar />

      <CentroSociosanitarioHero />

      <AcreditacionesSection />

      {/* ORDEN DE SECCIONES */}
      <LogopediaSection />

      <PsicologiaSection />

      <FisioterapiaSection />

      <TerapiaOcupacionalSection />

      <MapSection />

      <Footer />
    </main>
  )
}

export default CentroSociosanitario