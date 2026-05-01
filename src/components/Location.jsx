const centers = [
  {
    name: 'Centro Sociosanitario',
    address: 'Calle de Ciudad Real, 6, 28980 Parla, Madrid',
    map: 'https://www.google.com/maps?q=Calle+de+Cdad.+Real,+6,+28980+Parla,+Madrid&output=embed',
    link: 'https://www.google.com/maps/dir/?api=1&destination=Calle+de+Cdad.+Real,+6,+28980+Parla,+Madrid',
  },
  {
    name: 'Centro de Estudios',
    address: 'C. de Cuenca, 36, 28982 Parla, Madrid',
    map: 'https://www.google.com/maps?q=Calle+de+Cuenca,+36,+28982+Parla,+Madrid&output=embed',
    link: 'https://www.google.com/maps/dir/?api=1&destination=Calle+de+Cuenca,+36,+28982+Parla,+Madrid',
  },
]

const Location = () => {
  return (
    <section className="bg-[#fff7fb] px-4 py-24">
      <div className="mx-auto max-w-7xl text-center">
        
        <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
          Ven a visitarnos
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Contamos con dos centros en Parla, adaptados a diferentes necesidades
          educativas y sociosanitarias.
        </p>

        {/* CENTROS */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {centers.map((center) => (
            <div
              key={center.name}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              {/* INFO */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-extrabold text-[#8F1747]">
                  {center.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  {center.address}
                </p>
              </div>

              {/* MAPA */}
              <iframe
                src={center.map}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                title={center.name}
              ></iframe>

              {/* BOTÓN */}
              <div className="p-6">
                <a
                  href={center.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full rounded-xl bg-[#D23372] px-6 py-3 text-center font-bold text-white transition hover:bg-[#8F1747]"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Location