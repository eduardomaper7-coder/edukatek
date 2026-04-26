const services = [
  {
    title: 'Logopedia',
    description:
      'Evaluación e intervención en dificultades del habla, lenguaje, comunicación, voz, lectura, escritura y deglución, tanto en niños como en adultos.',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Psicología infantil, adolescentes y adultos',
    description:
      'Acompañamiento psicológico personalizado para trabajar emociones, conducta, autoestima, ansiedad, dificultades familiares y bienestar personal.',
    image:
      'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atención Temprana',
    description:
      'Intervención especializada para favorecer el desarrollo global de los niños en sus primeras etapas, apoyando también a las familias.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Psicomotricidad y estimulación sensorial',
    description:
      'Sesiones orientadas a mejorar la coordinación, el movimiento, la autonomía, la integración sensorial y el desarrollo corporal del niño.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#D23372] sm:text-4xl">
            Nuestros servicios
          </h2>

          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Terapias personalizadas para acompañar el desarrollo, la comunicación
            y el bienestar emocional de niños, adolescentes, adultos y familias.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(210,51,114,0.12)] transition hover:shadow-[0_15px_40px_rgba(210,51,114,0.18)]"
            >
              <div className="w-[40%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex w-[60%] flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#8F1747] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#D23372] transition hover:text-[#8F1747]"
                  >
                    Más información →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments