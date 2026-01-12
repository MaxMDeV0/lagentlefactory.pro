
import React from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarquesCreateurs from './pages/MarquesCreateurs';
import Entreprises from './pages/Entreprises';
import Boutiques from './pages/Boutiques';
import Institutions from './pages/Institutions';
import PretAPersonnaliser from './pages/PretAPersonnaliser';
import SemiSurMesure from './pages/SemiSurMesure';
import CoCreationComplete from './pages/CoCreationComplete';
import NosAteliers from './pages/NosAteliers';
import NosMatieres from './pages/NosMatieres';
import NosEngagements from './pages/NosEngagements';
import FabricationSavoirFaire from './pages/FabricationSavoirFaire';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marques-createurs" element={<MarquesCreateurs />} />
        <Route path="/pret-a-personnaliser" element={<PretAPersonnaliser />} />
        <Route path="/semi-sur-mesure" element={<SemiSurMesure />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/boutiques" element={<Boutiques />} />

        <Route path="/institutions" element={<Institutions />} />
        <Route path="/co-creation-complete" element={<CoCreationComplete />} />
        <Route path="/fabrication" element={<FabricationSavoirFaire />} />
        <Route path="/fabrication/nos-matieres" element={<NosMatieres />} />
        <Route path="/fabrication/nos-ateliers" element={<NosAteliers />} />
        <Route path="/fabrication/nos-engagements" element={<NosEngagements />} />


      </Routes>

      {/* Simple Footer Example */}
      <footer className="bg-primary-blue py-8 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} La Gentil Factory. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default App;
