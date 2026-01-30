
// ...existing code...


import React from "react";
import PlainHero from "@/components/global/PlainHero";
import Section from "@/components/global/Section";
import Breadcrumb from "@/components/global/Breadcrumb";
import { Link } from "react-router-dom";

const NosMatieres: React.FC = () => (
  <main className="bg-white text-primary-blue min-h-screen">
    <PlainHero imgUrl="../media/laine-mouton.jpg" title="Nos matières responsables" />
    <div className="max-w-[1200px] mx-auto px-6 pt-24">
      <Breadcrumb />
      <Section
        title="Choisir la bonne matière, c'est définir l'âme de votre vêtement."
        description={<>
          Nous sélectionnons chaque fibre avec attention : sa provenance, sa durabilité, sa tenue, son impact.<br />
          Créer un vêtement responsable commence par choisir une matière responsable.
        </>}
      />


      <section className="my-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/coton 1.jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/coton 2 (2).jpg'} alt="Coton biologique" className="w-full h-auto object-cover" />
            </picture>
          </div>
          <div className="w-full md:w-1/2">
            <Section
              title="Coton biologique"
              description={<>
                Certifié, tracé, durable.<br />
                Parfait pour les tee-shirts, sweats, polos, vêtements du quotidien haut de gamme.
              </>}
            />
          </div>
        </div>
      </section>


      <section className="my-12 bg-primary-blue text-white py-14">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h3 className="font-extrabold text-2xl md:text-3xl mb-3">Fibres recyclées</h3>
            <p className="text-white/90 leading-relaxed">
              Issues de chutes ou textiles recyclés, nos fibres recyclées permettent de créer des sweats, tricots ou pièces structurées sans concession sur le confort.<br />
              Un choix responsable pour limiter l'impact environnemental et donner une seconde vie à la matière.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <img src={(import.meta.env.BASE_URL || '') + 'media/Picto_GF_Fibres_Recyclees.svg'} alt="Fibres recyclées" className="mx-auto h-28 w-20" />
          </div>
        </div>
      </section>


      <section className="my-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/metier-a-tisser.jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/metier-a-tisser-2.jpg'} alt="Matières techniques" className="w-full h-auto object-cover" />
            </picture>
          </div>
          <div className="w-full md:w-1/2">
            <Section
              title="Matières techniques"
              description={<>
                Polyesters haute performance, fibres hybrides, toiles durables.<br />
                Pour les entreprises, les usages professionnels ou les pièces plus sophistiquées.
              </>}
            />
          </div>
        </div>
      </section>


      <section className="my-12">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/Lin 1 (2).jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/Lin 2 (2).jpg'} alt="Lin" className="w-full h-auto object-cover" />
            </picture>
          </div>
          <div className="w-full md:w-1/2">
            <Section
              title="Lin"
              description={<>
                Local, naturel, élégant.<br />
                Pour des chemises, tee-shirts et textiles estivaux responsables.
              </>}
            />
          </div>
        </div>
      </section>

      <Section
        title="Pourquoi ces matières ?"
        description={<>
          <ul className="list-disc pl-6 my-2">
            <li>pour leur durabilité</li>
            <li>pour leur traçabilité</li>
            <li>pour leur confort</li>
            <li>pour leur esthétique</li>
            <li>pour leur cohérence responsable</li>
          </ul>
        </>}
      />

      <section className="mb-12 bg-cta-red p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Envie d'en savoir plus ou de demander un devis&nbsp;?</h2>
        <p className="mb-4 text-white">Découvrez notre fabrication ou contactez-nous pour concrétiser votre projet textile responsable.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/fabrication-savoir-faire" className="bg-white text-primary-blue font-bold px-8 py-4 text-lg uppercase">En savoir plus sur la fabrication</Link>
          <a href="#contact" className="bg-primary-blue text-white font-bold px-8 py-4 text-lg uppercase">Demander un devis</a>
        </div>
      </section>
    </div>
  </main>
);

export default NosMatieres;
