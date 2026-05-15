const CentroEstudiosHero = () => {
  const phone = '34627408088'
  const phoneDisplay = '627 40 80 88'

  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre el Centro sociosanitario Calle Cuenca.'
  )

  return (
    <section
      id="centro-estudios"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#8F1747]/30"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#D23372]/20 via-[#8F1747]/30 to-[#3b0b20]/60"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-32 text-center">
        
        {/* ETIQUETA */}
        <p className="mb-4 rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur">
          Centro sociosanitario Calle Cuenca
        </p>

        {/* TÍTULO */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Logopedia, psicología, apoyo escolar e inglés
        </h1>

        {/* SUBTÍTULO */}
        <p className="mt-7 max-w-3xl text-lg leading-9 text-white/95 sm:text-xl">
          Espacio sociosanitario especializado en logopedia y psicología,
          complementado con apoyo escolar e inglés para potenciar aprendizaje,
          desarrollo y bienestar de cada alumno.
        </p>

        {/* TARJETAS */}
        <div className="mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-3">

          {/* LOGOPEDIA */}
          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🗣️
            </div>

            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Logopedia
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Evaluación e intervención personalizada en lenguaje, habla,
              comunicación, lectoescritura y dificultades del desarrollo.
            </p>

            <a
              href="#logopedia"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver logopedia →
            </a>
          </div>

          {/* PSICOLOGÍA */}
          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🧠
            </div>

            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Psicología
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Atención psicológica infantil y juvenil para trabajar emociones,
              conducta, autoestima, aprendizaje y bienestar emocional.
            </p>

            <a
              href="#psicologia"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver psicología →
            </a>
          </div>

          {/* APOYO ESCOLAR E INGLÉS */}
          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              📚
            </div>

            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Apoyo escolar e inglés
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Refuerzo académico e inglés adaptado a cada alumno para mejorar
              organización, comprensión, confianza y rendimiento escolar.
            </p>

            <a
              href="#apoyo-escolar"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver apoyo escolar →
            </a>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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

        {/* DIRECCIÓN */}
        <p className="mt-5 text-sm font-medium text-white/90">
          Centro sociosanitario Calle Cuenca · C/ Cuenca, 36 · Parla
        </p>
      </div>

      {/* WHATSAPP FIJO */}
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

export default CentroEstudiosHero