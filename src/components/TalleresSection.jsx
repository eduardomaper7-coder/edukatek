const TalleresSection = () => {
  return (
    <section id="talleres" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Talleres para mayores
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
              Bienestar, memoria y calidad de vida
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Actividades diseñadas para estimular la mente, mejorar la
              comunicación y mantener una vida activa, autónoma y social.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Estimulación de memoria, atención y lenguaje',
                'Actividades para mejorar percepción y concentración',
                'Ejercicios para mantener habilidades cognitivas',
                'Dinámicas para fomentar relaciones sociales',
                'Mejora de capacidades motoras y autonomía',
                'Grupos reducidos y atención especializada',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#FFF7FB] p-5 shadow-sm"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-[#D23372]"></div>
                  <p className="text-sm font-semibold leading-6 text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/34627408088?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20talleres%20para%20mayores."
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-600"
              >
                Pedir información
              </a>

              <a
                href="tel:34627408088"
                className="rounded-xl border border-[#D23372] px-8 py-4 text-center text-lg font-bold text-[#D23372] transition hover:bg-[#D23372] hover:text-white"
              >
                Llamar 627 40 80 88
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/talleres.jpeg"
              alt="Talleres para mayores en Edukatek"
              className="h-[620px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur">
              <h3 className="text-xl font-extrabold text-[#8F1747]">
                Atención profesional y cercana
              </h3>

              <p className="mt-3 text-gray-700">
                Talleres dirigidos por profesionales especializados en logopedia
                y psicología, adaptados a las necesidades de cada participante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalleresSection