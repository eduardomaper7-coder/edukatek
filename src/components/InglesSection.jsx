const InglesSection = () => {
  return (
    <section id="ingles" className="bg-[#FFF7FB] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Clases de inglés
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Inglés para niños, jóvenes y adultos en Parla
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Aprendizaje práctico y personalizado para mejorar la comprensión,
            la conversación, el vocabulario y la seguridad al comunicarse en inglés.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🧒
            </div>
            <h3 className="text-2xl font-bold text-[#8F1747]">
              Inglés para niños
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              Clases dinámicas para aprender vocabulario, pronunciación y
              comprensión desde edades tempranas.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-[#8F1747]">
              Refuerzo escolar
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              Apoyo para Primaria, ESO y Bachillerato: deberes, exámenes,
              gramática, writing, listening y speaking.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D23372]/10 text-2xl">
              🗣️
            </div>
            <h3 className="text-2xl font-bold text-[#8F1747]">
              Conversación
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              Práctica oral para ganar fluidez, soltura y confianza en
              situaciones reales del día a día.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-[#8F1747] p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-extrabold">
            Aprende inglés con grupos reducidos y atención personalizada
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-white/90">
            Adaptamos las clases al nivel, edad y objetivos de cada alumno para
            que avance de forma constante y con seguridad.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/34627408088?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20las%20clases%20de%20ingl%C3%A9s."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-600"
            >
              Pedir información
            </a>

            <a
              href="tel:34627408088"
              className="rounded-xl border border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#8F1747]"
            >
              Llamar 627 40 80 88
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InglesSection