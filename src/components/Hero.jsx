import heroImg from '../assets/hero-logopedia.jpg'

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre vuestros servicios de logopedia, psicología y atención temprana.'
  )

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Filtro rosa más suave */}
      <div className="absolute inset-0 bg-[#D23372]/40"></div>

      {/* Degradado más ligero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D23372]/30 via-[#D23372]/40 to-[#8F1747]/60"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Centro de Logopedia, Psicología y Atención Temprana en{' '}
          <span className="text-white">Parla</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/95 sm:text-xl">
          Acompañamos a niños, adolescentes y familias con terapias personalizadas,
          cercanas y profesionales para favorecer el desarrollo, la comunicación y
          el bienestar emocional.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/34627408088?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#D23372] transition hover:bg-white/90"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-6 w-6 object-contain"
            />
            Pedir información
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold !text-white transition hover:bg-white hover:!text-[#D23372]"
          >
            Nuestros servicios
          </a>
        </div>

        <a
          href="#servicios"
          className="mt-20 inline-flex flex-col items-center text-base font-medium !text-white transition hover:!text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl !text-white">⌄</span>
        </a>
      </div>
    </section>
  )
}

export default Hero