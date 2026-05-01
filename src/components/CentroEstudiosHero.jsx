const CentroEstudiosHero = () => {
  const phone = '34627408088'
  const phoneDisplay = '627 40 80 88'

  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre el Centro de Estudios Edukatek.'
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
        <p className="mb-4 rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur">
          Centro de Estudios Edukatek
        </p>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Apoyo escolar, inglés y talleres para mayores en Parla
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-9 text-white/95 sm:text-xl">
          Formación cercana, grupos reducidos y atención personalizada para
          ayudar a cada alumno a avanzar con confianza, organización y buenos
          hábitos de aprendizaje.
        </p>

        <div className="mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              📚
            </div>
            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Apoyo escolar
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-700">
              Refuerzo para Infantil, Primaria, ESO y Bachillerato con
              seguimiento personalizado, técnicas de estudio y resolución de
              dudas.
            </p>
            <a
              href="#apoyo-escolar"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver apoyo escolar →
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🇬🇧
            </div>
            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Inglés
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-700">
              Clases de inglés para niños, jóvenes y adultos: refuerzo,
              conversación, preparación de exámenes y aprendizaje práctico.
            </p>
            <a
              href="#ingles"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver inglés →
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 text-left shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🧠
            </div>
            <h2 className="text-2xl font-extrabold text-[#8F1747]">
              Talleres para mayores
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-700">
              Actividades para estimular memoria, lenguaje, atención,
              percepción, relaciones sociales y autonomía personal.
            </p>
            <a
              href="#talleres"
              className="mt-5 inline-flex font-bold text-[#D23372] hover:underline"
            >
              Ver talleres →
            </a>
          </div>
        </div>

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

        <p className="mt-5 text-sm font-medium text-white/90">
          Centro de Estudios Edukatek · C/ Cuenca, 36 · Parla
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

export default CentroEstudiosHero