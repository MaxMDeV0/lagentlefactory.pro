import React from "react";
import { Link } from "react-router-dom";

const HeroEngagements: React.FC = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/media/atelier-hero.jpg')" }}>
    <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
    <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Nos engagements responsables</h1>
      <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Créer mieux, durablement et en transparence.</p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-4">Nos engagements ne sont pas des slogans, mais des choix stratégiques assumés depuis plus de dix ans. Chaque décision est prise avec l'impact en tête.</p>
      <blockquote className="bg-white/10 border-l-4 border-cta-red p-4 rounded-xl italic mb-8">"Chaque décision est prise avec l'impact en tête"</blockquote>
      <Link to="/fabrication" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Découvrir notre savoir-faire</Link>
    </div>
  </section>
);

export default HeroEngagements;
