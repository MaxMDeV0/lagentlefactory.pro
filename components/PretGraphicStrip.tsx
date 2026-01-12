import React from 'react'

const PretGraphicStrip: React.FC = () => {
  return (
    <div className="w-full bg-white py-6 border-b">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-6">
        <img src="/media/made-in-france.svg" alt="Made in France" className="h-12 w-auto" />
        <div>
          <h4 className="text-lg font-semibold text-primary-blue">Fabriqué en France — Une exigence assumée</h4>
          <p className="text-primary-blue/80 text-sm">Nos ateliers partenaires (Vosges, Chessy-les-Mines, Roubaix) garantissent savoir-faire local, traçabilité et qualité.</p>
        </div>
      </div>
    </div>
  )
}

export default PretGraphicStrip
