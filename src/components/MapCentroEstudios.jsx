const MapCentroEstudios = () => {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">

        {/* TITULO */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D23372]">
            Ubicación
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#8F1747] sm:text-5xl">
            Centro de estudios en Parla
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            C. de Cuenca, 36, 28982 Parla, Madrid
          </p>
        </div>

        {/* MAPA */}
        <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Calle+de+Cuenca,+36,+28982+Parla,+Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* BOTÓN */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Calle+de+Cuenca,+36,+28982+Parla,+Madrid"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-[#D23372] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#8F1747]"
          >
            Cómo llegar
          </a>
        </div>

      </div>
    </section>
  )
}

export default MapCentroEstudios