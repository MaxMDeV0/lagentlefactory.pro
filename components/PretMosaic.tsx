import React from 'react'

const PretMosaic: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-3">
          <img src="./media/equipe-lgf-escalier.png" alt="Equipe atelier" className="w-full h-80 object-cover rounded-lg shadow" />
        </div>

        <div className="col-span-6 md:col-span-3 grid grid-rows-2 gap-4">
          <img src="./media/homme-mariniere-lgf.png" alt="Marinière" className="w-full h-38 object-cover rounded-lg shadow" />
          <img src="./media/bonnets-famille-lgf.png" alt="Bonnets" className="w-full h-38 object-cover rounded-lg shadow" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <img src="./media/logo.png" alt="La Gentle Factory" className="h-12 w-auto" />
        <p className="text-sm text-primary-blue/80">Une marque engagée qui privilégie la fabrication locale, les matières responsables et des séries adaptées.</p>
      </div>
    </section>
  )
}

export default PretMosaic
