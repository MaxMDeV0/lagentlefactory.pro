
import React from 'react';

interface ClientItemProps {
  name: string;
  projectImg: string;
  logo: string;
}

const ClientItem: React.FC<ClientItemProps> = ({ name, projectImg, logo }) => (
  <div className="flex flex-col items-center text-center group space-y-6">
    <div className="font-bold text-primary-blue text-xl tracking-wide group-hover:text-cta-red transition-colors">{name}</div>
    <div className="w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] overflow-hidden bg-gray-100 rounded-2xl shadow-lg border border-gray-100">
      <img
        src={projectImg}
        alt={`${name} - projet`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="flex items-center justify-center h-16 w-full px-4">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
);

const Clients: React.FC = () => {
  const projects = [
    {
      name: 'GT Logistics',
      projectImg: 'media/homme-mariniere-lgf.png',
      logo: 'media/gt-logistics-logo.svg'
    },
    {
      name: "Moulin d'Ascq",
      projectImg: 'media/bonnets-famille-lgf.png',
      logo: 'media/moulin-dascq-logo.svg'
    },
    {
      name: 'Rexel',
      projectImg: 'media/boutique-la-gentle-factory.png',
      logo: 'media/rexel-logo.svg'
    },
    {
      name: 'FFE',
      projectImg: 'media/association-ffe-marque-blanche-lgf.png',
      logo: 'media/ffe-logo.svg'
    }
  ];

  return (
    <section className="bg-white text-primary-blue py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center font-extrabold text-3xl md:text-5xl mb-6 leading-tight uppercase">
          Ils nous ont confié leurs vêtements.<br />Voici ce que nous avons créé ensemble.
        </h2>
        <p className="text-center text-primary-blue/60 mb-16 max-w-[900px] mx-auto text-lg leading-relaxed">
          Découvrez quelques projets réalisés dans nos ateliers : sweat corporate premium, série limitée boutique,
          tee-shirt signature de marque… Une fabrication française maîtrisée, de la première idée jusqu'à la livraison.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 items-start justify-items-center">
          {projects.map((p, i) => (
            <ClientItem key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
