import React from 'react'

const PretCustomizations: React.FC = () => {
  return (
    <section className="bg-[#f8fafb] py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Personnalisations possibles</h2>
        <p className="text-primary-blue/80 leading-relaxed">Le prêt-à-personnaliser permet d'ajouter votre identité sans modifier la coupe : broderie, sérigraphie, étiquette sur-mesure, choix de coloris selon disponibilité, et packaging spécifique.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Impression & marquage</h3>
            <p className="text-sm text-primary-blue/80">Sérigraphie ton-sur-ton, marquage intérieur ou extérieur, transfert ou marquage thermique selon l'usage.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Broderie & étiquettes</h3>
            <p className="text-sm text-primary-blue/80">Broderie discrète ou visible, étiquette tissée à votre nom, insert de marque et packaging personnalisé.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PretCustomizations
