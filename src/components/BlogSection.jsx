const posts = [
  {
    date: '1 abril, 2026',
    title: 'Logopedia infantil en Parla: cuándo acudir a un especialista',
    excerpt:
      'Te explicamos qué señales pueden indicar dificultades en el lenguaje, el habla o la comunicación y cómo una intervención temprana puede ayudar al desarrollo del niño.',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '1 abril, 2026',
    title: 'Psicología infantil y adolescente: cómo acompañar las emociones',
    excerpt:
      'La infancia y la adolescencia pueden traer cambios emocionales importantes. Descubre cuándo pedir ayuda y cómo el apoyo psicológico puede mejorar el bienestar familiar.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '25 marzo, 2026',
    title: 'Atención temprana: qué es y por qué es tan importante',
    excerpt:
      'La atención temprana favorece el desarrollo global en los primeros años de vida. Conoce sus beneficios y cómo puede apoyar a niños y familias.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-[#fff7fb] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#8F1747] sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Consejos y recursos sobre logopedia, psicología, atención temprana y desarrollo infantil
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(210,51,114,0.12)] transition hover:shadow-[0_15px_40px_rgba(210,51,114,0.18)]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#8F1747]">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <a
                    href={post.href}
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#D23372] transition hover:text-[#8F1747]"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection