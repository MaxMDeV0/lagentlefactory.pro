
import React from 'react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="bg-[#f8f9fa] text-primary-blue py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-2 uppercase">NOS SOLUTIONS</h2>
        <p className="text-center text-primary-blue/70 mb-12 text-lg">Trois façons de donner vie à votre projet.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" role="list">
          {/* Solution 1 */}
          <article className="relative bg-primary-blue text-white rounded-2xl p-8 min-h-[400px] shadow-lg flex flex-col justify-between border border-primary-blue/20 transition-all hover:scale-[1.02]" role="listitem">
            <div>
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-xl">1</div>
              <div className="mt-16">
                <h3 className="font-extrabold text-2xl mb-3">Prêt-à-personnaliser</h3>
                <p className="text-white/80 text-lg mb-6">Des modèles existants personnalisés à votre identité.</p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Délais rapides</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Budget maîtrisé</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Qualité garantie</li>
                </ul>
              </div>
            </div>
            <Link to="/nos-solutions/pret-a-personnaliser" className="inline-block mt-8 bg-white text-primary-blue px-6 py-3 rounded-full font-bold text-center transition-colors hover:bg-gray-100">EN SAVOIR PLUS</Link>
          </article>

          {/* Solution 2 */}
          <article className="relative bg-white text-primary-blue rounded-2xl p-8 min-h-[400px] shadow-lg flex flex-col justify-between border border-gray-100 transition-all hover:scale-[1.02]" role="listitem">
            <div>
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center text-white font-extrabold text-xl">2</div>
              <div className="mt-16">
                <h3 className="font-extrabold text-2xl mb-3">Semi-sur-mesure</h3>
                <p className="text-primary-blue/70 text-lg mb-6">Votre style, nos bases techniques.</p>
                <ul className="space-y-2 text-primary-blue/80">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full"></span> Matières, couleurs, finitions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full"></span> Liberté créative maîtrisée</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full"></span> Fabrication française</li>
                </ul>
              </div>
            </div>
            <Link to="/nos-solutions/semi-sur-mesure" className="inline-block mt-8 bg-cta-red text-white px-6 py-3 rounded-full font-bold text-center transition-opacity hover:opacity-90">EN SAVOIR PLUS</Link>
          </article>

          {/* Solution 3 */}
          <article className="relative bg-cta-red text-white rounded-2xl p-8 min-h-[400px] shadow-lg flex flex-col justify-between border border-cta-red/20 transition-all hover:scale-[1.02]" role="listitem">
            <div>
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-xl">3</div>
              <div className="mt-16">
                <h3 className="font-extrabold text-2xl mb-3">Co-création complète</h3>
                <p className="text-white/80 text-lg mb-6">Votre idée devient une pièce unique.</p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Style, patronage, prototypage</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Accompagnement expert</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Résultat sur-mesure</li>
                </ul>
              </div>
            </div>
            <Link to="/nos-solutions/co-creation-complete" className="inline-block mt-8 bg-white text-primary-blue px-6 py-3 rounded-full font-bold text-center transition-colors hover:bg-gray-100">EN SAVOIR PLUS</Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
