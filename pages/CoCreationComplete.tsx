import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- ICONS (inline SVGs) ---
const icons = {
  marque: (
    <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeWidth={2} strokeLinecap="round" d="M8 12l2 2 4-4" />
    </svg>
  ),
  entreprise: (
    <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={2} />
      <path strokeWidth={2} d="M16 3v4M8 3v4" />
    </svg>
  ),
  boutique: (
    <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="4" y="7" width="16" height="13" rx="2" strokeWidth={2} />
      <path strokeWidth={2} d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  ),
  institution: (
    <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M12 3l9 6-9 6-9-6z" />
      <path strokeWidth={2} d="M3 10v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-8 h-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M12 3a7 7 0 017 7c0 2.5-1.5 4.5-3.5 5.5V18a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.5C6.5 14.5 5 12.5 5 10a7 7 0 017-7z" />
      <path strokeWidth={2} d="M9 21h6" />
    </svg>
  ),
  pencil: (
    <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A4 4 0 017 17H5a2 2 0 002-2v-2a4 4 0 014-4z" />
    </svg>
  ),
  ruler: (
    <svg className="w-8 h-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="7" width="18" height="10" rx="2" strokeWidth={2} />
      <path strokeWidth={2} d="M7 7v2m4-2v2m4-2v2m-8 6v2m4-2v2m4-2v2" />
    </svg>
  ),
  palette: (
    <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <circle cx="8" cy="10" r="1" />
      <circle cx="16" cy="10" r="1" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  ),
  package: (
    <svg className="w-8 h-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="7" width="18" height="10" rx="2" strokeWidth={2} />
      <path strokeWidth={2} d="M3 7l9 5 9-5" />
    </svg>
  ),
  check: (
    <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeWidth={2} d="M9 12l2 2 4-4" />
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="7" width="13" height="10" rx="2" strokeWidth={2} />
      <path strokeWidth={2} d="M16 17h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2" />
    </svg>
  ),
  france: (
    <svg className="w-8 h-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
    </svg>
  ),
  time: (
    <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  ),
};

// --- DATA ---
const pourQui = [
  {
    icon: icons.marque,
    title: "Marques établies ou en lancement",
    desc: "Pour les marques avec une vision forte, souhaitant une pièce signature et différenciante."
  },
  {
    icon: icons.entreprise,
    title: "Entreprises exigeantes",
    desc: "Pour celles qui veulent un vêtement conçu exclusivement à leur image, porteur de leurs valeurs."
  },
  {
    icon: icons.boutique,
    title: "Boutiques premium",
    desc: "Pour proposer à vos clients une pièce unique, exclusive, qui marque les esprits."
  },
  {
    icon: icons.institution,
    title: "Institutions",
    desc: "Pour porter un projet textile identitaire, fédérateur, à forte dimension symbolique."
  },
];

const timeline = [
  {
    icon: icons.lightbulb,
    title: "Cadrage du projet",
    desc: "Usages, univers, volumes, contraintes : nous posons les bases solides de votre projet."
  },
  {
    icon: icons.pencil,
    title: "Style & construction",
    desc: "Moodboard, croquis, choix techniques et esthétiques pour donner vie à votre idée."
  },
  {
    icon: icons.ruler,
    title: "Patronage & mise au point",
    desc: "Création du patron sur-mesure et ajustements pour une coupe parfaite."
  },
  {
    icon: icons.palette,
    title: "Sélection matières",
    desc: "Coton bio certifié GOTS, polyester recyclé GRS, lin français, matières techniques innovantes."
  },
  {
    icon: icons.package,
    title: "Prototypage & ajustements",
    desc: "Réalisation du prototype, essayages et ajustements pour valider chaque détail."
  },
  {
    icon: icons.check,
    title: "Validation finale",
    desc: "Contrôle qualité, validation du modèle et des finitions avant lancement."
  },
  {
    icon: icons.truck,
    title: "Fabrication française",
    desc: "Production en petites ou moyennes séries dans nos ateliers français."
  },
];

const avantages = [
  { icon: icons.lightbulb, title: "Liberté créative totale", desc: "Votre vision, sans limite. Chaque détail est pensé pour vous." },
  { icon: icons.check, title: "Accompagnement expert", desc: "Un chef de projet dédié, expert textile, à chaque étape." },
  { icon: icons.ruler, title: "Résultat sur-mesure et unique", desc: "Un vêtement unique, conçu et fabriqué pour vous." },
  { icon: icons.france, title: "Production française maîtrisée", desc: "Fabrication dans nos ateliers, en petites ou moyennes séries." },
  { icon: icons.palette, title: "Qualité, transparence, traçabilité", desc: "Transparence sur les matières, la fabrication, la chaîne de valeur." },
  { icon: icons.time, title: "Délais transparents et maîtrisés", desc: "Co-création textile : 10 à 18 semaines selon complexité et quantité." },
];

const casPratiques = [
  {
    img: "/media/homme-mariniere-lgf.png",
    title: "Marque de streetwear",
    desc: "Hoodie technique recyclé, 100% conçu sur-mesure. 8 semaines de développement, 300 pièces produites.",
    result: "100% matières recyclées, délai respecté, forte différenciation."
  },
  {
    img: "/media/equipe-lgf-escalier.png",
    title: "Entreprise tech",
    desc: "Veste corporate premium, branding subtil, matières techniques. 12 semaines, 120 vestes.",
    result: "Satisfaction client 9,7/10, image employeur renforcée."
  },
  {
    img: "/media/boutique-la-gentle-factory.png",
    title: "Boutique concept",
    desc: "Collection capsule exclusive (3 pièces), storytelling, expérience client. 14 semaines, 80 sets.",
    result: "Ventes +30%, fidélisation accrue."
  },
];

const pourquoi = [
  "Créer un vêtement qui n’existe nulle part ailleurs, à votre image.",
  "Valoriser le Made in France : 2,4x moins d’émissions CO2 qu’un import Asie (ADEME 2024).",
  "Bénéficier d’un accompagnement expert, de la conception à la livraison."
];

const process = [
  {
    phase: "Conception",
    duration: "2-3 semaines",
    details: "Brief, moodboard, croquis, choix matières, validation du style."
  },
  {
    phase: "Prototypage",
    duration: "3-4 semaines",
    details: "Patronage, prototype, essayages, ajustements."
  },
  {
    phase: "Ajustements",
    duration: "1-2 semaines",
    details: "Corrections, validation finale, préparation production."
  },
  {
    phase: "Production",
    duration: "4-8 semaines",
    details: "Fabrication en atelier français, contrôle qualité, livraison."
  },
];

// --- COMPONENT ---
const CoCreationComplete: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/media/banner.png')" }}>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Solution de co-création complète</h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Votre idée devient un vêtement. De la première esquisse à la dernière couture.</p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-8">C’est la solution la plus ambitieuse : tout commence par votre vision. Nous concevons votre pièce intégralement, du style au patronage, du sourcing matières à la fabrication finale dans nos ateliers français.</p>
          <Link to="/contact-devis" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Demander un devis</Link>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Pour qui ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pourQui.map((seg, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                {seg.icon}
                <h3 className="font-semibold text-lg mb-2 text-primary-blue text-center">{seg.title}</h3>
                <p className="text-gray-700 text-center">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">Notre méthode en co-création</h2>
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cta-red rounded-full hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
            <ol className="relative z-10 w-full">
              {timeline.map((step, i) => (
                <li key={i} className="flex items-start mb-12 group fade-in-up">
                  <div className="flex flex-col items-center mr-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-cta-red text-cta-red font-bold text-xl shadow-lg mb-2">{i + 1}</span>
                    <span className="hidden md:block w-1 h-full bg-cta-red" style={{ minHeight: i === timeline.length - 1 ? 0 : 64 }}></span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {step.icon}
                      <h3 className="ml-3 text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/90 mb-2">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Les avantages de la co-création</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((a, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                {a.icon}
                <h3 className="font-semibold text-lg mb-2 text-primary-blue text-center">{a.title}</h3>
                <p className="text-gray-700 text-center">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAS PRATIQUES */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Exemples de projets en co-création</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casPratiques.map((p, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                <img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <h3 className="text-primary-blue text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{p.desc}</p>
                  <span className="inline-block bg-primary-blue text-white text-xs font-semibold rounded-full px-4 py-1">{p.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="bg-cta-red text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Pourquoi choisir cette solution ?</h2>
          <p className="text-lg md:text-xl mb-8">Parce qu'elle permet de créer un vêtement qui n'existe nulle part ailleurs...</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {pourquoi.map((arg, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-lg font-semibold flex items-center justify-center min-h-[120px]">{arg}</div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/realisations" className="bg-white text-cta-red font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-blue hover:text-white transition-colors text-lg uppercase">Voir nos réalisations</Link>
            <Link to="/contact-devis" className="bg-primary-blue text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-primary-blue transition-colors text-lg uppercase">Demander un devis</Link>
          </div>
        </div>
      </section>

      {/* PROCESS DÉTAILLÉ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">De l'idée au vêtement : notre accompagnement</h2>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-xl">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-bold text-primary-blue focus:outline-none"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  aria-expanded={openAccordion === i}
                >
                  <span>{p.phase} <span className="font-normal text-gray-500">({p.duration})</span></span>
                  <svg className={`w-6 h-6 ml-2 transition-transform ${openAccordion === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openAccordion === i && (
                  <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed animate-fade-in">
                    {p.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA FORM */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Prêt à créer votre pièce unique ?</h2>
          {sent ? (
            <div className="text-xl font-semibold text-green-200">Merci, votre demande a bien été envoyée !</div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={e => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  required
                  placeholder="Nom"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <input
                type="text"
                required
                placeholder="Type de projet (ex: hoodie, veste, collection...)"
                className="w-full px-4 py-3 rounded-full text-gray-900 focus:outline-none"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              />
              <textarea
                required
                placeholder="Votre message"
                className="w-full px-4 py-3 rounded-2xl text-gray-900 focus:outline-none min-h-[100px]"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
              <button
                type="submit"
                className="bg-cta-red hover:bg-white hover:text-cta-red transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg"
              >
                Démarrer mon projet
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoCreationComplete;
