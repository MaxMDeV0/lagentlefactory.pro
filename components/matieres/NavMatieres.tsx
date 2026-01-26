import React from "react";

const familles = [
  { icon: "coton", label: "Coton biologique", bg: "/media/famille-coton.jpg" },
  { icon: "recycle", label: "Fibres recyclées", bg: "/media/famille-recycle.jpg" },
  { icon: "technique", label: "Matières techniques", bg: "/media/famille-technique.jpg" },
  { icon: "lin", label: "Lin français", bg: "/media/famille-lin.jpg" },
];

const NavMatieres: React.FC<{ active: number | null, onSelect: (i: number) => void, icons: any }> = ({ active, onSelect, icons }) => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-12 text-center">Nos quatre familles de matières</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {familles.map((f, i) => (
          <button
            key={i}
            className={`relative rounded-2xl shadow-lg border-l-4 border-primary-blue overflow-hidden group focus:outline-none transition-transform duration-300 hover:scale-105 ${active === i ? 'ring-4 ring-primary-blue' : ''}`}
            onClick={() => onSelect(i)}
            style={{ backgroundImage: `url('${f.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
            <div className="relative z-10 flex flex-col items-center justify-center py-16">
              {icons[f.icon]}
              <div className="mt-4 text-white text-xl font-bold drop-shadow-lg text-center">{f.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default NavMatieres;
