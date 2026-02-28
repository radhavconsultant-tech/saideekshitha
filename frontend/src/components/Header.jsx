import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/ambulance-services' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'ICU Ambulance', path: '/icu-ambulance-hyderabad' },
    { name: 'Ventilator Ambulance', path: '/ventilator-ambulance-hyderabad' },
    { name: 'Oxygen Ambulance', path: '/oxygen-ambulance-hyderabad' },
    { name: 'Dead Body Freezer Box', path: '/dead-body-freezer-box-hyderabad' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              LB Nagar, Beside Global Hospital, Hyderabad
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              24/7 Emergency Service
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9666069108" className="hover:text-red-400 transition-colors">
              <Phone className="w-4 h-4 inline mr-1" /> 9666069108
            </a>
            <span className="text-slate-500">|</span>
            <a href="tel:9948386178" className="hover:text-red-400 transition-colors">
              9948386178
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-slate-100'
            : 'bg-white border-slate-100'
        }`}
        data-testid="main-header"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
              <img 
                src="/logo.svg" 
                alt="Sri Sai Deekshitha Ambulance Service Logo" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    location.pathname === link.path ? 'text-red-600' : 'text-slate-700'
                  }`}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <span className="text-sm font-medium text-slate-700 cursor-pointer hover:text-red-600 transition-colors">
                  Our Services
                </span>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 min-w-[220px]">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a href="tel:9666069108" className="hidden sm:block">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 h-12 rounded-full shadow-lg shadow-red-600/20 emergency-pulse"
                  data-testid="header-call-btn"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  CALL NOW
                </Button>
              </a>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" data-testid="mobile-menu-btn">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-3 pb-6 border-b">
                      <img 
                        src="/logo.svg" 
                        alt="Sri Sai Deekshitha Ambulance Service" 
                        className="h-12 w-auto"
                      />
                    </div>

                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium transition-colors ${
                            location.pathname === link.path ? 'text-red-600' : 'text-slate-700'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold text-slate-500 mb-3">Services</p>
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-slate-700 hover:text-red-600 transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </nav>

                    <div className="pt-6 border-t">
                      <a href="tel:9666069108" className="block">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 rounded-full text-lg">
                          <Phone className="w-5 h-5 mr-2" />
                          CALL NOW - 24/7
                        </Button>
                      </a>
                      <a
                        href="https://wa.me/919948386178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-3"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-full">
                          WhatsApp Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
