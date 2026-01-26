import React from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const FooterGlobal: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-0">
    {/* Bloc formulaire (fond visuel, déjà stylé dans ContactForm) */}
    <div className="border-b border-white/10">
      <ContactForm />
    </div>
    {/* Footer classique */}
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <span>© {new Date().getFullYear()} La Gentle Factory. Tous droits réservés.</span>
        <Link to="/mentions-legales" className="hover:underline text-white/80">Mentions légales</Link>
        <Link to="/politique-confidentialite" className="hover:underline text-white/80">Politique de confidentialité</Link>
      </div>
      <div className="text-white/60 text-xs">Site réalisé par l'équipe La Gentle Factory</div>
    </div>
  </footer>
);

export default FooterGlobal;
