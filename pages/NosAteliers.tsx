import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- ICONS ---
const icons = {
  bobine: (
    <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="5" y="7" width="14" height="10" rx="5" strokeWidth={2} /><path strokeWidth={2} d="M5 12h14" /></svg>
  ),
  palette: (
    <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><circle cx="8" cy="10" r="1" /><circle cx="16" cy="10" r="1" /><circle cx="12" cy="16" r="1" /></svg>
  ),
  machine: (
    <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="7" width="16" height="10" rx="2" strokeWidth={2} /><path strokeWidth={2} d="M8 7V5a4 4 0 018 0v2" /></svg>
  ),
  serieux: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
  ),
  precision: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth={2} /><path strokeWidth={2} d="M7 7v2m4-2v2m4-2v2m-8 6v2m4-2v2m4-2v2" /></svg>
  ),
  respect: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 3l9 6-9 6-9-6z" /><path strokeWidth={2} d="M3 10v7a2 2 0 002 2h14a2 2 0 002-2v-7" /></svg>
  ),
  responsabilite: (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 8v4l3 3" /></svg>
  ),
};

// --- DATA ---
const regions = [
  { name: "Vosges", pos: { top: "38%", left: "70%" }, specialite: "Tricotage & ennoblissement" },
  { name: "Chessy-les-Mines", pos: { top: "60%", left: "52%" }, specialite: "Teinture & transformation matière" },
  { name: "Roubaix", pos: { top: "18%", left: "60%" }, specialite: "Conception & confection" },
];

const atelierImages = [
  { src: "/public/media/atelier-tricotage.jpg", legend: "Métiers à tricoter dans les Vosges" },
  { src: "/public/media/atelier-teinture.jpg", legend: "Cuves de teinture à Chessy-les-Mines" },
  { src: "/public/media/atelier-coupe.jpg", legend: "Atelier de coupe à Roubaix" },
  { src: "/public/media/atelier-confection.jpg", legend: "Machines de confection à Roubaix" },
  { src: "/public/media/atelier-controle.jpg", legend: "Contrôle qualité en atelier" },
  { src: "/public/media/atelier-equipe.jpg", legend: "Équipes au travail dans nos ateliers" },
];

const certifications = [
  { img: "/public/media/made-in-france.svg", name: "Made in France", desc: "Production locale, circuit court, savoir-faire français." },
  { img: "/public/media/origine-france-garantie.svg", name: "Origine France Garantie", desc: "Traçabilité et transparence sur l'origine des produits." },
  { img: "/public/media/gots.svg", name: "GOTS", desc: "Global Organic Textile Standard : coton bio certifié, respect environnemental et social." },
  { img: "/public/media/oeko-tex.svg", name: "Oeko-Tex", desc: "Absence de substances nocives, sécurité et santé des consommateurs." },
  { img: "/public/media/epv.svg", name: "Entreprise du Patrimoine Vivant", desc: "Label d'excellence pour les entreprises artisanales françaises." },
];

const artisans = [
  { img: "/public/media/artisan-vosges.jpg", nom: "Jean-Luc", metier: "Tricoteur - Vosges", citation: "La maille, c'est une passion et une tradition familiale. Ici, chaque fil compte." },
  { img: "/public/media/artisan-chessy.jpg", nom: "Sophie", metier: "Teinturière - Chessy-les-Mines", citation: "La couleur, c'est de la chimie, de l'art et beaucoup de rigueur. On ne laisse rien au hasard." },
  { img: "/public/media/artisan-roubaix.jpg", nom: "Karim", metier: "Confectionneur - Roubaix", citation: "Voir la pièce prendre forme sous nos mains, c'est une vraie fierté. Le textile, c'est la vie de Roubaix !" },
];

const valeurs = [
  { icon: icons.serieux, label: "Sérieux" },
  { icon: icons.precision, label: "Précision" },
  { icon: icons.respect, label: "Respect du geste" },
  { icon: icons.responsabilite, label: "Responsabilité" },
];

// --- COMPONENT ---
const NosAteliers: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [carousel, setCarousel] = useState(0);

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/public/media/atelier-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Nos ateliers textiles en France</h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Chaque atelier a une histoire. Votre pièce en bénéficiera.</p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-8">Nous sélectionnons nos partenaires français pour leur expertise, leur rigueur et le respect des métiers textiles. Chaque étape est réalisée dans un atelier spécialisé, garantissant qualité, traçabilité et impact local positif.</p>
          <Link to="/contact-devis" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Demander un devis</Link>
        </div>
      </section>

      {/* CARTE INTERACTIVE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Nos trois régions textiles d'excellence</h2>
          <div className="relative w-full h-96 mx-auto bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
            <img src="./public/media/carte-france.svg" alt="Carte de France" className="absolute inset-0 w-full h-full object-contain" />
            {regions.map((r, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{ top: r.pos.top, left: r.pos.left, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="block w-7 h-7 rounded-full bg-primary-blue border-4 border-white animate-pulse shadow-lg cursor-pointer"></span>
                {hovered === i && (
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 bg-white text-primary-blue rounded-xl shadow-lg px-4 py-2 text-sm font-bold whitespace-nowrap">
                    {r.name} <span className="font-normal">- {r.specialite}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOSGES - TRICOTAGE */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-end">
            {icons.bobine}
            <img src="./public/media/atelier-tricotage.jpg" alt="Atelier tricotage Vosges" className="rounded-2xl shadow-lg w-full max-w-md mt-4" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-2">Vosges - Tricotage & ennoblissement</h2>
            <div className="text-lg font-semibold text-primary-blue mb-2">Région textile historique</div>
            <p className="text-lg leading-relaxed mb-4">Depuis plus de 200 ans, les Vosges sont le berceau du tricotage français. Nos ateliers perpétuent ce savoir-faire d'excellence, alliant tradition et innovation.</p>
            <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
              <li>Le tricotage de mailles</li>
              <li>Le lavage</li>
              <li>L'ennoblissement</li>
              <li>Le contrôle qualité intermédiaire</li>
            </ul>
            <div className="bg-white border-l-4 border-primary-blue p-4 rounded-xl shadow mb-4 text-primary-blue font-bold">Un rendu impeccable, une tenue dans le temps, et un toucher incomparable</div>
            <div className="text-sm text-gray-500">200 ans de tradition textile • 3 500 emplois textiles dans les Vosges</div>
          </div>
        </div>
      </section>

      {/* CHESSY-LES-MINES - TEINTURE */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {icons.palette}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Chessy-les-Mines - Teinture & transformation matière</h2>
            <div className="text-lg font-semibold mb-2">Là où la couleur prend vie</div>
            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Les bains de teinture</li>
              <li>La stabilisation</li>
              <li>Les contrôles de nuance</li>
              <li>Les finitions techniques</li>
            </ul>
            <blockquote className="bg-white/10 border-l-4 border-cta-red p-4 rounded-xl italic mb-4">"Une précision essentielle pour garantir un rendu fiable et durable"</blockquote>
            <div className="text-sm text-white/80 mb-2">Process de teinture écologique, certification Oeko-Tex, économie d'eau : -30% par rapport à la moyenne européenne.</div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center md:items-end">
            <img src="./public/media/atelier-teinture.jpg" alt="Atelier teinture Chessy" className="rounded-2xl shadow-lg w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* ROUBAIX - CONFECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            {icons.machine}
            <img src="./public/media/atelier-confection.jpg" alt="Atelier confection Roubaix" className="rounded-2xl shadow-lg w-full max-w-md mt-4" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-2">Roubaix - Conception & confection</h2>
            <div className="text-lg font-semibold text-primary-blue mb-2">Notre cœur textile</div>
            <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
              <li>Coupe</li>
              <li>Assemblage</li>
              <li>Finitions</li>
              <li>Étiquettes</li>
              <li>Validation des prototypes</li>
              <li>Cohérence globale</li>
            </ul>
            <div className="bg-white border-l-4 border-cta-red p-4 rounded-xl shadow mb-4 text-cta-red font-bold">C'est ici que vos pièces prennent forme</div>
            <div className="text-sm text-gray-500">Roubaix, capitale historique du textile • +4 000 emplois textiles • Industrie locale en pleine renaissance</div>
          </div>
        </div>
      </section>

      {/* VISITE VIRTUELLE */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Découvrez nos ateliers en images</h2>
          <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white">
            <img src={atelierImages[carousel].src} alt={atelierImages[carousel].legend} className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 text-lg font-semibold">{atelierImages[carousel].legend}</div>
            <button onClick={() => setCarousel((carousel - 1 + atelierImages.length) % atelierImages.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-blue/80 text-white rounded-full p-2 shadow-lg hover:bg-cta-red transition-all"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={() => setCarousel((carousel + 1) % atelierImages.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-blue/80 text-white rounded-full p-2 shadow-lg hover:bg-cta-red transition-all"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </section>

      {/* POURQUOI CES ATELIERS */}
      <section className="bg-cta-red text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Pourquoi ces ateliers ?</h2>
          <p className="text-lg md:text-xl mb-8">Parce qu'ils partagent les mêmes valeurs</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {valeurs.map((v, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px]">
                {v.icon}
                <div className="mt-2 font-bold text-lg">{v.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/fabrication" className="bg-white text-primary-blue font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-blue hover:text-white transition-colors text-lg uppercase">Découvrir notre fabrication globale</Link>
            <Link to="/fabrication/matieres" className="bg-primary-blue text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-primary-blue transition-colors text-lg uppercase">Voir nos matières</Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & LABELS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Labels et engagements</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-8">
            {certifications.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={c.img} alt={c.name} className="h-16 mb-2" />
                <div className="font-bold text-primary-blue text-sm text-center mb-1">{c.name}</div>
                <div className="text-xs text-gray-500 text-center">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES ARTISANS */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">La parole aux artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((a, i) => (
              <div key={i} className="bg-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                <img src={a.img} alt={a.nom} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white" />
                <div className="font-bold text-lg mb-1">{a.nom}</div>
                <div className="text-sm mb-2 text-white/80">{a.metier}</div>
                <blockquote className="italic text-center">“{a.citation}”</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">Envie de fabriquer avec nos ateliers ?</h2>
          <p className="text-lg mb-8">Découvrez comment nous transformons votre projet en vêtement de qualité</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/solutions" className="bg-primary-blue text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-primary-blue transition-colors text-lg uppercase">Nos solutions</Link>
            <Link to="/contact-devis" className="bg-cta-red text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-blue hover:text-white transition-colors text-lg uppercase">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosAteliers;
