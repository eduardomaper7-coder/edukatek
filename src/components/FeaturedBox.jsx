const FeaturedBox = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de logopedia, psicología y atención temprana.'
  )

  return (
    <section className="bg-[#fff7fb] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative min-h-[auto] overflow-hidden rounded-[28px] bg-[#f7d8e6] lg:min-h-[520px]">
          
          {/* Imagen desde internet */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
              alt="Terapia infantil logopedia"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(210,51,114,0.16)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-[#8F1747] sm:text-4xl">
                Acompañamos el desarrollo con una atención{' '}
                <span className="text-[#D23372]">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En nuestro centro trabajamos de forma cercana con niños, adolescentes,
                adultos y familias para mejorar la comunicación, el aprendizaje, la
                conducta y el bienestar emocional.
              </p>

              <div className="mt-6">
                <a
                  href={`https://wa.me/34627408088?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl bg-[#D23372] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8F1747] sm:px-7 sm:py-4 sm:text-base"
                >
                  Pedir información
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox