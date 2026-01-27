export default function ColorHero({ title, description, bgColor }: { title?: string, description?: string, bgColor?: string }) {
  return (
    <section className={`mb-8 p-8 ${bgColor}`}>
      <h2 className="text-2xl text-white font-bold mb-3">{title}</h2>
      <p className="text-lg text-white leading-relaxed ">
        {description}
      </p>
    </section>

  )
}
