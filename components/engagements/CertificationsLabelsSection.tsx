import React from "react";

const labels = [
  { logo: "/public/media/gots-logo.svg", titre: "GOTS", desc: "Global Organic Textile Standard : certification bio et sociale", link: "https://www.global-standard.org/fr" },
  { logo: "/public/media/oeko-tex-logo.svg", titre: "Oeko-Tex Standard 100", desc: "Absence de substances nocives dans les textiles", link: "https://www.oeko-tex.com/fr/" },
  { logo: "/public/media/grs-logo.svg", titre: "GRS", desc: "Global Recycled Standard : certification matières recyclées", link: "https://globalrecycledstandard.com/" },
  { logo: "/public/media/made-in-france.svg", titre: "Made in France", desc: "Production 100% française", link: "https://www.madeinfrance.org/" },
  { logo: "/public/media/origine-france-garantie.svg", titre: "Origine France Garantie", desc: "Traçabilité et origine française certifiée", link: "https://www.originefrancegarantie.fr/" },
  { logo: "/public/media/masters-of-linen.svg", titre: "Masters of Linen", desc: "Label européen du lin de qualité", link: "https://www.mastersoflinen.com/" },
  { logo: "/public/media/bcorp-logo.svg", titre: "B Corp", desc: "Certification entreprise à impact positif (en cours)", link: "https://www.bcorporation.fr/" },
  { logo: "/public/media/epv-logo.svg", titre: "EPV", desc: "Entreprise du Patrimoine Vivant : savoir-faire d'excellence", link: "https://www.institut-metiersdart.org/epv" }
];

const CertificationsLabelsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-6 text-center">Nos certifications et reconnaissances</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">Ces labels attestent de nos engagements.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {labels.map((l, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
            <img src={l.logo} alt={l.titre} className="h-12 w-auto mb-2" />
            <div className="font-bold text-primary-blue mb-1">{l.titre}</div>
            <div className="text-xs text-gray-600 mb-2 text-center">{l.desc}</div>
            <a href={l.link} target="_blank" rel="noopener noreferrer" className="text-green-600 text-xs font-bold underline">En savoir plus</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsLabelsSection;
