const ApoyoEscolarSection = () => {
  return (
    <section
      id="apoyo-escolar"
      className="bg-white px-4 py-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        
        {/* TITULO */}
        <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
          Apoyo escolar en Parla
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Acompañamos a cada alumno para que mejore su rendimiento, confianza y hábitos de estudio
          con un método personalizado y grupos reducidos.
        </p>

        {/* IMAGEN */}
        <div className="mt-10">
          <img
            src="/apoyo-escolar.jpeg"
            alt="Apoyo escolar en Edukatek"
            className="h-[350px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* BLOQUES */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          
          {/* INFANTIL Y PRIMARIA */}
          <div className="rounded-3xl bg-gray-50 p-8 text-left shadow-lg">
            <h3 className="text-2xl font-bold text-[#D23372]">
              Infantil y Primaria
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Mejora de la confianza y motivación</li>
              <li>✔ Refuerzo de lectura y escritura</li>
              <li>✔ Trabajo diario de contenidos</li>
              <li>✔ Técnicas de estudio y organización</li>
              <li>✔ Seguimiento personalizado</li>
            </ul>

            <p className="mt-6 font-semibold text-[#8F1747]">
              Con nuestro método, los resultados llegan.
            </p>
          </div>

          {/* ESO Y BACHILLERATO */}
          <div className="rounded-3xl bg-gray-50 p-8 text-left shadow-lg">
            <h3 className="text-2xl font-bold text-[#D23372]">
              ESO y Bachillerato
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Resolución de dudas y ejercicios prácticos</li>
              <li>✔ Explicación individualizada</li>
              <li>✔ Técnicas de estudio eficaces</li>
              <li>✔ Preparación de exámenes</li>
              <li>✔ Redacción, presentación y desarrollo</li>
            </ul>

            <p className="mt-6 font-semibold text-[#8F1747]">
              Tu hijo puede aprobar, mejorar y aprender.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          
          <a
            href="https://wa.me/34627408088"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-600"
          >
            Pedir información
          </a>

          <a
            href="tel:34627408088"
            className="rounded-xl border border-[#D23372] px-8 py-4 text-lg font-bold text-[#D23372] transition hover:bg-[#D23372] hover:text-white"
          >
            Llamar 627 40 80 88
          </a>
        </div>
      </div>
    </section>
  )
}

export default ApoyoEscolarSection