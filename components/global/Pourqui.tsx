import React from 'react'
import { Link } from 'react-router-dom';

const PretWho: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto  py-12">
      <h2 className="text-3xl font-bold mb-4"><mark className="bg-cta-red text-white px-2 py-1 ">Pour qui ?</mark></h2>
      <p className="text-primary-blue/80 leading-relaxed">Le prêt-à-personnaliser s'adresse aux entreprises qui ont besoin d'une solution rapide et maîtrisée :
        habillage d'équipes, événements, boutiques souhaitant proposer une capsule, ou institutions recherchant une solution fiable et responsable.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Carte Entreprises */}
        <Link to="/entreprises" className="relative aspect-square overflow-hidden shadow-md block group">
          <img src="../media/equipe-moulin-dascq.jpg" alt="Entreprises" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition">
            <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg group-hover:underline">Entreprises</span>
          </div>
        </Link>
        {/* Carte Boutiques */}
        <Link to="/boutiques" className="relative aspect-square overflow-hidden shadow-md block group">
          <img src="../media/boutique-la-gentle-factory.png" alt="Boutiques" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition">
            <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg group-hover:underline">Boutiques</span>
          </div>
        </Link>
        {/* Carte Institutions & clubs */}
        <Link to="/institutions" className="relative aspect-square overflow-hidden shadow-md block group">
          <img src="../media/association-ffe-marque-blanche-lgf.png" alt="Institutions & clubs" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition">
            <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg group-hover:underline">Institutions & clubs</span>
          </div>
        </Link>
        {/* Carte Marques & créateurs */}
        <Link to="/marques-createurs" className="relative aspect-square overflow-hidden shadow-md block group">
          <img src="../media/equipe-lgf-escalier.png" alt="Marques & créateurs" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition">
            <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg group-hover:underline">Marques & créateurs</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default PretWho
