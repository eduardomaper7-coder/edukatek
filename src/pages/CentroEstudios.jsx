import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

import CentroEstudiosHero from '../components/CentroEstudiosHero'

import LogopediaSection from '../components/LogopediaSection'
import PsicologiaSection from '../components/PsicologiaSection'

import ApoyoEscolarSection from '../components/ApoyoEscolarSection'
import InglesSection from '../components/InglesSection'
import AutorizacionesCuencaSection from '../components/AutorizacionesCuencaSection'
import MapCentroEstudios from '../components/MapCentroEstudios'

const CentroEstudios = () => {
  return (
    <main className="bg-white text-black">
      <TopBar />

      <Navbar />

      <CentroEstudiosHero />
<AutorizacionesCuencaSection />
      {/* NUEVAS SECCIONES */}
      <LogopediaSection />

      <PsicologiaSection />

      {/* SECCIONES EXISTENTES */}
      <ApoyoEscolarSection />

      <InglesSection />

      <MapCentroEstudios />

      <Footer />
    </main>
  )
}

export default CentroEstudios