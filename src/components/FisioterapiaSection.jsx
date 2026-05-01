const FisioterapiaSection = () => {
  const phone = '34627408088'

  const tratamientos = [
    'Fisioterapia pediátrica',
    'Fisioterapia respiratoria',
    'Lesiones neurológicas',
    'Fisioterapia traumatológica',
    'Punción seca',
  ]

  return (
    <section id="fisioterapia" className="bg-[#FFF7FB] px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* BLOQUE PRINCIPAL */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* IMAGEN */}
          <div className="relative">
            <img
              src="/fisioterapia.jpg"
              alt="Sesión de fisioterapia en Edukatek"
              className="h-[450px] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* TEXTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Fisioterapia
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
              Fisioterapia infantil y general en Parla
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Tratamos de forma temprana los trastornos del desarrollo desde la
              infancia para evitar que se prolonguen en el tiempo.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Trabajo multidisciplinar con logopedia, psicología y terapia
              ocupacional para una atención completa y personalizada.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${phone}?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20fisioterapia.`}
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
        </div>

        {/* TRATAMIENTOS */}
        <div className="mt-24">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Tratamientos
            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
              ¿Cómo podemos ayudarte?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Tratamientos personalizados adaptados a cada etapa y necesidad.
            </p>
          </div>

          {/* GRID SIMÉTRICO */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-6">
            
            {tratamientos.map((item, index) => (
              <div
                key={item}
                className={`group rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl lg:col-span-2 ${
                  index === 3 ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Línea decorativa en vez de icono */}
                <div className="mx-auto h-1 w-12 rounded-full bg-[#D23372]"></div>

                <p className="mt-6 text-lg font-semibold text-gray-900">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default FisioterapiaSection