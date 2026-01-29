import React from "react";

// Correction TypeScript pour import.meta.env
declare global {
  interface ImportMeta {
    env: {
      BASE_URL: string;
    };
  }
}

import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faYoutube, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterGlobal: React.FC = () => (
  <footer className="bg-primary-blue text-white pt-0">
    {/* Bloc formulaire (fond visuel, déjà stylé dans ContactForm) */}
    <div className="border-b border-white/10">
      <ContactForm />
    </div>
    {/* Footer classique */}
    {/* -footer liens basiques en colonne, texte plus gros, logo image */}
    <div className="w-full border-t border-white/10 pt-8 pb-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6" id="-footer">
      {/* Colonne logo */}
      <div className="flex flex-col items-center justify-center">
        <img src={`${import.meta.env.BASE_URL}media/logo.svg`} alt="La Gentle Factory" className="h-16 w-auto mb-2" />
      </div>
      {/* Colonne navigation liens */}
      <nav className="m-auto  flex flex-col items-start text-md font-extrabold tracking-tight uppercase h">
        <Link to="/mentions-legales" className="hover:underline text-white/90">Mentions légales</Link>
        <Link to="/politique-confidentialite" className="hover:underline text-white/90">Politique de confidentialité</Link>
        <a href="/plan-site" className="hover:underline text-white/90">Plan du site</a>
        <a href="/contact" className="hover:underline text-white/90">Contact</a>
        <a href="https://www.lagentlefactory.com/" className="hover:underline text-white/90" target="_blank" rel="noopener noreferrer">Site marchand</a>
      </nav>
      {/* Colonne réseaux sociaux */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold text-lg mb-1">Suivez-nous</span>
        <div className="flex flex-row gap-3 text-2xl my-3">
          <a href="https://www.facebook.com/lagentlefactory" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/lagentlefactory" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com/channel/UCR1fyABK-u2uHNvUvPiVsHw" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-red-500">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://fr.pinterest.com/lagentlefactory/" target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:text-red-400">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="https://instagram.com/lagentlefactory/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <span>© {new Date().getFullYear()} La Gentle Factory. Tous droits réservés.</span>
      </div>
      <div className="text-white/60 text-xs">Site réalisé par l'équipe de La Gentle Factory</div>
    </div>

  </footer>
);

export default FooterGlobal;
