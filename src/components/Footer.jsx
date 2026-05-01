import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#8F1747] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        
        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* IZQUIERDA */}
          <div>
            <h3 className="text-2xl font-extrabold">Edukatek</h3>

            <p className="mt-4 text-white/90 leading-7">
              Dos centros especializados en Parla: atención sociosanitaria y apoyo educativo.
              Acompañamos a niños, adolescentes y familias en su desarrollo,
              aprendizaje y bienestar.
            </p>

            <div className="mt-6">
              <a
                href="https://www.facebook.com/edukatekcentrosociosanitario"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white/80 transition hover:text-white"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div className="text-left md:text-right">
            <h3 className="text-xl font-bold">Contacto</h3>

            <div className="mt-4 space-y-3 text-white/90">
              <p>📍 C/ Ciudad Real, 6 – Parla</p>
              <p>📍 C/ Cuenca, 36 – Parla</p>

              <a href="tel:34627408088" className="block hover:text-white">
                📞 627 40 80 88
              </a>

              <a
                href="mailto:info@edukatekparla.es"
                className="block hover:text-white"
              >
                ✉️ info@edukatekparla.es
              </a>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-14 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2026 Edukatek Parla. Todos los derechos reservados.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <Link to="/legal" className="hover:text-white">
              Política de cookies
            </Link>

            <Link to="/legal" className="hover:text-white">
              Política de privacidad
            </Link>

            <Link to="/legal" className="hover:text-white">
              Aviso legal
            </Link>

            <Link to="/legal" className="hover:text-white">
              Centro autorizado
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer