import React from 'react'

const PretHero: React.FC = () => {
  return (
    <header className="bg-primary-blue text-white flex items-center" style={{ minHeight: '30vh' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">Solution prêt-à-personnaliser</h1>
        <p className="mt-4 text-lg text-white/90 leading-relaxed">Une façon rapide, fiable et responsable de proposer des vêtements à votre image : choisissez un modèle éprouvé, personnalisez l'identité visuelle et produisez en France.</p>
        <div className="mt-6">
          <a href="/contact-devis" className="inline-block bg-cta-red text-white px-6 py-3 rounded-full font-bold">Demander un devis</a>
        </div>
      </div>
    </header>
  )
}

export default PretHero
