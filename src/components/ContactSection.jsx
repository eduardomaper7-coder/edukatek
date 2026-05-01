import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#fff7fb] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Contacta con EDUKATEK para resolver dudas, pedir información o solicitar cita.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Centro sociosanitario */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <h3 className="text-2xl font-extrabold text-[#8F1747]">
              Centro Sociosanitario
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl text-[#D23372]" />
                <p className="text-lg text-neutral-600">
                  Calle de Ciudad Real, 6, 28980 Parla, Madrid
                </p>
              </div>

              <div className="flex gap-4">
                <FaClock className="mt-1 text-xl text-[#D23372]" />
                <div className="w-full text-neutral-700">
                  <p className="font-bold text-[#8F1747]">Horario</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between gap-4">
                      <span>Lunes</span>
                      <span>10:00–20:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Martes</span>
                      <span>9:00–20:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Miércoles</span>
                      <span>10:00–20:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Jueves</span>
                      <span>9:00–20:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Viernes</span>
                      <span>11:00–19:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sábado</span>
                      <span>Cerrado</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Domingo</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centro de estudios */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(210,51,114,0.12)]">
            <h3 className="text-2xl font-extrabold text-[#8F1747]">
              Centro de Estudios
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl text-[#D23372]" />
                <p className="text-lg text-neutral-600">
                  C. de Cuenca, 36, 28982 Parla, Madrid
                </p>
              </div>

              <div className="flex gap-4">
                <FaClock className="mt-1 text-xl text-[#D23372]" />
                <div className="w-full text-neutral-700">
                  <p className="font-bold text-[#8F1747]">Horario</p>
                  <div className="mt-3 space-y-2">
                    {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(
                      (day) => (
                        <div key={day} className="flex justify-between gap-4">
                          <span>{day}</span>
                          <span className="text-right">9:00–14:00 / 16:00–22:00</span>
                        </div>
                      )
                    )}
                    <div className="flex justify-between gap-4">
                      <span>Sábado</span>
                      <span>Cerrado</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Domingo</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto común */}
          <div className="rounded-3xl bg-[#f7d8e6] p-7 shadow-[0_10px_30px_rgba(210,51,114,0.12)] lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-[#8F1747]">
              Contacto común para ambos centros
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-xl text-[#D23372]" />
                <div>
                  <p className="font-bold text-[#8F1747]">Teléfono / WhatsApp</p>
                  <a
                    href="tel:34627408088"
                    className="mt-1 block text-lg text-neutral-700 transition hover:text-[#D23372]"
                  >
                    627 40 80 88
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-xl text-[#D23372]" />
                <div>
                  <p className="font-bold text-[#8F1747]">Email</p>
                  <a
                    href="mailto:info@edukatekparla.es"
                    className="mt-1 block text-lg text-neutral-700 transition hover:text-[#D23372]"
                  >
                    info@edukatekparla.es
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-neutral-600">
              El horario puede variar en días festivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection