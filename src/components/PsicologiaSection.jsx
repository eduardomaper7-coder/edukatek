const PsicologiaSection = () => {
  const phone = '34627408088'

  const areas = [
    {
      title: 'Infancia y adolescencia',
      subtitle: 'Área infanto-juvenil',
      items: [
        'Atención temprana y dificultades del desarrollo',
        'Problemas de comportamiento',
        'Dificultades escolares, hábitos y técnicas de estudio',
        'Atención, memoria y TDAH',
        'Trastornos generalizados del desarrollo',
      ],
    },
    {
      title: 'Área familiar',
      subtitle: 'Acompañamiento a familias',
      items: [
        'Asesoramiento para padres',
        'Escuela de padres',
        'Orientación en pautas educativas',
        'Apoyo en dinámicas familiares',
      ],
    },
    {
      title: 'Área de adultos',
      subtitle: 'Bienestar emocional',
      items: [
        'Ansiedad',
        'Depresión',
        'Intervención familiar',
        'Estimulación cognitiva para adultos mayores',
        'Atención, memoria y lenguaje',
      ],
    },
  ]

  return (
    <section id="psicologia" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Psicología
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
              Psicología infantil, familiar y de adultos en Parla
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Acompañamos a niños, adolescentes, adultos y familias para mejorar
              el bienestar emocional, la conducta, el aprendizaje y las relaciones.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Trabajamos desde una atención cercana y personalizada, adaptando la
              intervención a cada etapa y necesidad.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${phone}?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20psicolog%C3%ADa.`}
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

          <div className="relative">
            <img
              src="/psicologia.jpg"
              alt="Psicología en Edukatek"
              className="h-[460px] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Áreas de intervención
            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
              Atención psicológica adaptada a cada etapa
            </h3>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-[#FFF7FB] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 h-1 w-14 rounded-full bg-[#D23372]"></div>

                <h4 className="text-2xl font-extrabold text-[#8F1747]">
                  {area.title}
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#D23372]">
                  {area.subtitle}
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PsicologiaSection