import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sesión de terapia infantil',
    badge: 'Atención cercana para niños y familias',
  },
  {
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    alt: 'Niños trabajando en una actividad educativa',
    badge: 'Desarrollo, comunicación y bienestar',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#fff7fb] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#D23372] lg:block [writing-mode:vertical-rl]">
            EDUKATEK
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#D23372] px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#8F1747] sm:text-5xl">
              ¿Por qué elegir nuestro centro?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              Acompañamos a cada persona y familia con una intervención cercana,
              profesional y adaptada a sus necesidades reales, cuidando tanto el
              desarrollo como el bienestar emocional.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold text-[#D23372]">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Diseñamos cada intervención según la edad, necesidades y objetivos de cada persona.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#D23372]">
                  Equipo especializado
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Contamos con profesionales en logopedia, psicología y atención temprana.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#D23372]">
                  Trabajo con familias
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Orientamos y acompañamos a las familias durante todo el proceso terapéutico.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#D23372]">
                  Trato cercano y humano
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Creamos un espacio seguro, amable y de confianza para niños, adolescentes y adultos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(210,51,114,0.18)]">
            <div className="relative h-[540px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#D23372]/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-[#8F1747]">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#D23372]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#D23372]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs