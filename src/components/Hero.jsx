import heroImg from '../assets/hero-logopedia.jpg'
import heroMobileImg from '../assets/hero-mobile.jpg'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  const phone = '34627408088'
  const phoneDisplay = '627 40 80 88'

  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de Edukatek Parla.'
  )

  const logoEdukatek = '/logo-edukatek.png'

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: `url(${heroMobileImg})`,
        }}
      />

      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block md:bg-fixed"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      <div className="absolute inset-0 bg-[#D23372]/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#D23372]/30 via-[#D23372]/40 to-[#8F1747]/60"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        
        {/* TÍTULO */}
<h1 className="mx-auto max-w-6xl text-center font-extrabold leading-[1.15] text-white">
  <span className="block px-2 text-4xl sm:whitespace-nowrap sm:text-5xl lg:text-6xl">
    Atención Temprana EDUKATEK Parla
  </span>

  <span className="mt-2 block px-2 text-4xl sm:whitespace-nowrap sm:text-5xl lg:text-6xl">
    Logopedia y Psicología
  </span>
</h1>

{/* SUBTÍTULO */}
<p className="mt-6 max-w-3xl px-4 text-center text-base leading-7 text-white/95 sm:text-xl sm:leading-8">
  Dos centros sociosanitarios especializados en Parla: atención temprana,
  logopedia, psicología, integración sensorial, terapia ocupacional,
  reeducación pedagógica, técnicas de estudio e inglés.
</p>

{/* RECUADROS */}
<div className="mt-12 flex flex-col items-center gap-5 lg:flex-row">
  
  {/* CUENCA */}
  <HashLink
    smooth
    to="/centro-sociosanitario#centro-sociosanitario"
    className="flex w-[280px] flex-col items-center justify-center rounded-2xl bg-white px-6 py-5 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white/95"
  >
    <div className="mb-3 flex items-center gap-2">
      <img
        src={logoEdukatek}
        alt="Logo Edukatek"
        className="h-9 w-9 rounded-full object-cover"
      />

      <span className="text-xl font-extrabold tracking-tight text-[#8F1747]">
        EDUKATEK
      </span>
    </div>

    <span className="text-lg font-bold text-[#D23372]">
      Centro sociosanitario
    </span>

    <span className="mt-1 text-base font-medium text-[#8F1747]">
       Calle Ciudad Real
    </span>
  </HashLink>

  {/* CIUDAD REAL */}
<HashLink
  smooth
  to="/centro-estudios#centro-estudios"
  className="flex w-[280px] flex-col items-center justify-center rounded-2xl bg-[#8F1747] px-6 py-5 text-center text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#73133a]"
>
    <div className="mb-3 flex items-center gap-2">
      <img
        src={logoEdukatek}
        alt="Logo Edukatek"
        className="h-9 w-9 rounded-full object-cover"
      />

      <span className="text-xl font-extrabold tracking-tight">
        EDUKATEK
      </span>
    </div>

    <span className="text-lg font-bold text-white">
      Centro sociosanitario
    </span>

    <span className="mt-1 text-base font-medium text-white/90">
      Calle Cuenca
    </span>
  </HashLink>
</div>

        {/* BOTONES */}
<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
  <a
    href={`https://wa.me/${phone}?text=${whatsappMessage}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-600"
  >
    <img
      src="/whatsapp.png"
      alt="WhatsApp"
      className="h-6 w-6 object-contain"
    />
    WhatsApp
  </a>

  <a
    href={`tel:${phone}`}
    className="inline-flex items-center rounded-2xl border-2 border-white px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-white hover:text-[#D23372]"
  >
    Llamar {phoneDisplay}
  </a>
</div>

        

        <a
          href="#servicios"
          className="mt-16 inline-flex flex-col items-center text-base font-medium text-white transition hover:text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      {/* BOTÓN WHATSAPP FIJO */}
      <a
        href={`https://wa.me/${phone}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 shadow-lg transition hover:bg-green-600"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
      </a>
    </section>
  )
}

export default Hero