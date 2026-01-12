import React from 'react'
import PretHero from '../components/PretHero'
import PretWho from '../components/PretWho'
import PretCustomizations from '../components/PretCustomizations'
import PretAdvantages from '../components/PretAdvantages'
import PretWhy from '../components/PretWhy'
import PretGraphicStrip from '../components/PretGraphicStrip'
import PretIconGrid from '../components/PretIconGrid'
import PretMosaic from '../components/PretMosaic'
import { Link } from 'react-router-dom'

const PretAPersonnaliser: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-primary-blue pt-28">
      <PretHero />

      <PretGraphicStrip />

      <PretWho />

      <PretIconGrid />

      <PretCustomizations />

      <PretMosaic />

      <PretAdvantages />

      <PretWhy />

      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Prêt à démarrer ?</h2>
        <p className="text-primary-blue/80">Parlez-nous de votre projet : quantités estimées, délai souhaité et usage prévu. Nous vous proposons la meilleure option sous 48h.</p>

        <div className="mt-6">
          <Link to="/contact-devis" className="inline-block bg-cta-red text-white px-6 py-3 rounded-full font-bold">Demander un devis</Link>
        </div>
      </section>
    </main>
  )
}

export default PretAPersonnaliser
