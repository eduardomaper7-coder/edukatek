import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#8F1747] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* IZQUIERDA */}
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-white/90">
              Centro de logopedia, psicología y atención temprana en Parla.
              Acompañamos a niños, adolescentes y familias en su desarrollo,
              comunicación y bienestar emocional.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook" className="text-2xl text-white/80 transition hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl text-white/80 transition hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl text-white/80 transition hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-white">Contacto</h3>

            <div className="mt-6 space-y-4 text-xl leading-relaxed text-white/90">
              <p>Calle de Ciudad Real, 6, 28980 Parla, Madrid</p>

              <p>
                <a href="tel:627408088" className="transition hover:text-white">
                  627 408 088
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@edukatekparla.es"
                  className="transition hover:text-white"
                >
                  info@edukatekparla.es
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-lg text-white/90">
            © 2026 Edukatek Parla. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base text-white/80">
            <a href="#" className="transition hover:text-white">
              Política de cookies
            </a>
            <a href="#" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer