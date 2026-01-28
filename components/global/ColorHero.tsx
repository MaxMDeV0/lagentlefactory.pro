export default function ColorHero({ title, description, bgColor }: { title?: string, description?: string, bgColor?: string }) {
  return (
    <section className={`mb-8 p-8 ${bgColor}`}>
      <h2 className="font-extrabold text-2xl md:text-3xl mb-4 text-white">{title}</h2>
      <p className="text-md text-white leading-relaxed ">
        {description}
      </p>
    </section>

  )
}
