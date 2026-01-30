import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/global/Breadcrumb';
import Cards from '../components/global/SolutionsCards';
import EnterpriseProcess from '../components/entreprise/EnterpriseProcess';
import Hero from '@/components/global/ColorHero';
import ContactSection from '@/components/global/ContactSection';
import Section from '@/components/global/Section';

const Entreprises: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-12">

      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        <Breadcrumb />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Textile entreprise premium.</h1>

        <Hero
          bgColor="bg-[#293279]"
          title="Ce que nous faisons pour les entreprises"
          description={
            <>
              Un vêtement d’entreprise n’est jamais anodin : il représente votre culture, votre ambition,
              votre manière de travailler.
              Il doit être élégant, confortable, durable et refléter ce que votre organisation défend.
              Nous créons pour vous des vêtements professionnels premium, modernes et responsables,
              pensés pour être portés au quotidien, bien au-delà du geste corporate.
            </>
          }
        />
        <Section title='Habiller vos équipes, valoriser votre image, avec un textile responsable et
fabriqué en France.' description={
            <><div className="mb-4">Un vêtement d’entreprise n’est jamais anodin : il représente votre culture, votre ambition,
              votre manière de travailler.
              Il doit être élégant, confortable, durable — et refléter ce que votre organisation défend.</div><div>Nous créons pour vous des vêtements professionnels premium, modernes et responsables,
                pensés pour être portés au quotidien, bien au-delà du geste corporate.</div><div className="text-primary-blue/80 mt-4">Que vous recherchiez un sweat corporel, une chemise technique, un polo ou un kit pour un événement, nous garantissons un produit durable, confortable et élégant. Nos propositions incluent le conseil sur la matière (coton bio, fibres recyclées, tissus techniques), la finition (broderie, sérigraphie, étiquette) et la logistique (packaging, conditionnement par taille).</div></>
          } />

        <div className="max-w-[1200px] mx-auto px-6 py-10">

          <Cards title='Trois options selon vos besoins' />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4"><mark className="bg-[#96101C] p-1 text-white">Fabrication française &amp; cohérence responsable</mark></h2>
            <p className="text-primary-blue/80">Nous travaillons avec des ateliers en France : Vosges (tricotage & ennoblissement), Chessy-les-Mines (teinture) et Roubaix (confection & finitions). Cette proximité nous permet d'assurer une traçabilité complète, des délais maîtrisés et une qualité constante.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                <h3 className="font-semibold mb-2">Délais maîtrisés</h3>
                <p className="text-sm text-primary-blue/80">Notre organisation locale garantit des délais courts et fiables, adaptés à vos besoins professionnels.</p>
              </div>
              <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                <h3 className="font-semibold mb-2">Qualité durable</h3>
                <p className="text-sm text-primary-blue/80">Des vêtements pensés pour durer, testés à chaque étape, pour une image valorisée sur le long terme.</p>
              </div>
              <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                <h3 className="font-semibold mb-2">Matières responsables</h3>
                <p className="text-sm text-primary-blue/80">Coton bio, fibres recyclées ou tissus techniques : nous sélectionnons des matières à faible impact environnemental.</p>
              </div>
              <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                <h3 className="font-semibold mb-2">Traçabilité claire</h3>
                <p className="text-sm text-primary-blue/80">Chaque étape de fabrication est documentée, pour une transparence totale sur l’origine et la transformation de vos produits.</p>
              </div>
              <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                <h3 className="font-semibold mb-2">Relation directe & transparente</h3>
                <p className="text-sm text-primary-blue/80">Un interlocuteur unique, des échanges clairs et un accompagnement à chaque étape de votre projet.</p>
              </div>
            </div>
          </section>

          {/* <EnterpriseProcess /> */}

          {/* Large visual gallery to illustrate ateliers, produits et séries */}
          <section className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6 w-full max-w-[1128px] ">


              {/* Rouge */}
              <div className=" w-full h-full aspect-square   " >
                <img src={(import.meta.env.BASE_URL || '') + 'media/gt-logistics-paysage.jpeg'} alt="Logistique textile" className="object-cover w-full h-full" />
              </div>

              {/* Colonne droite */}
              <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 w-full ">


                {/* Bleu + Vert */}
                <div className="flex flex-col gap-6">
                  <div className="bg-blue-100 w-full h-[calc(50%-12px)]  aspect-square" >
                    <img src={(import.meta.env.BASE_URL || '') + 'media/TEINTURE_MAT_CHESSY.jpg'} alt="Teinture" className="object-cover w-full h-full" />
                  </div>
                  <div className="bg-green-100 w-full h-[calc(50%-12px)]  aspect-square ">
                    <img src={(import.meta.env.BASE_URL || '') + 'media/ACCESSOIRES_SATAB_SAINT JUST MALMONT_MB.jpg'} alt="Accessoires" className="object-cover w-full h-full" />
                  </div>
                </div>


                {/* Jaune */}
                <div className="bg-yellow-100 w-[calc(100%-24px)] h-[100%]  ">
                  <img src={(import.meta.env.BASE_URL || '') + 'media/patron-atelier.jpg'} alt="Patron atelier" className="object-cover w-full h-full" />
                </div>

              </div>
            </div>


          </section>

          <section className="mb-10 bg-[#96101C] text-white p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi les entreprises choisissent notre savoir-faire</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Une image soignée, moderne et durable</h3>
                <p className="text-sm opacity-90">Nos créations valorisent l'identité de votre entreprise grâce à un design contemporain et une finition haut de gamme, pour une image professionnelle forte et cohérente.</p>
              </div>
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Des pièces confortables, vraiment portées</h3>
                <p className="text-sm opacity-90">Nous concevons des vêtements agréables à porter au quotidien, favorisant l’adhésion de vos équipes et leur bien-être au travail comme en dehors.</p>
              </div>
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Un accompagnement clair et accessible</h3>
                <p className="text-sm opacity-90">Un interlocuteur dédié vous guide à chaque étape, du choix des matières à la livraison, pour une expérience simple et transparente.</p>
              </div>
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Matières responsables triées avec intention</h3>
                <p className="text-sm opacity-90">Nous sélectionnons des matières certifiées, biologiques ou recyclées, pour limiter l’impact environnemental et garantir la qualité.</p>
              </div>
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Production française et délais fiables</h3>
                <p className="text-sm opacity-90">La fabrication locale permet de maîtriser les délais et d’assurer une grande réactivité, tout en soutenant l’économie régionale.</p>
              </div>
              <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
                <h3 className="font-semibold mb-2">Services logistiques et packaging</h3>
                <p className="text-sm opacity-90">Nous proposons des solutions de conditionnement, d’envoi par taille ou par kit, et un packaging soigné pour une gestion simplifiée.</p>
              </div>
            </div>
          </section>

          {/* <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemples de réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="p-4 border rounded-lg flex gap-4 items-start">
                <img src="./media/gt-logo.svg" alt="GT logistics" style={{ width: 80, height: 80, objectFit: 'contain' }} />
                <div>
                  <h3 className="font-semibold">Sweat premium corporate — GT logistics</h3>
                  <p className="mt-2 text-sm text-primary-blue/80">Objectif : moderniser l'image interne. Solution : semi-sur-mesure (coton bio, broderie ton sur ton, coupe droite). Livraison en 6 semaines. Résultat : 92% des collaborateurs le portent en dehors du travail.</p>
                </div>
              </article>

              <article className="p-4 border rounded-lg flex gap-4 items-start">
                <img src="./media/boutique-la-gentle-factory.png" alt="Boutique" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }} />
                <div>
                  <h3 className="font-semibold">Série limitée pour boutique</h3>
                  <p className="mt-2 text-sm text-primary-blue/80">Objectif : créer une pièce exclusive. Solution : prêt-à-personnaliser + finitions spécifiques. Résultat : série vendue en 12 jours.</p>
                </div>
              </article>
            </div>
          </section> */}

          <ContactSection />
        </div>

      </div>
    </main>
  );
};

export default Entreprises;
