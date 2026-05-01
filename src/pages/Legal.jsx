const Legal = () => {
  return (
    <main className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl space-y-16">
        <section>
          <h1 className="text-3xl font-extrabold text-[#8F1747]">
            Aviso legal
          </h1>

          <p className="mt-6 leading-8 text-gray-700">
            En cumplimiento del deber de información recogido en la legislación vigente,
            se informa que el presente sitio web pertenece a EDUKATEK.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>Denominación:</strong> EDUKATEK</li>
            <li><strong>Domicilio:</strong> Calle Ciudad Real, 6, Parla, Madrid</li>
            <li><strong>Email:</strong> info@edukatekparla.es</li>
            <li><strong>Teléfono:</strong> 627 40 80 88</li>
          </ul>

          <p className="mt-6 leading-8 text-gray-700">
            El acceso y uso de esta web atribuye la condición de usuario e implica
            la aceptación de las condiciones aquí reflejadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-[#8F1747]">
            Política de privacidad
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            En EDUKATEK tratamos la información que nos facilitan las personas
            interesadas con el fin de prestar los servicios solicitados y responder
            a consultas o solicitudes de información.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Los datos no se cederán a terceros salvo obligación legal. El usuario
            puede ejercer sus derechos de acceso, rectificación o supresión
            contactando a través del correo electrónico.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-[#8F1747]">
            Política de cookies
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Este sitio web puede utilizar cookies para mejorar la experiencia de
            usuario. Las cookies son pequeños archivos que se almacenan en el navegador.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Puedes configurar tu navegador para rechazar el uso de cookies,
            aunque esto podría afectar al funcionamiento del sitio web.
          </p>
        </section>

       <section className="rounded-3xl bg-[#FFF7FB] p-8 shadow-lg">
  <h2 className="text-2xl font-extrabold text-[#8F1747]">
    Centro autorizado
  </h2>

  <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
    
    {/* TEXTO */}
    <div>
      <p className="leading-8 text-gray-700">
        <strong>Centro:</strong> Centro de Atención Temprana y Tratamientos EDUKATEK
      </p>

      <p className="mt-2 text-gray-700">
        <strong>Tipología:</strong> Centros de rehabilitación / Atención temprana
      </p>

      <p className="mt-2 text-gray-700">
        <strong>Sector:</strong> Infancia y adolescencia
      </p>

      <p className="mt-2 text-gray-700">
        <strong>Dirección:</strong> Calle Ciudad Real, 6 – Parla, Madrid
      </p>

      <p className="mt-4 text-lg font-semibold text-[#8F1747]">
        Nº de registro: C7624
      </p>
    </div>

    {/* IMAGEN */}
    <div className="relative">
      <img
        src="/centro-autorizado.jpg"
        alt="Centro autorizado Edukatek"
        className="w-full rounded-2xl object-cover shadow-xl border border-[#D23372]/10"
      />

      {/* EFECTO SUTIL */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#D23372]/10"></div>
    </div>

  </div>
</section>
      </div>
    </main>
  )
}

export default Legal