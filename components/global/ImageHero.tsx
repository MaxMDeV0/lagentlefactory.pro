export default function ImageHero({ imageUrl, title, description }: { imageUrl?: string, title?: string, description?: string }) {
  return (
    <section
      className="relative bg-cover bg-center min-h-[320px] flex items-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
      aria-label="Bannière institutions"
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
          {description}
        </p>
        <div className="mt-6">
          <a href="#contact" className="inline-block bg-white text-primary-blue px-6 py-3 rounded-full font-bold">Demander un devis</a>
        </div>
      </div>
    </section>

  )
}