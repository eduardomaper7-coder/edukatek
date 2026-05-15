const ayudas = [
  {
    title: 'Necesidad de Atención Temprana',
    description:
      'Orientación y acompañamiento para valorar e iniciar procesos de atención temprana.',
  },
  {
    title: 'Solicitud de plaza pública de Atención Temprana',
    description:
      'Ayuda en la gestión y preparación de documentación para solicitar plaza pública.',
  },
  {
    title: 'Reconocimiento de discapacidad',
    description:
      'Asesoramiento en trámites y valoración del grado de discapacidad.',
  },
  {
    title: 'Prestación por hijo a cargo con discapacidad',
    description:
      'Información y apoyo para acceder a ayudas y prestaciones familiares.',
  },
  {
    title: 'Ley de dependencia',
    description:
      'Acompañamiento en solicitudes, revisiones y recursos relacionados con dependencia.',
  },
]

const AyudasSection = () => {
  return (
    <section className="bg-[#FFF7FB] px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* CABECERA */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Ayudas y orientación
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
            Cheque servicio y ayudas sociales
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Te ayudamos a gestionar recursos, prestaciones y ayudas relacionadas
            con atención temprana, discapacidad y dependencia.
          </p>
        </div>

        {/* CHEQUE SERVICIO */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid items-center lg:grid-cols-2">

            <img
              src="/cheque-servicio.jpeg"
              alt="Cheque servicio"
              className="h-full w-full object-cover"
            />

            <div className="p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
                Información destacada
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
                Cheque servicio
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Información y orientación sobre cheque servicio, ayudas y
                recursos disponibles para familias y menores con necesidades
                de apoyo.
              </p>
            </div>
          </div>
        </div>

        {/* AYUDAS */}
<div className="mt-20">

  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-6">
    {ayudas.map((item, index) => (
      <div
        key={item.title}
        className={`rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl lg:col-span-2 ${
          index === 3 ? 'lg:col-start-2' : ''
        }`}
      >
        <div className="h-1 w-14 rounded-full bg-[#D23372]"></div>

        <h3 className="mt-6 text-2xl font-extrabold text-[#8F1747]">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-700">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default AyudasSection