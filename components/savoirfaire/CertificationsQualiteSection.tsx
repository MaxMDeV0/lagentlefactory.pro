import React from "react";

const badges = [
  { logo: "/media/iso9001.svg", nom: "ISO 9001", desc: "Management qualité" },
  { logo: "/media/origine-france-garantie.svg", nom: "Origine France Garantie", desc: "Traçabilité et origine certifiée" },
  { logo: "/media/made-in-france.svg", nom: "Made in France", desc: "Production 100% française" },
  { logo: "/media/oeko-tex-logo.svg", nom: "Oeko-Tex", desc: "Textile sans substances nocives" },
  { logo: "/media/gots-logo.svg", nom: "GOTS", desc: "Organic processing" },
  { logo: "/media/epv-logo.svg", nom: "EPV", desc: "Entreprise du Patrimoine Vivant" }
];

const CertificationsQualiteSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Nos certifications de fabrication</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {badges.map((b, i) => (
          <div key={i} className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={b.logo} alt={b.nom} className="h-14 w-auto mb-2" />
            <div className="font-bold text-lg mb-1">{b.nom}</div>
            <div className="text-xs text-white/80 text-center">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsQualiteSection;
