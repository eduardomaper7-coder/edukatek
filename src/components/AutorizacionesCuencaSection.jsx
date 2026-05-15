const AutorizacionesCuencaSection = () => {
  return (
    <section className="bg-[#FFF7FB] px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Centro autorizado
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
            Garantías, autorizaciones y reconocimiento oficial
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            EDUKATEK Calle Cuenca cuenta con autorizaciones oficiales de la
            Comunidad de Madrid para la prestación de servicios sanitarios,
            atención psico-social y rehabilitación especializada para infancia
            y adolescencia.
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* AUTORIZACIÓN SANITARIA */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="/autorizacion-sanitaria-cuenca.jpg"
              alt="Autorización sanitaria"
              className="h-[420px] w-full object-cover object-top"
            />

            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                Autorización sanitaria
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Centro autorizado por la Comunidad de Madrid para servicios
                sanitarios de logopedia, psicología sanitaria y otras unidades
                asistenciales.
              </p>
            </div>
          </div>

          {/* CHEQUE SERVICIO */}
          {/* CHEQUE SERVICIO */}
<div className="overflow-hidden rounded-3xl bg-white shadow-xl">
  <img
    src="/cheque-servicio.jpeg"
    alt="Cheque servicio"
    className="h-[420px] w-full object-contain bg-white p-6"
  />

  <div className="p-8">
    <h3 className="text-2xl font-extrabold text-[#8F1747]">
      Centro adherido al Cheque Servicio
    </h3>

    <p className="mt-4 leading-7 text-gray-700">
      Las familias pueden acceder a tratamientos y atención especializada
      mediante ayudas y prestaciones reconocidas por la Comunidad de Madrid.
    </p>
  </div>
</div>
          {/* PSICO-SOCIAL */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="/autorizacion-psicosocial-cuenca.jpg"
              alt="Servicio psico-social"
              className="h-[420px] w-full object-cover object-top"
            />

            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                Atención psico-social
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Centro inscrito para intervención psico-social especializada,
                acompañamiento familiar y atención integral personalizada.
              </p>
            </div>
          </div>

          {/* REHABILITACIÓN */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="/autorizacion-rehabilitacion-cuenca.jpg"
              alt="Servicio de rehabilitación"
              className="h-[420px] w-full object-cover object-top"
            />

            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                Servicio de rehabilitación
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Registro oficial para servicios especializados de rehabilitación
                médico-funcional dirigidos a infancia y adolescencia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AutorizacionesCuencaSection