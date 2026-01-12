import React from 'react'

const EnterpriseProcess: React.FC = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Votre projet en 4 étapes simples</h2>

      <ol className="space-y-6 text-primary-blue/80">
        <li>
          <h3 className="font-semibold">1. Vous nous parlez de votre idée</h3>
          <p className="mt-2 text-sm">Racontez-nous vos objectifs, quantités, usages et délais. Nous analysons rapidement la meilleure voie à suivre.</p>
        </li>

        <li>
          <h3 className="font-semibold">2. On vous propose la meilleure solution</h3>
          <p className="mt-2 text-sm">Prêt-à-personnaliser, semi-sur-mesure ou co-création : nous détaillons les coûts, les étapes et les délais pour que vous puissiez décider en toute sérénité.</p>
        </li>

        <li>
          <h3 className="font-semibold">3. Prototype & ajustements</h3>
          <p className="mt-2 text-sm">Nous réalisons un prototype, testons la coupe et les matières, puis ajustons selon vos retours. La validation se fait uniquement lorsque vous êtes satisfait.</p>
        </li>

        <li>
          <h3 className="font-semibold">4. Fabrication française & livraison</h3>
          <p className="mt-2 text-sm">Fabrication dans nos ateliers partenaires (Vosges, Chessy-les-Mines, Roubaix), contrôles qualité et logistique organisée pour une livraison fluide.</p>
        </li>
      </ol>
    </section>
  )
}

export default EnterpriseProcess
