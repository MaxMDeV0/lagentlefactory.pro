import React from 'react'

const PretAdvantages: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Avantages</h2>
      <ul className="list-disc pl-5 text-primary-blue/80 space-y-3">
        <li><strong>Rapidité :</strong> délais raccourcis grâce à des modèles éprouvés et une production organisée.</li>
        <li><strong>Maîtrise des coûts :</strong> pas de développement de patronage, optimisation des matières.</li>
        <li><strong>Qualité garantie :</strong> fabrication française et contrôles réguliers en atelier.</li>
        <li><strong>Traçabilité :</strong> choix de matières responsables et suivi de production.</li>
      </ul>
    </section>
  )
}

export default PretAdvantages
