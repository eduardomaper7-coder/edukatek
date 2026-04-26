import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración individualizada',
    text: 'Realizamos una evaluación completa para entender las necesidades de cada niño, adolescente o adulto y diseñar una intervención adaptada.',
  },
  {
    icon: <FaMagic />,
    title: 'Intervención personalizada',
    text: 'Aplicamos técnicas específicas de logopedia, psicología y atención temprana adaptadas a cada caso para lograr avances reales.',
  },
  {
    icon: <FaAward />,
    title: 'Equipo especializado',
    text: 'Contamos con profesionales cualificados en logopedia, psicología y desarrollo infantil en constante formación.',
  },
  {
    icon: <FaUsers />,
    title: 'Trabajo con familias',
    text: 'Acompañamos y orientamos a las familias durante todo el proceso para potenciar los resultados fuera de las sesiones.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            Nuestro enfoque está centrado en la persona, combinando profesionalidad,
            cercanía y atención personalizada
          </p>
        </div>

        <div className="rounded-3xl bg-[#f7d8e6] p-8 shadow-[0_20px_60px_rgba(210,51,114,0.12)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D23372] text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#8F1747]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork