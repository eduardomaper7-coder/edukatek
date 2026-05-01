const LogopediaSection = () => {
  const phone = '34627408088'

  return (
    <section id="logopedia" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* HERO TEXTO + IMÁGENES */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* TEXTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Servicio principal
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
              Logopedia en Parla
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Tratamos dificultades relacionadas con el lenguaje, la comunicación,
              el habla, la audición, la voz y la deglución, desde la infancia hasta
              la tercera edad.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Las sesiones son individuales, personalizadas y adaptadas a las
              necesidades de cada persona, con seguimiento y coordinación con
              familias, educadores u otros profesionales.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${phone}?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20logopedia.`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-600"
              >
                Pedir información
              </a>

              <a
                href={`tel:${phone}`}
                className="rounded-xl border border-[#D23372] px-8 py-4 text-center text-lg font-bold text-[#D23372] transition hover:bg-[#D23372] hover:text-white"
              >
                Llamar 627 40 80 88
              </a>
            </div>
          </div>

          {/* IMÁGENES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/logopedia-1.jpeg"
              alt="Consulta de logopedia Edukatek"
              className="h-64 w-full rounded-3xl object-cover shadow-xl"
            />

            <img
              src="/logopedia-2.jpeg"
              alt="Sesión de logopedia"
              className="mt-10 h-64 w-full rounded-3xl object-cover shadow-xl"
            />

            <img
              src="/logopedia-3.jpeg"
              alt="Centro sociosanitario Edukatek"
              className="col-span-2 h-72 w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* BLOQUE MÉTODO */}
        <div className="mt-24 rounded-3xl bg-[#FFF7FB] p-8 shadow-lg md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
                Método de trabajo
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
                ¿Cómo trabajamos?
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Seguimos un proceso estructurado para evaluar, intervenir y
                acompañar cada caso de forma personalizada.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Toma de contacto',
                'Evaluación',
                'Intervención',
                'Seguimiento',
                'Coordinación',
                'Alta',
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="text-sm font-extrabold text-[#D23372]">
                    0{index + 1}
                  </span>
                  <p className="mt-2 font-bold text-[#8F1747]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ÁREAS */}
        <div className="mt-24">
          
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Áreas de intervención
            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
              Logopedia para todas las edades
            </h3>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            
            {/* INFANTIL */}
            <div className="rounded-3xl border border-[#D23372]/10 bg-white p-8 shadow-lg">
              <div className="mb-5 text-2xl">🧒</div>
              <h4 className="text-2xl font-extrabold text-[#8F1747]">
                Infantil
              </h4>
              <p className="mt-2 text-sm font-semibold text-[#D23372]">
                Atención temprana
              </p>
              <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                <li>Lenguaje y habla</li>
                <li>Deglución atípica</li>
                <li>Lectoescritura</li>
                <li>TDAH y TEA</li>
              </ul>
            </div>

            {/* ADULTOS */}
            <div className="rounded-3xl border border-[#D23372]/10 bg-white p-8 shadow-lg">
              <div className="mb-5 text-2xl">👥</div>
              <h4 className="text-2xl font-extrabold text-[#8F1747]">
                Adultos
              </h4>
              <p className="mt-2 text-sm font-semibold text-[#D23372]">
                Rehabilitación
              </p>
              <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                <li>Tartamudez</li>
                <li>Ictus</li>
                <li>Alteraciones orofaciales</li>
                <li>Reeducación auditiva</li>
              </ul>
            </div>

            {/* MAYORES */}
            <div className="rounded-3xl border border-[#D23372]/10 bg-white p-8 shadow-lg">
              <div className="mb-5 text-2xl">🤝</div>
              <h4 className="text-2xl font-extrabold text-[#8F1747]">
                Tercera edad
              </h4>
              <p className="mt-2 text-sm font-semibold text-[#D23372]">
                Acompañamiento
              </p>
              <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                <li>Disfagia</li>
                <li>Alzheimer / Parkinson</li>
                <li>Lenguaje tras ictus</li>
                <li>Apoyo a familiares</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LogopediaSection