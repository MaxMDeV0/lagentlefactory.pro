
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    quantity: '',
    description: '',
    email: '',
    products: [] as string[]
  });

  const handleCheckboxChange = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données du formulaire :', formData);
    alert('Merci ! Votre demande a été envoyée (simulation).');
  };

  return (
    <section id="devis" className="relative bg-cover bg-center py-24 min-h-[700px] flex items-center" style={{ backgroundImage: "url('public/media/equipe-lgf-escalier.png')" }}>
      {/* Overlay for better readability on mobile */}
      <div className="absolute inset-0 bg-black/30 md:hidden" aria-hidden="true"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="md:pr-12">
              <h3 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-6 drop-shadow-lg">
                Besoin d'un devis ou d'un premier échange ?
              </h3>
              <p className="text-white/95 text-xl leading-relaxed max-w-[450px]">
                On répond en 24 à 48h et on vous oriente vers la solution la plus adaptée.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <form
              onSubmit={handleSubmit}
              className="bg-primary-blue p-8 md:p-10 text-white rounded-3xl shadow-2xl border border-white/5"
            >
              <h4 className="font-extrabold text-2xl mb-8 uppercase tracking-wide">Parlez-nous de votre projet</h4>

              {/* Nom de l'entreprise */}
              <div className="mb-6">
                <label htmlFor="company" className="lgf-label">Nom de l'entreprise</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Ex : Ma Société"
                  className="lgf-input w-full focus:ring-2 focus:ring-white/20 outline-none"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              {/* Produits */}
              <div className="mb-6">
                <div className="mb-4 font-bold text-white/90 text-sm uppercase tracking-wider">Quels produits vous intéressent ?</div>
                <div className="space-y-3">
                  {['Sweats', 'Pantalons', 'Vestes', 'T-shirts', 'Autre'].map((p) => (
                    <label key={p} className="lgf-option group">
                      <input
                        type="checkbox"
                        checked={formData.products.includes(p)}
                        onChange={() => handleCheckboxChange(p)}
                        className="lgf-checkbox"
                      />
                      <span className="font-semibold transition-colors">{p}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantité */}
              <div className="mb-6">
                <label htmlFor="quantity" className="lgf-label">Quantité souhaitée</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="Ex : 120"
                  className="lgf-input w-full focus:ring-2 focus:ring-white/20 outline-none"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="description" className="lgf-label">Expliquez votre projet</label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Dites-nous en plus sur vos besoins..."
                  className="lgf-textarea w-full focus:ring-2 focus:ring-white/20 outline-none resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              {/* Email */}
              <div className="mb-8">
                <label htmlFor="email" className="lgf-label">Votre Email professionnel</label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@exemple.com"
                  className="lgf-input w-full focus:ring-2 focus:ring-white/20 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <p className="text-[10px] text-white/50 mt-3 italic uppercase tracking-widest">
                  Nous respectons votre confidentialité. Aucune donnée n'est revendue.
                </p>
              </div>

              {/* Submit */}
              <div className="text-right">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-block bg-cta-red hover:bg-[#7a0d15] text-white px-10 py-4 font-extrabold rounded-full transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl uppercase tracking-widest"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
