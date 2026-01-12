import React from 'react'

const PretWhy: React.FC = () => {
  return (
    <section className="bg-primary-blue text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Pourquoi choisir cette solution ?</h2>
        <p className="text-white/90 leading-relaxed">Le prêt-à-personnaliser est idéal si vous souhaitez lancer une offre en gardant la maîtrise technique et le contrôle qualité. Vous bénéficiez d'un produit fiable testé en production, d'un coût plus bas qu'une création complète, et d'une mise en marché accélérée.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/10 rounded-lg">Production française</div>
          <div className="p-4 bg-white/10 rounded-lg">Budget maîtrisé</div>
          <div className="p-4 bg-white/10 rounded-lg">Délais courts</div>
        </div>
      </div>
    </section>
  )
}

export default PretWhy
