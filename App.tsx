
import React from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, Router } from 'react-router-dom';
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
import FaireFabriquerFrance from './pages/FaireFabriquerFrance';
import Solutions from './pages/Solutions';
import FooterGlobal from './components/global/FooterGlobal';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/faire-fabriquer-en-france" element={<FaireFabriquerFrance />} />
        <Route path="/marques-createurs" element={<MarquesCreateurs />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/institutions" element={<Institutions />} />

        <Route path="/nos-solutions" element={<Solutions />} />
        <Route path="/nos-solutions/pret-a-personnaliser" element={<PretAPersonnaliser />} />
        <Route path="/nos-solutions/semi-sur-mesure" element={<SemiSurMesure />} />
        <Route path="/nos-solutions/co-creation-complete" element={<CoCreationComplete />} />

        <Route path="/fabrication" element={<FabricationSavoirFaire />} />
        <Route path="/fabrication/nos-matieres" element={<NosMatieres />} />
        <Route path="/fabrication/nos-ateliers" element={<NosAteliers />} />
        <Route path="/fabrication/nos-engagements" element={<NosEngagements />} />

      </Routes>

      <FooterGlobal />
    </div>
  );
};

export default App;
