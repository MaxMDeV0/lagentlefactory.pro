import React, { useState } from "react";

const FooterFaireFabriquerCTA: React.FC = () => {
  const [form, setForm] = useState({ nom: '', email: '', type: '', quantite: '', message: '' });
  return (
    <section id="footer-fabriquer" className="bg-cta-red text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à faire fabriquer vos vêtements en France ?</h2>
        <p className="text-lg mb-8">On répond en 24 à 48h et on vous oriente vers la solution la plus adaptée.</p>
        <form className="bg-white/10 rounded-2xl shadow-lg p-8 mb-6 flex flex-col gap-4 items-center">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input type="text" required placeholder="Nom / Entreprise" className="flex-1 rounded-full px-6 py-3 text-lg text-primary-blue" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
            <input type="email" required placeholder="Email" className="flex-1 rounded-full px-6 py-3 text-lg text-primary-blue" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <select required className="flex-1 rounded-full px-6 py-3 text-lg text-primary-blue" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
              <option value="">Type de projet</option>
              <option value="marque">Marque / Créateur</option>
              <option value="entreprise">Entreprise</option>
              <option value="boutique">Boutique / Concept-store</option>
              <option value="institution">Institution / Club</option>
              <option value="autre">Autre</option>
            </select>
            <input type="text" required placeholder="Quantité estimée" className="flex-1 rounded-full px-6 py-3 text-lg text-primary-blue" value={form.quantite} onChange={e => setForm(f => ({ ...f, quantite: e.target.value }))} />
          </div>
          <textarea required placeholder="Message rapide" className="rounded-2xl px-6 py-3 text-lg text-primary-blue w-full" rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
            <button type="submit" className="bg-white text-cta-red font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">Envoyer ma demande</button>
            <a href="mailto:contact@lagentlefactory.com" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Prendre rendez-vous téléphonique</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FooterFaireFabriquerCTA;
