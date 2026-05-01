const TerapiaOcupacionalSection = () => {
  const phone = '34627408088'

  const terapiaItems = [
    'Autocuidado: vestido, higiene y alimentación',
    'Habilidades educativas, lúdicas y de juego',
    'Autonomía en el día a día',
    'Adaptación del entorno y productos de apoyo',
  ]

  const sensorialItems = [
    'Hipersensibilidad al tacto, movimiento, luces o sonidos',
    'Nivel de actividad muy alto o muy bajo',
    'Problemas de coordinación',
    'Retraso en habla, lenguaje o habilidades motoras',
    'Dificultades académicas o de inserción escolar',
    'Pobre organización del comportamiento o autoestima',
  ]

  return (
    <section id="terapia-ocupacional" className="bg-[#FFF7FB] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Terapia Ocupacional e Integración Sensorial
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
            Autonomía, desarrollo y bienestar en el día a día
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Ayudamos a niños y familias a desarrollar habilidades funcionales,
            mejorar la autonomía y responder mejor a las demandas del entorno.
          </p>
        </div>

        {/* TERAPIA OCUPACIONAL */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
              Terapia Ocupacional
            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
              Ayúdales a ser autónomos en su día a día
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Desde terapia ocupacional utilizamos la actividad de forma
              terapéutica para prevenir dificultades, mantener la salud y
              rehabilitar la funcionalidad cuando existe una problemática física,
              cognitiva o sensorial.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              En los más pequeños, el juego es la principal herramienta de
              aprendizaje. A través de él trabajamos las habilidades que necesitan
              potenciar para ganar seguridad, autonomía y participación.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {terapiaItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-md">
                  <div className="mb-4 h-1 w-10 rounded-full bg-[#D23372]"></div>
                  <p className="font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMÁGENES */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/terapia-ocupacional-1.jpeg"
              alt="Terapia ocupacional en Edukatek"
              className="w-full rounded-3xl object-cover shadow-xl"
            />

            <img
              src="/terapia-ocupacional-2.jpeg"
              alt="Actividad terapéutica infantil"
              className="w-full rounded-3xl object-cover shadow-xl sm:mt-10"
            />

            <img
              src="/integracion-sensorial-1.jpeg"
              alt="Integración sensorial infantil"
              className="w-full rounded-3xl object-cover shadow-xl sm:col-span-2"
            />
          </div>
        </div>

        {/* INTEGRACIÓN SENSORIAL (ARREGLADA) */}
        <div
          id="integracion-sensorial"
          className="mt-24 rounded-3xl bg-white p-8 shadow-xl md:p-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* TEXTO + CARDS */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
                Integración Sensorial
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
                Mejor respuesta al entorno
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                La integración sensorial es el proceso neurológico que organiza
                las sensaciones del propio cuerpo y del exterior, permitiendo
                generar una respuesta adaptada a las demandas del entorno.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Este enfoque puede ser útil en casos de hiperactividad,
                dificultades de inserción escolar, comunicación, alimentación o
                población con TEA.
              </p>

              {/* CARDS (AQUÍ SE QUITA EL HUECO) */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {sensorialItems.map((item) => (
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

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${phone}?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20integraci%C3%B3n%20sensorial.`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-600"
                >
                  Pedir información
                </a>

                <a
                  href={`tel:${phone}`}
                  className="rounded-xl border border-[#D23372] px-8 py-4 text-center text-lg font-bold text-[#D23372] transition hover:bg-[#D23372] hover:text-white"
                >
                  Llamar 627 40 80 88
                </a>
              </div>
            </div>

            {/* IMAGEN GRANDE */}
            <div>
              <img
                src="/integracion-sensorial-2.jpeg"
                alt="Sesión de integración sensorial"
                className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TerapiaOcupacionalSection