const reviews = [
  {
    text: 'Desde el primer día nos sentimos muy acompañados. Han ayudado muchísimo a nuestro hijo con el lenguaje y la comunicación. El trato es cercano, profesional y muy humano. Sin duda, un centro totalmente recomendable.',
    name: 'María G.',
    time: 'Hace 1 año',
  },
  {
    text: 'Acudí por recomendación y ha sido un acierto. Me han ayudado a gestionar la ansiedad y mejorar mi bienestar emocional. Grandes profesionales, muy cercanos y atentos en todo momento.',
    name: 'Carlos R.',
    time: 'Hace 1 mes',
  },
  {
    text: 'Un equipo increíble. Nos orientan en todo momento como familia y vemos avances reales en nuestro hijo. Se nota que trabajan con vocación y mucha dedicación.',
    name: 'Laura P.',
    time: 'Hace 3 meses',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Lo que dicen nuestras familias
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#D23372]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración excelente basada en la confianza de nuestros pacientes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_10px_30px_rgba(210,51,114,0.12)] sm:min-h-[360px] sm:p-7 transition hover:shadow-[0_15px_40px_rgba(210,51,114,0.18)]"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-[#D23372] sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-[#8F1747] sm:text-xl">
                  {review.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{review.time}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials