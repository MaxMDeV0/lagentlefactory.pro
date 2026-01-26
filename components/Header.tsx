import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const blogCloseTimer = useRef<number | null>(null);

  const location = useLocation();

  useEffect(() => {
    // If we're not on the homepage, header should be white
    if (location.pathname !== '/') {
      setScrolled(true);
      return;
    }

    // On the homepage, header becomes white after scrolling past 20px
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center">
              <img src="./media/logo.svg" alt="La Gentle Factory" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          {/* Navigation / Mega menu */}
          <nav className="flex-1">
            {/* Desktop nav */}
            <ul className={`hidden md:flex items-center justify-center gap-8 ${scrolled ? 'text-[#293279]' : 'text-white'}`}>
              <li className="relative">
                <div
                  onMouseEnter={() => {
                    if (closeTimer.current) {
                      window.clearTimeout(closeTimer.current);
                      closeTimer.current = null;
                    }
                    setMegaOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = window.setTimeout(() => {
                      setMegaOpen(false);
                      closeTimer.current = null;
                    }, 150);
                  }}
                  className="inline-flex items-center"
                >
                  <button className="font-semibold">Notre offre</button>
                </div>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%-20px)] w-[940px] rounded-lg shadow-lg transform transition-all duration-150 ${megaOpen ? 'opacity-100 pointer-events-auto translate-y-12' : 'opacity-0 pointer-events-none -translate-y-2'
                    }`}
                  onMouseEnter={() => {
                    if (closeTimer.current) {
                      window.clearTimeout(closeTimer.current);
                      closeTimer.current = null;
                    }
                    setMegaOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = window.setTimeout(() => {
                      setMegaOpen(false);
                      closeTimer.current = null;
                    }, 150);
                  }}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div className="p-6 grid grid-cols-4 gap-6 text-[#293279] text-sm">
                    <div>
                      <h4 className="font-bold mb-2 uppercase">Faire fabriquer vos vêtements en France</h4>
                      <ul className="space-y-1">
                        <li>
                          <Link to="/marques-createurs" className="hover:underline">Pour les marques &amp; créateurs</Link>
                        </li>
                        <li>
                          <Link to="/entreprises" className="hover:underline">Pour les entreprises</Link>
                        </li>
                        <li>
                          <Link to="/boutiques" className="hover:underline">Pour les boutiques &amp; concept-stores</Link>
                        </li>
                        <li>
                          <Link to="/institutions" className="hover:underline">Pour les institutions &amp; clubs</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 uppercase"><Link to="/nos-solutions">Nos solutions</Link></h4>
                      <ul className="space-y-1">
                        <li>
                          <Link to="/nos-solutions/pret-a-personnaliser" className="hover:underline">Prêt-à-personnaliser</Link>
                        </li>
                        <li><Link to="/nos-solutions/semi-sur-mesure" className="hover:underline">Semi-sur-mesure</Link></li>
                        <li><Link to="/nos-solutions/co-creation-complete" className="hover:underline">Co-création complète</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 uppercase"><Link to="/fabrication">Fabrication &amp; savoir-faire</Link></h4>
                      <ul className="space-y-1">
                        <li><Link to="/nos-ateliers" className="hover:underline">Nos ateliers en France</Link></li>
                        <li><Link to="/nos-matieres" className="hover:underline">Nos matières (bio, recyclé, technique)</Link></li>
                        <li><Link to="/nos-engagements" className="hover:underline">Nos engagements responsables</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 uppercase">Réalisations</h4>
                      <ul className="space-y-1">
                        <li>Études de cas (avant/après + photos)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* Blog & Conseils dropdown */}
              <li className="relative">
                <div
                  onMouseEnter={() => {
                    if (blogCloseTimer.current) {
                      window.clearTimeout(blogCloseTimer.current);
                      blogCloseTimer.current = null;
                    }
                    setBlogOpen(true);
                  }}
                  onMouseLeave={() => {
                    blogCloseTimer.current = window.setTimeout(() => {
                      setBlogOpen(false);
                      blogCloseTimer.current = null;
                    }, 150);
                  }}
                  className="inline-flex items-center"
                >
                  <button className="font-semibold">Blog &amp; Conseils</button>
                </div>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%-20px)] w-64 rounded-lg shadow-lg transform transition-all duration-150 ${blogOpen ? 'opacity-100 pointer-events-auto translate-y-12' : 'opacity-0 pointer-events-none -translate-y-2'
                    }`}
                  onMouseEnter={() => {
                    if (blogCloseTimer.current) {
                      window.clearTimeout(blogCloseTimer.current);
                      blogCloseTimer.current = null;
                    }
                    setBlogOpen(true);
                  }}
                  onMouseLeave={() => {
                    blogCloseTimer.current = window.setTimeout(() => {
                      setBlogOpen(false);
                      blogCloseTimer.current = null;
                    }, 150);
                  }}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div className="p-4 text-[#293279] text-sm">
                    <ul className="space-y-2">
                      <li>Comment faire fabriquer en France ?</li>
                      <li>Lancer sa marque : les erreurs à éviter</li>
                      <li>Textile entreprise : comment choisir ?</li>
                      <li>Guides pratiques</li>
                    </ul>
                  </div>
                </div>
              </li>

            </ul>

            {/* Mobile: burger */}
            <div className="md:hidden flex items-center justify-center">
              <button
                aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen(prev => {
                    const next = !prev;
                    if (next) {
                      setMegaOpen(true);
                      setBlogOpen(false);
                    } else {
                      setMegaOpen(false);
                      setBlogOpen(false);
                    }
                    return next;
                  });
                }}
                className={`p-2 rounded-md ${scrolled ? 'text-[#293279]' : 'text-white'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* CTA Button (hidden on mobile when burger is visible) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-block bg-[#96101C] hover:bg-[#7a0e16] text-white px-5 py-3 rounded-full font-semibold shadow-sm"
              aria-label="Demander un devis"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </header>

      {/* Mobile full-screen dialog */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-white text-[#293279]" role="dialog" aria-modal="true">
          <div className="relative h-full overflow-auto">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
              className="absolute top-4 right-4 p-3 text-[#293279] rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="pt-20 px-6 pb-8">
              <nav>
                <ul className="space-y-6">
                  <li>
                    <button
                      className="w-full text-left text-xl font-semibold"
                      onClick={() => setMegaOpen(prev => !prev)}
                      aria-expanded={megaOpen}
                    >
                      Notre offre
                    </button>

                    {megaOpen && (
                      <div className="mt-3 pl-3 text-base space-y-4">
                        <div>
                          <h5 className="font-bold uppercase">Faire fabriquer vos vêtements en France</h5>
                          <ul className="mt-2 space-y-1">
                            <li><Link to="/marques-createurs" className="hover:underline">Pour les marques &amp; créateurs</Link></li>
                            <li><Link to="/entreprises" className="hover:underline">Pour les entreprises</Link></li>
                            <li><Link to="/boutiques" className="hover:underline">Pour les boutiques &amp; concept-stores</Link></li>
                            <li><Link to="/institutions" className="hover:underline">Pour les institutions &amp; clubs</Link></li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-bold uppercase hover:cursor-pointer"><Link to="/nos-solutions">Nos solutions</Link></h5>
                          <ul className="mt-2 space-y-1">
                            <li><Link to="/nos-solutions/pret-a-personnaliser" className="hover:underline">Prêt-à-personnaliser</Link></li>
                            <li><Link to="/nos-solutions/semi-sur-mesure" className="hover:underline">Semi-sur-mesure</Link></li>
                            <li><Link to="/nos-solutions/co-creation-complete" className="hover:underline">Co-création complète</Link></li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-bold uppercase"><Link to="/fabrication">Fabrication &amp; savoir-faire</Link></h5>
                          <ul className="mt-2 space-y-1">
                            <li><Link to="/nos-ateliers" className="hover:underline">Nos ateliers en France</Link></li>
                            <li><Link to="/nos-matieres" className="hover:underline">Nos matières (bio, recyclé, technique)</Link></li>
                            <li><Link to="/nos-engagements" className="hover:underline">Nos engagements responsables</Link></li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-bold uppercase">Réalisations</h5>
                          <ul className="mt-2 space-y-1">
                            <li>Études de cas (avant/après + photos)</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>

                  <li>
                    <button
                      className="w-full text-left text-lg font-semibold"
                      onClick={() => setBlogOpen(prev => !prev)}
                      aria-expanded={blogOpen}
                    >
                      Blog &amp; Conseils
                    </button>

                    {blogOpen && (
                      <div className="mt-3 pl-3 text-base space-y-2">
                        <ul className="space-y-1">
                          <li>Comment faire fabriquer en France ?</li>
                          <li>Lancer sa marque : les erreurs à éviter</li>
                          <li>Textile entreprise : comment choisir ?</li>
                          <li>Guides pratiques</li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li>
                    <a href="#contact" className="inline-block bg-[#96101C] text-white px-5 py-3 rounded-full font-semibold">
                      Demander un devis
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
