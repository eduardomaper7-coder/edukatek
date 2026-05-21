import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de logopedia, psicología y atención temprana.'
  )

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#D23372]/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-4 py-3">

        {/* LOGO */}
        <HashLink
          smooth
          to="/#inicio"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="/logo-edukatek.png"
            alt="Edukatek"
            className="h-10 w-10 object-contain"
          />

          <span className="whitespace-nowrap text-2xl font-extrabold text-[#D23372]">
            Edukatek
          </span>
        </HashLink>

        {/* MENÚ */}
        <nav className="hidden flex-1 items-center justify-center gap-5 px-4 xl:flex">

          <HashLink
            smooth
            to="/#inicio"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Inicio
          </HashLink>

          <HashLink
            smooth
            to="/#servicios"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Servicios
          </HashLink>

          <HashLink
            smooth
            to="/#ayudas"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Solicitud de ayudas y prestaciones
          </HashLink>

          <HashLink
            smooth
            to="/centro-estudios#centro-estudios"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Sociosanitario Calle Cuenca
          </HashLink>

          <HashLink
            smooth
            to="/centro-sociosanitario#centro-sociosanitario"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Sociosanitario Calle Ciudad Real
          </HashLink>

          <HashLink
            smooth
            to="/#contacto"
            className="whitespace-nowrap text-[15px] font-semibold text-black transition hover:text-[#D23372]"
          >
            Contacto
          </HashLink>
        </nav>

        {/* BOTÓN WHATSAPP */}
        <a
          href={`https://wa.me/34627408088?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#D23372] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#8F1747]"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-5 w-5 object-contain"
          />

          <span className="whitespace-nowrap">
            Pedir información
          </span>
        </a>
      </div>
    </header>
  )
}

export default Navbar