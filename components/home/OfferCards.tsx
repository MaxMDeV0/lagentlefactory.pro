
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => (
  <article className="bg-primary-blue  shadow-xl overflow-hidden flex flex-col h-[520px] transition-all  hover:-translate-y-1" role="listitem">
    <div className="h-1/2 w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full min-[1200px]:max-h-[240px] object-cover  "
      />
    </div>
    <div className="p-6 flex flex-col justify-between flex-1">
      <div>
        <h4 className="text-white font-extrabold text-xl mb-3 leading-snug" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
      <Link to={link} className="inline-block bg-white text-primary-blue px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider shadow mt-4 self-start transition-colors hover:bg-gray-100">
        EN SAVOIR PLUS
      </Link>
    </div>
  </article>
);

const OfferCards: React.FC = () => {
  const cards = [
    {
      image: 'media/homme-mariniere-lgf.png',
      title: 'Pour les marques<br />& créateurs',
      description: 'Lancer une collection, développer une nouvelle pièce, structurer un vestiaire : nous vous accompagnons avec expertise et fabrication française.',
      link: '/marques-createurs'
    },
    {
      image: 'media/bonnets-famille-lgf.png',
      title: 'Pour les<br />entreprises',
      description: 'Des vêtements premium, modernes et responsables pour habiller vos équipes, vos événements ou vos collaborateurs.',
      link: '/entreprises'
    },
    {
      image: 'media/boutique-la-gentle-factory.png',
      title: 'Pour les boutiques<br />& concept-stores',
      description: 'Séries limitées, pièces exclusives ou modèle signature : créez une pièce parfaitement alignée avec votre univers.',
      link: '/boutiques'
    },
    {
      image: 'media/association-ffe-marque-blanche-lgf.png',
      title: 'Pour les institutions<br />& clubs & Fédérations',
      description: 'Des vêtements durables, identitaires et responsables, adaptés à un usage régulier et fabriqués en France.',
      link: '/institutions'
    }
  ];

  return (
    <section className="bg-white text-primary-blue py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-4 uppercase tracking-tight">À QUI S’ADRESSE NOTRE OFFRE ?</h2>
        <p className="text-center text-primary-blue/70 mb-12 max-w-[800px] mx-auto text-lg">
          Une solution pensée pour tous ceux qui veulent du textile de qualité.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-6" role="list">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;
