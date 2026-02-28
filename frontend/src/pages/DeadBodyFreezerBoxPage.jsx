import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Snowflake, CheckCircle, Clock, Shield, 
  Heart, ArrowRight, FileText
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import SEOHead from '../components/SEOHead';

const DeadBodyFreezerBoxPage = () => {
  const services = [
    'Temperature-Controlled Freezer Box',
    'Mortuary Van/Hearse Service',
    'Body Preservation',
    'Embalming Services',
    'Death Certificate Assistance',
    'Hospital Release Coordination',
    'Interstate Body Transport',
    'Airport Coordination for Repatriation',
    'Cremation/Burial Coordination',
    'Documentation Support',
    'Religious Rites Assistance',
    '24/7 Availability'
  ];

  const faqs = [
    {
      question: 'What is a Dead Body Freezer Box?',
      answer: 'A Dead Body Freezer Box is a temperature-controlled container used to preserve the deceased body during transport or while awaiting final rites. It maintains low temperatures to prevent decomposition, especially important for long-distance transport or when waiting for family members.'
    },
    {
      question: 'How long can a body be preserved in a freezer box?',
      answer: 'With proper temperature control (typically -20°C to -10°C), a body can be preserved for several days in a freezer box. For longer preservation, embalming services can be arranged. Our team will guide you based on your specific requirements.'
    },
    {
      question: 'Do you provide interstate dead body transport?',
      answer: 'Yes, we provide dead body transport services from Hyderabad to any location in India. We handle all necessary documentation, permits, and coordination required for interstate transport. Our vehicles are equipped for long-distance travel.'
    },
    {
      question: 'What documents are needed for body transport?',
      answer: 'Required documents include Death Certificate, Hospital Release Certificate, and ID proof of the deceased and family members. For interstate transport, additional police NOC may be required. We assist with all documentation requirements.'
    },
    {
      question: 'What is the cost of dead body freezer box service?',
      answer: 'Charges vary based on distance, duration, and services required. We offer transparent pricing with no hidden costs. Call us at 9666069108 for exact pricing based on your specific requirements.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Dead Body Freezer Box in Hyderabad | Mortuary Ambulance Service 24/7"
        description="Dead Body Freezer Box Service in Hyderabad. Mortuary van, body preservation, interstate transport, documentation support. 24/7 service with dignity and respect. Call 9666069108."
        keywords="dead body freezer box hyderabad, mortuary ambulance hyderabad, dead body transport, hearse service hyderabad, mortuary van, body preservation service"
        canonicalUrl="https://srisaideekshithaambulance.com/dead-body-freezer-box-hyderabad"
        serviceName="Dead Body Freezer Box Service"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-700" data-testid="freezer-hero">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              MORTUARY SERVICES
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              DEAD BODY FREEZER BOX<br />
              <span className="text-blue-400">SERVICE IN HYDERABAD</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Sri Sai Deekshitha provides dignified and respectful mortuary services in Hyderabad. 
              Our dead body freezer box service includes temperature-controlled transport, 
              body preservation, documentation support, and interstate transfer facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9666069108">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg h-16 px-10 rounded-full shadow-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  CALL 9666069108
                </Button>
              </a>
              <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg h-16 px-10 rounded-full"
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
              { icon: <Snowflake className="w-6 h-6" />, title: 'Freezer Box', desc: 'Temperature controlled' },
              { icon: <FileText className="w-6 h-6" />, title: 'Documentation', desc: 'Complete support' },
              { icon: <Heart className="w-6 h-6" />, title: 'Dignified Service', desc: 'With respect' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
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
      <section className="py-16 md:py-24 bg-slate-50" data-testid="freezer-content">
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
                  DEAD BODY FREEZER BOX SERVICE IN HYDERABAD
                </h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    <strong>Sri Sai Deekshitha Ambulance Service</strong> provides compassionate and 
                    dignified <strong>dead body freezer box service in Hyderabad</strong>. We understand 
                    the emotional difficulty of losing a loved one, and our team handles every case 
                    with utmost respect and sensitivity.
                  </p>
                  
                  <p>
                    Our <strong>mortuary ambulance service</strong> includes temperature-controlled 
                    freezer boxes that preserve the body in optimal conditions. This is especially 
                    important when family members need time to arrive from distant places or when 
                    arranging interstate transport.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Our Mortuary Services Include
                  </h3>
                  <ul className="space-y-2">
                    <li><strong>Freezer Box Transport</strong> - Temperature-controlled body transport</li>
                    <li><strong>Body Preservation</strong> - Professional preservation services</li>
                    <li><strong>Embalming</strong> - Long-term preservation when required</li>
                    <li><strong>Interstate Transport</strong> - Body transport to any Indian city</li>
                    <li><strong>Airport Coordination</strong> - For international repatriation</li>
                    <li><strong>Documentation</strong> - Death certificate and permit assistance</li>
                    <li><strong>Hospital Coordination</strong> - Release process assistance</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Service Areas in Hyderabad
                  </h3>
                  <p>
                    Our dead body freezer box service covers all areas of Hyderabad including all 
                    hospitals, mortuaries, and residential areas. We also provide interstate body 
                    transport from Hyderabad to any location in India with all necessary documentation.
                  </p>
                </div>
              </motion.div>

              {/* Services List */}
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
                  COMPLETE MORTUARY SERVICES
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ Section */}
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
                  FREQUENTLY ASKED QUESTIONS
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-xl px-6 border-none shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-600 py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-slate-800 text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      NEED ASSISTANCE?
                    </h3>
                    <p className="mb-6 text-slate-300">
                      24/7 Mortuary Service with Dignity
                    </p>
                    <a href="tel:9666069108" className="block">
                      <Button className="w-full bg-white text-slate-800 hover:bg-slate-100 font-bold h-14 rounded-full text-lg mb-3">
                        <Phone className="w-5 h-5 mr-2" />
                        9666069108
                      </Button>
                    </a>
                    <a href="tel:9948386178" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold h-12 rounded-full">
                        9948386178
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      AMBULANCE SERVICES
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
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
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
      <section className="py-16 md:py-20 bg-slate-900">
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
              WE ARE HERE TO HELP
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Compassionate service available 24/7. We handle everything with dignity and respect.
            </p>
            <a href="tel:9666069108">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW - 9666069108
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DeadBodyFreezerBoxPage;
