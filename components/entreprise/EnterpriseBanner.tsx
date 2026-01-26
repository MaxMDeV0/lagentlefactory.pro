import React from 'react'

const EnterpriseBanner: React.FC = () => {
  return (
    <section className="bg-primary-blue text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-2/3 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Textile entreprise premium</h1>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">Habiller vos équipes, valoriser votre image et fournir des vêtements responsables fabriqués en France — des pièces pensées pour durer et portées avec fierté.</p>

          <div className="mt-6 flex items-center gap-4">
            <a href="/contact-devis" className="inline-block bg-cta-red hover:bg-[#7a0d15] text-white px-6 py-3 rounded-full font-bold shadow">Demander un devis</a>
            <a href="/solutions" className="inline-block text-white/90 underline">Découvrir nos solutions</a>
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex justify-center">
          <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img src="./media/banner.png" alt="Illustration textile entreprise" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseBanner
