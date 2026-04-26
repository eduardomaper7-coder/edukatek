const plans = [
  {
    title: 'Sesión individual',
    price: 'Consultar',
    subtitle: 'Logopedia, psicología o atención temprana',
    badge: '',
  },
  {
    title: 'Pack mensual',
    price: 'Consultar',
    subtitle: 'Seguimiento terapéutico continuado',
    badge: 'Recomendado',
  },
  {
    title: 'Valoración inicial',
    price: 'Consultar',
    subtitle: 'Evaluación personalizada y orientación familiar',
    badge: 'Primer paso',
  },
]

const conditions = [
  'Las tarifas pueden variar según el servicio y las necesidades de cada persona.',
  'Antes de iniciar la intervención realizamos una valoración inicial para orientar el tratamiento.',
  'La frecuencia de las sesiones se adapta a cada caso y a los objetivos terapéuticos.',
  'La anulación de una sesión deberá notificarse con al menos 24 horas de antelación.',
  'Puedes solicitar información personalizada por WhatsApp o mediante el formulario de contacto.',
]

const Pricing = () => {
  return (
    <section id="tarifas" className="scroll-mt-28 bg-[#fff7fb] py-24 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Nuestras tarifas
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Opciones adaptadas a cada servicio, edad y necesidad terapéutica
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="rounded-xl bg-[#f7d8e6] px-8 py-10 text-center shadow-[0_8px_24px_rgba(210,51,114,0.10)]"
            >
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                {plan.title}
              </h3>

              <p className="mt-5 text-5xl font-extrabold tracking-tight text-[#D23372]">
                {plan.price}
              </p>

              <p className="mt-4 text-xl text-neutral-700">{plan.subtitle}</p>

              {plan.badge && (
                <div className="mt-5">
                  <span className="inline-flex rounded-full bg-[#D23372] px-4 py-1.5 text-sm font-bold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white px-8 py-10 shadow-[0_8px_24px_rgba(210,51,114,0.10)]">
          <h3 className="text-center text-2xl font-extrabold text-[#8F1747]">
            Condiciones Generales
          </h3>

          <div className="mt-8 space-y-5">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-1 text-xl font-bold text-[#D23372]">✓</span>
                <p className="text-lg leading-8 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing