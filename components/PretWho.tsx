import React from 'react'

const PretWho: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Pour qui ?</h2>
      <p className="text-primary-blue/80 leading-relaxed">Le prêt-à-personnaliser s'adresse aux entreprises qui ont besoin d'une solution rapide et maîtrisée :
        habillage d'équipes, événements, boutiques souhaitant proposer une capsule, ou institutions recherchant une solution fiable et responsable.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Entreprises</h3>
          <p className="text-sm text-primary-blue/80">Séries courtes pour équipes, onboarding, salons ou cadeaux collaborateurs.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Boutiques</h3>
          <p className="text-sm text-primary-blue/80">Capsules exclusives basées sur des modèles éprouvés, déployables rapidement.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Institutions & clubs</h3>
          <p className="text-sm text-primary-blue/80">Pièces durables et faciles à déployer pour un usage fréquent et intensif.</p>
        </div>
      </div>
    </section>
  )
}

export default PretWho
