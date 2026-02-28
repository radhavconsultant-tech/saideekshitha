import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, MapPin, CheckCircle, Clock, Shield, 
  Heart, ArrowRight, Truck
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEOHead from '../components/SEOHead';

const locationData = {
  'kukatpally': {
    name: 'Kukatpally',
    landmarks: ['KPHB Colony', 'Kukatpally Housing Board', 'Allwyn Colony', 'Moosapet', 'Balanagar'],
    hospitals: ['Continental Hospital', 'Prathima Hospital', 'Sree Manju Hospital'],
    description: 'Kukatpally is one of the most densely populated areas in Hyderabad with numerous residential colonies and IT companies. Our ambulances are strategically positioned to serve the entire Kukatpally area including KPHB, Allwyn Colony, and surrounding localities.'
  },
  'gachibowli': {
    name: 'Gachibowli',
    landmarks: ['Financial District', 'DLF Cyber City', 'Wipro Circle', 'Biodiversity Junction', 'Nanakramguda'],
    hospitals: ['AIG Hospitals', 'Continental Hospital', 'Apollo Hospitals'],
    description: 'Gachibowli is Hyderabad\'s major IT hub and financial district. Our ambulances provide rapid emergency response to all IT parks, corporate offices, and residential areas in Gachibowli, Financial District, and Nanakramguda.'
  },
  'madhapur': {
    name: 'Madhapur',
    landmarks: ['Hitech City', 'Cyber Towers', 'HITEC City Metro', 'Durgam Cheruvu', 'Kavuri Hills'],
    hospitals: ['CARE Hospitals', 'MaxCure Hospital', 'Citizens Hospital'],
    description: 'Madhapur and Hitech City form the heart of Hyderabad\'s technology sector. Our emergency ambulance service covers all of Madhapur including IT corridors, tech parks, and residential complexes.'
  },
  'lb-nagar': {
    name: 'LB Nagar',
    landmarks: ['LB Nagar Circle', 'Sagar Ring Road', 'Kothapet', 'Nagole', 'Champapet'],
    hospitals: ['Global Hospital', 'Aware Global Hospital', 'Yashoda Hospital'],
    description: 'LB Nagar is our base location, allowing us to provide the fastest response times in this area. We cover all of LB Nagar including Kothapet, Nagole, Champapet, and areas along the Sagar Ring Road.'
  },
  'secunderabad': {
    name: 'Secunderabad',
    landmarks: ['Secunderabad Railway Station', 'Paradise Circle', 'Trimulgherry', 'Marredpally', 'Tarnaka'],
    hospitals: ['Yashoda Hospital', 'Krishna Institute', 'Care Hospital'],
    description: 'Secunderabad, the twin city of Hyderabad, is well-covered by our ambulance network. We serve all areas including Paradise, Trimulgherry, Marredpally, Begumpet, and surrounding localities.'
  },
  'uppal': {
    name: 'Uppal',
    landmarks: ['Uppal Stadium', 'Habsiguda', 'Nacharam', 'Mallapur', 'ECIL'],
    hospitals: ['Sree Manju Hospital', 'Prasad Hospital', 'Rainbow Hospital'],
    description: 'Our ambulance service covers the entire Uppal area including the industrial zones, residential areas, and IT corridors. Quick access to Habsiguda, Nacharam, ECIL, and Medipally.'
  }
};

const LocationPage = () => {
  const routeLocation = useLocation();
  const pathname = routeLocation.pathname;
  // Extract location from URL like /ambulance-service-kukatpally -> kukatpally
  const location = pathname.replace('/ambulance-service-', '');
  const data = locationData[location] || locationData['kukatpally'];

  const services = [
    'ICU Ambulance Service',
    'Ventilator Ambulance',
    'Oxygen Ambulance',
    'Cardiac Ambulance',
    'Neonatal Ambulance',
    'Dead Body Freezer Box',
    'Patient Transfer',
    'Emergency Response'
  ];

  return (
    <>
      <SEOHead
        title={`Ambulance Service in ${data.name} | 24/7 Emergency Ambulance ${data.name} Hyderabad`}
        description={`24/7 Emergency Ambulance Service in ${data.name}, Hyderabad. ICU Ambulance, Ventilator Ambulance, Oxygen Ambulance available. Fastest response time in ${data.name}. Call 9666606910.`}
        keywords={`ambulance service ${data.name.toLowerCase()}, emergency ambulance ${data.name.toLowerCase()}, ICU ambulance ${data.name.toLowerCase()}, 24 hour ambulance ${data.name.toLowerCase()} hyderabad`}
        canonicalUrl={`https://srisaideekshithaambulance.com/ambulance-service-${location}`}
        areaName={data.name}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-700" data-testid="location-hero">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              {data.name.toUpperCase()}, HYDERABAD
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              AMBULANCE SERVICE IN<br />
              <span className="text-yellow-400">{data.name.toUpperCase()}</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Sri Sai Deekshitha provides 24/7 emergency ambulance service in {data.name} and 
              surrounding areas. Our ambulances can reach you within 15-20 minutes with complete 
              ICU setup and trained paramedics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9666606910">
                <Button className="bg-white text-blue-700 hover:bg-slate-100 font-bold text-lg h-16 px-10 rounded-full shadow-xl emergency-pulse">
                  <Phone className="w-6 h-6 mr-3" />
                  CALL 9666606910
                </Button>
              </a>
              <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold text-lg h-16 px-10 rounded-full"
                >
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Service', desc: 'Always available' },
              { icon: <Truck className="w-6 h-6" />, title: '15 Min Response', desc: `In ${data.name}` },
              { icon: <Shield className="w-6 h-6" />, title: 'Certified Team', desc: 'ACLS trained' },
              { icon: <Heart className="w-6 h-6" />, title: 'Full ICU Setup', desc: 'Modern equipment' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="location-content">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  EMERGENCY AMBULANCE SERVICE IN {data.name.toUpperCase()}
                </h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    Looking for <strong>ambulance service in {data.name}</strong>? Sri Sai Deekshitha 
                    Ambulance Service provides 24/7 emergency ambulance service in {data.name} and 
                    all surrounding areas of Hyderabad.
                  </p>
                  
                  <p>{data.description}</p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Areas We Cover in {data.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 not-prose mb-6">
                    {data.landmarks.map((landmark, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {landmark}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Hospitals We Serve Near {data.name}
                  </h3>
                  <ul className="space-y-2">
                    {data.hospitals.map((hospital, index) => (
                      <li key={index}><strong>{hospital}</strong> - Quick ambulance access</li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Why Choose Us for Ambulance in {data.name}?
                  </h3>
                  <ul className="space-y-2">
                    <li><strong>Fastest Response Time</strong> - Reach within 15-20 minutes</li>
                    <li><strong>24/7 Availability</strong> - Service round the clock</li>
                    <li><strong>Trained Paramedics</strong> - ACLS/BLS certified staff</li>
                    <li><strong>Modern Equipment</strong> - Full ICU setup in ambulance</li>
                    <li><strong>Transparent Pricing</strong> - No hidden charges</li>
                  </ul>
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 
                  className="text-2xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  AMBULANCE SERVICES IN {data.name.toUpperCase()}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-red-600 text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      AMBULANCE IN {data.name.toUpperCase()}
                    </h3>
                    <p className="mb-6 text-red-100">
                      24/7 Emergency Service Available
                    </p>
                    <a href="tel:9666606910" className="block">
                      <Button className="w-full bg-white text-red-600 hover:bg-slate-100 font-bold h-14 rounded-full text-lg mb-3">
                        <Phone className="w-5 h-5 mr-2" />
                        9666606910
                      </Button>
                    </a>
                    <a href="tel:9948386178" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold h-12 rounded-full">
                        9948386178
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      OTHER AREAS
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(locationData)
                        .filter(([key]) => key !== location)
                        .slice(0, 5)
                        .map(([key, loc]) => (
                          <Link
                            key={key}
                            to={`/ambulance-service-${key}`}
                            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            <span className="font-medium">Ambulance in {loc.name}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      OUR SERVICES
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'ICU Ambulance', link: '/icu-ambulance-hyderabad' },
                        { name: 'Ventilator Ambulance', link: '/ventilator-ambulance-hyderabad' },
                        { name: 'Oxygen Ambulance', link: '/oxygen-ambulance-hyderabad' },
                        { name: 'All Services', link: '/ambulance-services' }
                      ].map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          <span className="font-medium">{service.name}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              NEED AMBULANCE IN {data.name.toUpperCase()}?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Fastest ambulance service in {data.name} - Available 24/7
            </p>
            <a href="tel:9666606910">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW - 9666606910
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
