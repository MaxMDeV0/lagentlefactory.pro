import React from 'react'
import Hero from '../components/global/ImageHero'
import ColorHero from '@/components/global/ColorHero'
import Pourqui from '../components/global/Pourqui'
import PretCustomizations from '../components/pretapersonnaliser/PretCustomizations'
import PretAdvantages from '../components/pretapersonnaliser/PretAdvantages'
import PretWhy from '../components/pretapersonnaliser/PretWhy'
import PretGraphicStrip from '../components/pretapersonnaliser/PretGraphicStrip'
import PretIconGrid from '../components/pretapersonnaliser/PretIconGrid'
import PretMosaic from '../components/pretapersonnaliser/PretMosaic'
import { Link } from 'react-router-dom'
import Breadcrumb from '@/components/global/Breadcrumb'
import ContactSection from '@/components/global/ContactSection'

const PretAPersonnaliser: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-primary-blue pt-28">

      <Hero
        imageUrl={(import.meta.env.BASE_URL || '') + 'media/Confection_AFS_EPAGNY_2.jpg'}
        title="Solution prêt-à-personnaliser"
        description="Une façon rapide, fiable et responsable de proposer des vêtements à votre image : choisissez un modèle éprouvé, personnalisez l'identité visuelle et produisez en France."
      />
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Breadcrumb />
        <ColorHero
          bgColor="bg-cta-red"
          title="Une collection déjà maîtrisée. Votre identité en plus."
          description={<>
            <p className="mb-4">Le prêt-à-personnaliser est la solution idéale si vous souhaitez aller vite, tout en conservant ce
              qui fait la force d’un vêtement bien conçu : une coupe aboutie, une fabrication française
              irréprochable et des matières responsables.</p>
            <p>
              Vous choisissez l’un de nos modèles.
              Nous y intégrons votre identité visuelle.
              Le résultat : une pièce élégante, durable, parfaitement alignée avec votre image.
            </p>
          </>}
        />

        <Pourqui />
        <PretGraphicStrip />

        <PretIconGrid />

        <PretCustomizations />


        <PretAdvantages />

        <PretWhy />

        <ContactSection />
      </div>
    </main>
  )
}

export default PretAPersonnaliser
