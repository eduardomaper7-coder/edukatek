import heroImg from '../assets/hero-logopedia.jpg'
import heroMobileImg from '../assets/hero-mobile.jpg'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  const phone = '34627408088'
  const phoneDisplay = '627 40 80 88'

  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios (Centro de Estudios / Centro Sociosanitario).'
  )

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
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
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Logopedia, Psicología y Apoyo Escolar en Parla
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/95 sm:text-xl">
          Dos centros especializados para acompañar a niños, adolescentes y familias:
          apoyo educativo y atención sociosanitaria profesional.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <HashLink
            smooth
            to="/centro-estudios#centro-estudios"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#D23372] transition hover:bg-white/90"
          >
            Centro de Estudios
          </HashLink>

          <HashLink
            smooth
            to="/centro-sociosanitario#centro-sociosanitario"
            className="inline-flex items-center justify-center rounded-xl bg-[#8F1747] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#73133a]"
          >
            Centro Sociosanitario
          </HashLink>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 text-base font-bold text-white transition hover:bg-green-600"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-5 w-5 object-contain" />
            WhatsApp
          </a>

          <a
            href={`tel:${phone}`}
            className="inline-flex items-center rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-[#D23372]"
          >
            Llamar {phoneDisplay}
          </a>
        </div>

        <p className="mt-4 text-sm text-white/90">
          📞 Este teléfono y WhatsApp sirven para ambos centros
        </p>

        <a
          href="#servicios"
          className="mt-16 inline-flex flex-col items-center text-base font-medium text-white transition hover:text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

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