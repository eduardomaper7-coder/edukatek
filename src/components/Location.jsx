const Location = () => {
  return (
    <section className="bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
          Ven a visitarnos
        </h2>

        <p className="mt-6 text-lg font-medium text-neutral-700">
          Calle de Ciudad Real, 6, 28980 Parla, Madrid
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(210,51,114,0.15)]">
          <iframe
            src="https://www.google.com/maps?q=Calle%20de%20Ciudad%20Real%206%2C%2028980%20Parla%2C%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación centro logopedia Parla"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location