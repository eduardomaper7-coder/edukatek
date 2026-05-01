const CentroSociosanitarioHero = () => {
  const phone = '34627408088'
  const phoneDisplay = '627 40 80 88'

  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre el Centro Sociosanitario Edukatek.'
  )

  return (
    <section
      id="centro-sociosanitario"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-sociosanitario.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#8F1747]/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#D23372]/25 via-[#8F1747]/40 to-[#3b0b20]/75"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-32 text-center">
        <p className="mb-4 rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur">
          Centro Sociosanitario Edukatek
        </p>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Logopedia, psicología y terapias infantiles en Parla
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-9 text-white/95 sm:text-xl">
          Atención personalizada para niños, adolescentes, adultos y familias.
          Evaluamos, intervenimos y acompañamos cada caso con un enfoque cercano,
          profesional y coordinado.
        </p>

        <div className="mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-5">
          <a
            href="#logopedia"
            className="rounded-3xl bg-white p-5 text-center shadow-2xl transition hover:-translate-y-1 hover:shadow-3xl"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🗣️
            </div>
            <h2 className="text-lg font-extrabold text-[#8F1747]">
              Logopedia
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#D23372]">
              Servicio principal
            </p>
          </a>

          <a
            href="#fisioterapia"
            className="rounded-3xl bg-white/95 p-5 text-center shadow-xl transition hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🧘
            </div>
            <h2 className="text-lg font-extrabold text-[#8F1747]">
              Fisioterapia
            </h2>
          </a>

          <a
            href="#psicologia"
            className="rounded-3xl bg-white/95 p-5 text-center shadow-xl transition hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🧠
            </div>
            <h2 className="text-lg font-extrabold text-[#8F1747]">
              Psicología
            </h2>
          </a>

          <a
            href="#terapia-ocupacional"
            className="rounded-3xl bg-white/95 p-5 text-center shadow-xl transition hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🤲
            </div>
            <h2 className="text-lg font-extrabold text-[#8F1747]">
              Terapia Ocupacional
            </h2>
          </a>

          <a
            href="#integracion-sensorial"
            className="rounded-3xl bg-white/95 p-5 text-center shadow-xl transition hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🌈
            </div>
            <h2 className="text-lg font-extrabold text-[#8F1747]">
              Integración Sensorial
            </h2>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#logopedia"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#D23372] transition hover:bg-white/90"
          >
            Ver logopedia
          </a>

          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-green-600"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-6 w-6 object-contain"
            />
            Pedir información
          </a>

          <a
            href={`tel:${phone}`}
            className="inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#D23372]"
          >
            Llamar {phoneDisplay}
          </a>
        </div>

        <p className="mt-5 text-sm font-medium text-white/90">
          Centro Sociosanitario Edukatek · C/ Ciudad Real, 6 · Parla
        </p>
      </div>

      <a
        href={`https://wa.me/${phone}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-2xl ring-4 ring-white/80 transition hover:scale-110 hover:bg-green-600"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-11 w-11" />
      </a>
    </section>
  )
}

export default CentroSociosanitarioHero