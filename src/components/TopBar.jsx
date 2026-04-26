const Navbar = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de logopedia, psicología y atención temprana.'
  )

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#D23372]/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Marca */}
        <a href="#inicio" className="flex items-center shrink-0">
          <span className="text-2xl font-extrabold text-[#D23372] md:text-3xl">
            Edukatek
          </span>
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#inicio"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Servicios
          </a>

          <a
            href="#tarifas"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Tarifas
          </a>

          <a
            href="#contacto"
            className="text-base font-semibold text-black transition hover:text-[#D23372]"
          >
            Contacto
          </a>
        </nav>

        {/* Botón WhatsApp */}
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