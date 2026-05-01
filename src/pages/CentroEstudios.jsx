import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import CentroEstudiosHero from '../components/CentroEstudiosHero'
import ApoyoEscolarSection from '../components/ApoyoEscolarSection'
import InglesSection from '../components/InglesSection'
import TalleresSection from '../components/TalleresSection'
import MapCentroEstudios from '../components/MapCentroEstudios'
<section id="hero-estudios" className="..."></section>
const CentroEstudios = () => {
  return (
    <main className="bg-white text-black">
      <TopBar />
      <Navbar />
      <CentroEstudiosHero />
      <ApoyoEscolarSection />
      <InglesSection />
      <TalleresSection />
      <MapCentroEstudios />
      <Footer />
    </main>
  )
}

export default CentroEstudios