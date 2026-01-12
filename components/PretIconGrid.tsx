import React from 'react'

const PretIconGrid: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="p-6 border rounded-lg flex items-start gap-4">
          <img src="/media/fibres-bio.svg" alt="Coton bio" className="h-14 w-14" />
          <div>
            <h4 className="font-semibold text-primary-blue">Matières responsables</h4>
            <p className="text-sm text-primary-blue/80">Coton bio, matières recyclées et fibres techniques sélectionnées pour durabilité et confort.</p>
          </div>
        </div>

        <div className="p-6 border rounded-lg flex items-start gap-4">
          <img src="/media/fibres-recyclees.svg" alt="Fibres recyclées" className="h-14 w-14" />
          <div>
            <h4 className="font-semibold text-primary-blue">Circuits courts & trace</h4>
            <p className="text-sm text-primary-blue/80">Proximité des ateliers, contrôle des étapes et réduction des transports.</p>
          </div>
        </div>

        <div className="p-6 border rounded-lg flex items-start gap-4">
          <img src="/media/icon.svg" alt="Savoir-faire" className="h-14 w-14" />
          <div>
            <h4 className="font-semibold text-primary-blue">Savoir-faire</h4>
            <p className="text-sm text-primary-blue/80">Patronage, prototypage et finitions réalisés avec des partenaires français experts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PretIconGrid
