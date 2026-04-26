import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contáctanos para resolver dudas o solicitar información.
          </p>
        </div>

        <div className="space-y-5">
          
          {/* Dirección */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <div className="pt-1 text-xl text-[#D23372]">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#8F1747]">Dirección</h3>
              <p className="mt-2 text-lg leading-8 text-neutral-600">
                Calle de Ciudad Real, 6, 28980 Parla, Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <div className="pt-1 text-xl text-[#D23372]">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#8F1747]">Teléfono</h3>
              <a
                href="tel:627408088"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-[#D23372]"
              >
                627 408 088
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <div className="pt-1 text-xl text-[#D23372]">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#8F1747]">Email</h3>
              <a
                href="mailto:info@edukatekparla.es"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-[#D23372]"
              >
                info@edukatekparla.es
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex gap-5 rounded-xl bg-[#f7d8e6] px-6 py-6 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <div className="pt-1 text-xl text-[#D23372]">
              <FaClock />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold text-[#8F1747]">Horario</h3>

              <div className="mt-4 space-y-3 text-lg text-neutral-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Lunes</span>
                  <span>10:00–20:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Martes</span>
                  <span>9:00–20:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Miércoles</span>
                  <span>10:00–20:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Jueves</span>
                  <span>9:00–20:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Viernes</span>
                  <span>11:00–19:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Sábado</span>
                  <span>Cerrado</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection