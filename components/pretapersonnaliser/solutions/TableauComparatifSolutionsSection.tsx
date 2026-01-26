import React from "react";

const criteres = [
  { label: "Délais de production", pret: "4-6 sem.", semi: "8-10 sem.", cocreation: "12-16 sem." },
  { label: "Quantité minimale", pret: "50", semi: "100", cocreation: "150" },
  { label: "Niveau de personnalisation", pret: "Basique", semi: "Élevé", cocreation: "Total" },
  { label: "Choix des matières", pret: "Limité", semi: "Large", cocreation: "Illimité" },
  { label: "Patronage personnalisé", pret: "-", semi: "✓", cocreation: "✓✓✓" },
  { label: "Prototypage", pret: "-", semi: "✓", cocreation: "✓✓✓" },
  { label: "Flexibilité créative", pret: "-", semi: "✓", cocreation: "✓✓✓" },
  { label: "Budget indicatif", pret: "15-22€", semi: "25-38€", cocreation: "Sur devis" },
  { label: "Idéal pour", pret: "Corporate, test", semi: "Marques, premium", cocreation: "Projets uniques" },
  { label: "Accompagnement", pret: "Standard", semi: "Expert", cocreation: "Expert+" },
  { label: "Nombre d'ajustements", pret: "Limité", semi: "1-2", cocreation: "Illimité" },
  { label: "Origine fabrication", pret: "France", semi: "France", cocreation: "France" }
];

const TableauComparatifSolutionsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Comparez nos trois solutions</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Trouvez l'équilibre parfait pour votre projet</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-primary-blue text-white">
              <th className="py-2 px-4 text-left">Critère</th>
              <th className="py-2 px-4 text-center">Prêt-à-perso</th>
              <th className="py-2 px-4 text-center">Semi-mesure</th>
              <th className="py-2 px-4 text-center">Co-création</th>
            </tr>
          </thead>
          <tbody>
            {criteres.map((c, i) => (
              <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-4 font-bold text-primary-blue">{c.label}</td>
                <td className="py-2 px-4 text-center">{c.pret}</td>
                <td className="py-2 px-4 text-center">{c.semi}</td>
                <td className="py-2 px-4 text-center">{c.cocreation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default TableauComparatifSolutionsSection;
