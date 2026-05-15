const AcreditacionesSection = () => {
  return (
    <section className="bg-[#FFF7FB] px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* CABECERA */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Centro autorizado
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#8F1747] sm:text-5xl">
            Centro sociosanitario autorizado en Calle Ciudad Real
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            EDUKATEK cuenta con autorización sanitaria, registro como centro de
            atención temprana y aceptación del cheque servicio, ofreciendo a las
            familias una atención profesional, cercana y especializada.
          </p>
        </div>

        {/* DOS TARJETAS SUPERIORES */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* AUTORIZACIÓN SANITARIA */}
          <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/autorizacion-sanitaria.jpg"
              alt="Autorización sanitaria Edukatek"
              className="h-80 w-full object-cover object-top"
            />

            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                Autorización sanitaria
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Centro autorizado por la Comunidad de Madrid para servicios
                sanitarios como fisioterapia, logopedia, terapia ocupacional y
                psicología sanitaria.
              </p>
            </div>
          </article>

          {/* ATENCIÓN TEMPRANA */}
          <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/registro-atencion-temprana.jpg"
              alt="Registro centro de atención temprana Edukatek"
              className="h-80 w-full object-cover object-top"
            />

            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-[#8F1747]">
                Atención temprana
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Centro registrado para atención a infancia y adolescencia,
                especializado en intervención, rehabilitación y acompañamiento
                integral a familias.
              </p>
            </div>
          </article>
        </div>

        {/* CHEQUE SERVICIO */}
<div className="mt-12">
  <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
    <div className="grid items-center lg:grid-cols-2">
      <img
        src="/cheque-servicio.jpeg"
        alt="Cheque servicio aceptado en Edukatek"
        className="h-full w-full object-cover"
      />

      <div className="p-8 md:p-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
          Ayudas y recursos
        </p>

        <h3 className="mt-3 text-3xl font-extrabold text-[#8F1747]">
          Cheque servicio
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          EDUKATEK es un centro aceptado para cheque servicio, facilitando el
          acceso a tratamientos especializados y recursos de apoyo para familias
          con necesidades de atención temprana, discapacidad y dependencia.
        </p>

        <p className="mt-4 leading-7 text-gray-700">
          Te orientamos y acompañamos durante todo el proceso para que puedas
          acceder a las ayudas disponibles de forma sencilla y personalizada.
        </p>
      </div>
    </div>
  </article>
</div>

      </div>
    </section>
  )
}

export default AcreditacionesSection