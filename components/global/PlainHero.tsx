export default function PlainHero({ imgUrl, title }: { imgUrl?: string, title?: string }) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex  justify-center items-center">
      {/* Background Image - Assumes 'media' folder contains banner.png */}
      <img
        src={imgUrl}
        alt="Bannière La Gentil Factory"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      <div className="z-20 text-white p-8 md:p-12 max-w-4xl text-center underline">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl  tracking-tight drop-shadow-lg">
          <mark className="bg-cta-red text-white leading-normal">{title}</mark>
        </h1>
      </div>
    </section>

  )
}