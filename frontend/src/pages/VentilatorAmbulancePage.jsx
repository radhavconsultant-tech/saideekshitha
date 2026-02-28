import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Wind, CheckCircle, Clock, Shield, 
  Heart, ArrowRight
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

const VentilatorAmbulancePage = () => {
  const features = [
    'Portable Transport Ventilator',
    'BiPAP/CPAP Machines',
    'High-Flow Oxygen System',
    'Pulse Oximeter & SpO2 Monitor',
    'End-Tidal CO2 Monitor',
    'Airway Management Kit',
    'Suction Apparatus',
    'Cardiac Monitor',
    'Defibrillator',
    'Emergency Medications',
    'Trained Respiratory Therapist',
    'Oxygen Cylinders with Backup'
  ];

  const faqs = [
    {
      question: 'What is a Ventilator Ambulance?',
      answer: 'A Ventilator Ambulance is a specialized emergency vehicle equipped with portable ventilators and respiratory support equipment. It is designed for patients who cannot breathe on their own and require mechanical ventilation during transport.'
    },
    {
      question: 'Who needs a Ventilator Ambulance?',
      answer: 'Ventilator ambulances are needed for patients with respiratory failure, those recovering from surgeries requiring ventilator support, COVID-19 patients with severe respiratory distress, neuromuscular disease patients, and those being transferred between ICUs.'
    },
    {
      question: 'Do you have trained staff for ventilator management?',
      answer: 'Yes, our ventilator ambulances are staffed with certified respiratory therapists and paramedics trained in advanced airway management and ventilator operation. They can handle all types of respiratory emergencies during transport.'
    },
    {
      question: 'Can you do inter-city ventilator ambulance transfer?',
      answer: 'Yes, we provide ventilator ambulance services for inter-city patient transfers from Hyderabad to any city in India. Our ambulances are equipped for long-distance travel with adequate oxygen supply and backup equipment.'
    },
    {
      question: 'How much does ventilator ambulance service cost in Hyderabad?',
      answer: 'Ventilator ambulance charges vary based on distance and duration. We offer competitive and transparent pricing. Please call us at 9666606910 for exact pricing based on your requirements.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Ventilator Ambulance Service in Hyderabad | ICU Ventilator Ambulance 24/7"
        description="Best Ventilator Ambulance Service in Hyderabad. Portable ventilator ambulance with BiPAP/CPAP support. 24/7 emergency service for respiratory patients. Call 9666606910."
        keywords="ventilator ambulance hyderabad, ICU ventilator ambulance, respiratory ambulance, portable ventilator ambulance, ventilator ambulance service near me"
        canonicalUrl="https://srisaideekshithaambulance.com/ventilator-ambulance-hyderabad"
        serviceName="Ventilator Ambulance Service"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-700" data-testid="ventilator-hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                RESPIRATORY SUPPORT
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                VENTILATOR AMBULANCE<br />
                <span className="text-yellow-400">IN HYDERABAD</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Sri Sai Deekshitha provides specialized ventilator ambulance service in Hyderabad 
                for patients requiring respiratory support. Our ambulances are equipped with 
                portable ventilators, BiPAP/CPAP machines, and staffed by trained respiratory therapists.
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1770836037704-44bd8c7b6978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwdmVudGlsYXRvciUyMGhvc3BpdGFsJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwwfHx8fDE3NzIyNzY4NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Ventilator Ambulance Equipment - Portable Ventilator"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Service', desc: 'Always available' },
              { icon: <Wind className="w-6 h-6" />, title: 'Portable Ventilator', desc: 'Latest equipment' },
              { icon: <Shield className="w-6 h-6" />, title: 'RT Trained Staff', desc: 'Expert care' },
              { icon: <Heart className="w-6 h-6" />, title: 'Quick Response', desc: '15-20 minutes' }
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
      <section className="py-16 md:py-24 bg-slate-50" data-testid="ventilator-content">
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
                  VENTILATOR AMBULANCE SERVICE IN HYDERABAD
                </h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    <strong>Sri Sai Deekshitha Ambulance Service</strong> offers the best 
                    <strong> Ventilator Ambulance service in Hyderabad</strong>. Our specialized 
                    ambulances are designed for patients who require continuous respiratory support 
                    and mechanical ventilation during transport.
                  </p>
                  
                  <p>
                    Our <strong>ventilator ambulances</strong> are equipped with state-of-the-art 
                    portable transport ventilators, BiPAP and CPAP machines, high-flow oxygen 
                    systems, and complete airway management equipment. This ensures that patients 
                    receive uninterrupted respiratory support throughout their journey.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Who Needs Ventilator Ambulance?
                  </h3>
                  <ul className="space-y-2">
                    <li><strong>Respiratory Failure Patients</strong> - Those unable to breathe independently</li>
                    <li><strong>COVID-19 Patients</strong> - Severe cases requiring ventilator support</li>
                    <li><strong>Post-Surgery Patients</strong> - Recovering from major surgeries</li>
                    <li><strong>Neuromuscular Disease</strong> - Conditions affecting breathing muscles</li>
                    <li><strong>COPD Exacerbation</strong> - Chronic lung disease emergencies</li>
                    <li><strong>ICU to ICU Transfer</strong> - Inter-hospital critical care transfers</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Ventilator Ambulance Coverage Areas
                  </h3>
                  <p>
                    Our ventilator ambulances are available 24/7 across Hyderabad including LB Nagar, 
                    Kukatpally, Gachibowli, Madhapur, Secunderabad, Uppal, Mehdipatnam, Dilsukhnagar, 
                    and all other areas. We also provide long-distance ventilator ambulance services 
                    for inter-city patient transfers.
                  </p>
                </div>
              </motion.div>

              {/* Equipment List */}
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
                  VENTILATOR AMBULANCE EQUIPMENT
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
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
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-4">
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
                <Card className="bg-blue-700 text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      BOOK VENTILATOR AMBULANCE
                    </h3>
                    <p className="mb-6 text-blue-100">
                      24/7 Ventilator Ambulance Service in Hyderabad
                    </p>
                    <a href="tel:9666606910" className="block">
                      <Button className="w-full bg-white text-blue-700 hover:bg-slate-100 font-bold h-14 rounded-full text-lg mb-3">
                        <Phone className="w-5 h-5 mr-2" />
                        9666606910
                      </Button>
                    </a>
                    <a href="tel:9948386178" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold h-12 rounded-full">
                        9948386178
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      OTHER SERVICES
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'ICU Ambulance', link: '/icu-ambulance-hyderabad' },
                        { name: 'Oxygen Ambulance', link: '/oxygen-ambulance-hyderabad' },
                        { name: 'Dead Body Freezer Box', link: '/dead-body-freezer-box-hyderabad' },
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
              NEED VENTILATOR AMBULANCE NOW?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Available 24/7 with trained respiratory therapists
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

export default VentilatorAmbulancePage;
