import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de logopedia, psicología y atención temprana.'
  )

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#D23372]/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        <HashLink smooth to="/#inicio" className="flex items-center gap-3">
          <img
            src="/logo-edukatek.png"
            alt="Edukatek"
            className="h-10 w-10 object-contain"
          />

          <span className="text-2xl font-extrabold text-[#D23372] md:text-3xl">
            Edukatek
          </span>
        </HashLink>

        <nav className="hidden items-center gap-6 md:flex">
          <HashLink
            smooth
            to="/#inicio"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Inicio
          </HashLink>

          <HashLink
            smooth
            to="/#servicios"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Servicios
          </HashLink>

          <HashLink
            smooth
            to="/centro-estudios#centro-estudios"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Centro de Estudios
          </HashLink>

          <HashLink
            smooth
            to="/centro-sociosanitario#centro-sociosanitario"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Centro Sociosanitario
          </HashLink>

          <HashLink
            smooth
            to="/#contacto"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Contacto
          </HashLink>
        </nav>

        <a
          href={`https://wa.me/34627408088?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#D23372] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#8F1747]"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-5 w-5 object-contain"
          />
          Pedir información
        </a>
      </div>
    </header>
  )
}

export default Navbar