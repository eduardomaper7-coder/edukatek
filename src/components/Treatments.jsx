import { HashLink } from 'react-router-hash-link'
const centers = [
  {
    title: 'Centro Sociosanitario',
    subtitle: 'Logopedia, psicología y terapias infantiles',
    description:
      'Atención personalizada para niños, adolescentes, adultos y familias. Especialistas en logopedia, psicología, fisioterapia, terapia ocupacional e integración sensorial.',
    services: [
      'Logopedia',
      'Psicología',
      'Fisioterapia',
      'Terapia Ocupacional',
      'Integración Sensorial',
    ],
    image: '/centro-sociosanitario.jpeg',
    link: '/centro-sociosanitario#centro-sociosanitario',
    button: 'Ver centro sociosanitario',
  },
  {
    title: 'Centro de Estudios',
    subtitle: 'Apoyo escolar, inglés y talleres',
    description:
      'Acompañamos a cada alumno para mejorar su rendimiento, confianza y hábitos de estudio mediante grupos reducidos y atención personalizada.',
    services: [
      'Apoyo escolar',
      'Infantil y Primaria',
      'ESO y Bachillerato',
      'Inglés',
      'Talleres para mayores',
    ],
    image: '/centro-estudios.jpg',
    link: '/centro-estudios#centro-estudios',
    button: 'Ver centro de estudios',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#fff7fb] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Nuestros centros
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-5xl">
            Elige el centro que necesitas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            EDUKATEK cuenta con dos espacios especializados en Parla: uno
            sociosanitario y otro educativo, ambos con atención cercana,
            profesional y personalizada.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {centers.map((center) => (
            <article
              key={center.title}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={center.image}
                alt={center.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
                  {center.subtitle}
                </p>

                <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
                  {center.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-700">
                  {center.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {center.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-[#FFF7FB] px-4 py-2 text-sm font-semibold text-[#8F1747]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <HashLink
  smooth
  to={center.link}
  className="mt-8 inline-flex rounded-xl bg-[#D23372] px-7 py-4 text-base font-bold text-white transition hover:bg-[#8F1747]"
>
  {center.button}
</HashLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments