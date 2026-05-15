import { HashLink } from 'react-router-hash-link'

const centers = [
  {
    title: 'Centro sociosanitario Calle Ciudad Real',
    subtitle: 'Logopedia, psicología y terapias infantiles',
    description:
      'Atención personalizada para niños, adolescentes y familias. Especialistas en logopedia, psicología, fisioterapia, terapia ocupacional e integración sensorial.',
    services: [
      'Logopedia',
      'Psicología',
      'Fisioterapia',
      'Terapia Ocupacional',
      'Integración Sensorial',
    ],
    image: '/centro-sociosanitario.jpeg',
    link: '/centro-sociosanitario#centro-sociosanitario',
    button: 'Ver centro Calle Ciudad Real',
  },
  {
    title: 'Centro sociosanitario Calle Cuenca',
    subtitle: 'Logopedia, psicología, apoyo escolar e inglés',
    description:
      'Espacio sociosanitario especializado principalmente en logopedia y psicología, con apoyo escolar e inglés para acompañar el desarrollo, aprendizaje y bienestar de cada alumno.',
    services: [
      'Logopedia',
      'Psicología',
      'Apoyo escolar',
      'Inglés',
      'Atención personalizada',
    ],
    image: '/centro-estudios.jpg',
    link: '/centro-estudios#centro-estudios',
    button: 'Ver centro Calle Cuenca',
  },
]

const Treatments = () => {
  return (
    <section
  id="servicios"
  className="scroll-mt-28 bg-[#fff7fb] px-5 py-24 sm:px-8 lg:px-14"
>
  <div className="mx-auto max-w-[1600px]">
        
        {/* CABECERA */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Nuestros centros
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-5xl">
            Elige el centro que necesitas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            EDUKATEK cuenta con dos centros sociosanitarios especializados en
            Parla, ubicados en Calle Ciudad Real y Calle Cuenca, ambos con
            atención cercana, profesional y personalizada.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid gap-8 lg:grid-cols-2">
          {centers.map((center) => (
            <article
              key={center.title}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* IMAGEN */}
              <img
                src={center.image}
                alt={center.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                {/* SUBTÍTULO */}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86A8D]">
                  {center.subtitle}
                </p>

                {/* TÍTULO */}
                <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#8F1747] whitespace-nowrap">
                  {center.title.includes('Ciudad Real')
                    ? <>Centro sociosanitario Calle Ciudad&nbsp;Real</>
                    : center.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  {center.description}
                </p>

                {/* SERVICIOS */}
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

                {/* BOTÓN */}
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