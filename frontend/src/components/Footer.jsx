import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export const Footer = () => {
  const services = [
    { name: 'ICU Ambulance', path: '/icu-ambulance-hyderabad' },
    { name: 'Ventilator Ambulance', path: '/ventilator-ambulance-hyderabad' },
    { name: 'Oxygen Ambulance', path: '/oxygen-ambulance-hyderabad' },
    { name: 'Dead Body Freezer Box', path: '/dead-body-freezer-box-hyderabad' },
    { name: 'Cardiac Ambulance', path: '/ambulance-services' },
    { name: 'Neonatal Ambulance', path: '/ambulance-services' },
  ];

  const areas = [
    { name: 'Miyapur', path: '/ambulance-service-miyapur' },
    { name: 'KPHB', path: '/ambulance-service-kphb' },
    { name: 'Kukatpally', path: '/ambulance-service-kukatpally' },
    { name: 'Ameerpet', path: '/ambulance-service-ameerpet' },
    { name: 'Dilsukhnagar', path: '/ambulance-service-dilsukhnagar' },
    { name: 'LB Nagar', path: '/ambulance-service-lb-nagar' },
    { name: 'Secunderabad', path: '/ambulance-service-secunderabad' },
    { name: 'HITEC City', path: '/ambulance-service-hitec-city' },
    { name: 'Madhapur', path: '/ambulance-service-madhapur' },
    { name: 'Gachibowli', path: '/ambulance-service-gachibowli' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Services', path: '/ambulance-services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      {/* Emergency Strip */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            24/7 EMERGENCY AMBULANCE SERVICE - CALL NOW:{' '}
            <a href="tel:9666606910" className="underline hover:no-underline">
              9666606910
            </a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.svg" 
                alt="Sri Sai Deekshitha Ambulance Service" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Hyderabad's most trusted 24/7 emergency ambulance service provider. Fast response, modern equipment, and certified paramedics.
            </p>
            <div className="space-y-3">
              <a href="tel:9666606910" className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors">
                <Phone className="w-5 h-5 text-red-500" />
                9666606910
              </a>
              <a href="tel:9948386178" className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors">
                <Phone className="w-5 h-5 text-red-500" />
                9948386178
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>LB Nagar, Beside Global Hospital, Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Service Areas
            </h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.path}>
                  <Link
                    to={area.path}
                    className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Ambulance in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="font-semibold">24/7 Available</span>
              </div>
              <p className="text-sm text-slate-400">
                Emergency services available round the clock, 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sri Sai Deekshitha Ambulance Service. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Serving Hyderabad with <Heart className="w-4 h-4 text-red-500" /> since 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
