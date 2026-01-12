import React from "react";
import { Link } from "react-router-dom";

const HeroMatieres: React.FC = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/public/media/macro-fibres.jpg')" }}>
    <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
    <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Nos matières responsables</h1>
      <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Choisir la bonne matière, c'est définir l'âme de votre vêtement.</p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-4">Chaque fibre est sélectionnée avec attention : provenance, durabilité, tenue, impact environnemental. Nous privilégions les matières certifiées, tracées et innovantes pour garantir la qualité et la responsabilité de vos projets.</p>
      <blockquote className="bg-white/10 border-l-4 border-accent-green p-4 rounded-xl italic mb-8">"Créer un vêtement responsable commence par choisir une matière responsable"</blockquote>
      <Link to="/contact-devis" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Demander un devis</Link>
    </div>
  </section>
);

export default HeroMatieres;
