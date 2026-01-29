
import React from 'react'
import H2Mark from './H2Mark';

export default function SolutionsCards({ title }: { title: string }) {
  {
    return (
      <section className="max-w-[1200px] mx-auto  mb-12">
        <H2Mark>{title}</H2Mark>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 border rounded-lg bg-white relative" aria-labelledby="pa-title">
            <span className="absolute -top-4 -left-4 bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow">1</span>
            <h3 id="pa-title" className="text-xl font-semibold">Prêt-à-personnaliser</h3>
            <p className="mt-3 text-sm text-primary-blue/80">Notre solution la plus rapide : partez d'un modèle éprouvé, ajoutez votre identité (broderie, sérigraphie, étiquette). Idéal pour les entreprises qui ont besoin de séries courtes et d'un budget maîtrisé.</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-primary-blue/80">
              <li>Délais raccourcis</li>
              <li>Aucun risque de patronage</li>
              <li>Production française en petites séries</li>
            </ul>
          </article>

          <article className="p-6 border rounded-lg bg-white relative" aria-labelledby="semi-title">
            <span className="absolute -top-4 -left-4 bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow">2</span>
            <h3 id="semi-title" className="text-xl font-semibold">Semi-sur-mesure</h3>
            <p className="mt-3 text-sm text-primary-blue/80">Ajustez un modèle Gentle : matières, couleurs, finitions. Un excellent compromis pour des vêtements corporate différenciants sans repartir de zéro.</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-primary-blue/80">
              <li>Matières responsables (bio, recyclées, techniques)</li>
              <li>Finitions soignées et options (zip, boutons, bord-côte)</li>
              <li>Délais raisonnables et contrôle qualité</li>
            </ul>
          </article>

          <article className="p-6 border rounded-lg bg-white relative" aria-labelledby="co-title">
            <span className="absolute -top-4 -left-4 bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow">3</span>
            <h3 id="co-title" className="text-xl font-semibold">Co-création complète</h3>
            <p className="mt-3 text-sm text-primary-blue/80">Vous avez une vision forte ? Nous la concrétisons : du moodboard au prototypage, jusqu'à la fabrication finale en France. Chaque détail est pensé avec vous.</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-primary-blue/80">
              <li>Patronage & prototypes</li>
              <li>Sourcing matières traçables</li>
              <li>Suivi pas-à-pas jusqu'à la livraison</li>
            </ul>
          </article>
        </div>
      </section>
    )
  }
}
