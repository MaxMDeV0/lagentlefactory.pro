import React from "react";

const certifications = [
  { img: "/media/gots.svg", name: "GOTS", desc: "Global Organic Textile Standard : coton bio certifié, respect environnemental et social." },
  { img: "/media/grs.svg", name: "GRS", desc: "Global Recycled Standard : fibres recyclées certifiées, traçabilité et impact réduit." },
  { img: "/media/oeko-tex.svg", name: "Oeko-Tex", desc: "Absence de substances nocives, sécurité et santé des consommateurs." },
  { img: "/media/masters-of-linen.svg", name: "Masters of Linen", desc: "Label européen pour le lin cultivé et transformé localement." },
  { img: "/media/origine-france-garantie.svg", name: "Origine France Garantie", desc: "Traçabilité et transparence sur l'origine des produits." },
  { img: "/media/bci.svg", name: "BCI", desc: "Better Cotton Initiative : amélioration des pratiques agricoles et sociales." },
];

const CertificationsSection: React.FC = () => (
  <section className="bg-cta-red text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Nos certifications matières</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-8">
        {certifications.map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={c.img} alt={c.name} className="h-12 mb-2" />
            <div className="font-bold text-white text-sm text-center mb-1">{c.name}</div>
            <div className="text-xs text-white/80 text-center">{c.desc}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-lg font-semibold">Garantie de qualité, traçabilité, respect environnemental</div>
    </div>
  </section>
);

export default CertificationsSection;
