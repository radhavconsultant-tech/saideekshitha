import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Heart, CheckCircle, Clock, Shield, 
  Wind, ArrowRight
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

const OxygenAmbulancePage = () => {
  const features = [
    'Jumbo Oxygen Cylinders (46.7L)',
    'High-Flow Oxygen Delivery System',
    'Oxygen Concentrator',
    'Venturi Masks & Nasal Cannula',
    'Non-Rebreather Masks',
    'Pulse Oximeter (SpO2 Monitor)',
    'Nebulizer Machine',
    'Suction Apparatus',
    'Basic Life Support Equipment',
    'Emergency Resuscitation Kit',
    'Trained Paramedics',
    'Backup Oxygen Supply'
  ];

  const faqs = [
    {
      question: 'What is an Oxygen Ambulance?',
      answer: 'An Oxygen Ambulance is an emergency medical vehicle equipped with oxygen supply systems including jumbo oxygen cylinders, oxygen concentrators, and high-flow delivery devices. It is designed for patients who need supplemental oxygen during transport.'
    },
    {
      question: 'When do I need an Oxygen Ambulance?',
      answer: 'You need an oxygen ambulance for patients with breathing difficulties, COVID-19 patients, COPD patients, pneumonia patients, heart failure patients with respiratory distress, and anyone requiring continuous oxygen supply during transport.'
    },
    {
      question: 'How much oxygen supply does your ambulance carry?',
      answer: 'Our oxygen ambulances carry jumbo oxygen cylinders (46.7L) with backup supply sufficient for long-distance travel. We also have oxygen concentrators for continuous supply. This ensures uninterrupted oxygen delivery throughout the journey.'
    },
    {
      question: 'Is oxygen ambulance available for home oxygen setup?',
      answer: 'Yes, apart from ambulance transport, we can help arrange home oxygen supply and equipment. Our team can guide you on oxygen cylinder rental and concentrator options for home care.'
    },
    {
      question: 'What is the cost of oxygen ambulance in Hyderabad?',
      answer: 'Oxygen ambulance service charges depend on distance and oxygen requirements. We offer affordable and transparent pricing. Call 9666069108 for exact rates based on your specific needs.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Oxygen Ambulance Service in Hyderabad | 24/7 Emergency Oxygen Ambulance"
        description="Best Oxygen Ambulance Service in Hyderabad with jumbo oxygen cylinders. 24/7 emergency oxygen ambulance for COVID patients, COPD, respiratory distress. Call 9666069108."
        keywords="oxygen ambulance hyderabad, oxygen ambulance service near me, emergency oxygen ambulance, oxygen cylinder ambulance, COVID ambulance hyderabad"
        canonicalUrl="https://srisaideekshithaambulance.com/oxygen-ambulance-hyderabad"
        serviceName="Oxygen Ambulance Service"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-800 to-green-600" data-testid="oxygen-hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                OXYGEN SUPPORT
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                OXYGEN AMBULANCE<br />
                <span className="text-yellow-400">IN HYDERABAD</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Sri Sai Deekshitha provides 24/7 oxygen ambulance service in Hyderabad with 
                jumbo oxygen cylinders and high-flow oxygen delivery systems. Ideal for patients 
                with breathing difficulties, COVID-19 patients, and respiratory emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9666069108">
                  <Button className="bg-white text-green-700 hover:bg-slate-100 font-bold text-lg h-16 px-10 rounded-full shadow-xl emergency-pulse">
                    <Phone className="w-6 h-6 mr-3" />
                    CALL 9666069108
                  </Button>
                </a>
                <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold text-lg h-16 px-10 rounded-full"
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
                alt="Oxygen Ambulance Equipment - Oxygen Cylinder and Medical Supplies"
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
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Available', desc: 'Round the clock' },
              { icon: <Wind className="w-6 h-6" />, title: 'Jumbo O2 Cylinders', desc: '46.7L capacity' },
              { icon: <Shield className="w-6 h-6" />, title: 'Trained Staff', desc: 'Certified paramedics' },
              { icon: <Heart className="w-6 h-6" />, title: 'Fast Response', desc: '15-20 minutes' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
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
      <section className="py-16 md:py-24 bg-slate-50" data-testid="oxygen-content">
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
                  OXYGEN AMBULANCE SERVICE IN HYDERABAD
                </h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    <strong>Sri Sai Deekshitha Ambulance Service</strong> provides reliable 
                    <strong> Oxygen Ambulance service in Hyderabad</strong> for patients requiring 
                    supplemental oxygen during medical transport. Our oxygen ambulances are equipped 
                    with jumbo oxygen cylinders and high-flow delivery systems.
                  </p>
                  
                  <p>
                    Our <strong>oxygen ambulances</strong> are especially crucial for COVID-19 patients, 
                    COPD patients, pneumonia cases, and anyone experiencing respiratory distress. 
                    We ensure continuous oxygen supply throughout the journey with backup cylinders 
                    for uninterrupted care.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Who Needs Oxygen Ambulance?
                  </h3>
                  <ul className="space-y-2">
                    <li><strong>COVID-19 Patients</strong> - Patients with low oxygen saturation</li>
                    <li><strong>COPD Patients</strong> - Chronic obstructive pulmonary disease</li>
                    <li><strong>Pneumonia Cases</strong> - Severe lung infections</li>
                    <li><strong>Heart Failure Patients</strong> - With respiratory distress</li>
                    <li><strong>Asthma Emergencies</strong> - Severe asthma attacks</li>
                    <li><strong>Post-Surgery Patients</strong> - Requiring oxygen support</li>
                    <li><strong>Elderly Patients</strong> - With breathing difficulties</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Oxygen Ambulance Coverage in Hyderabad
                  </h3>
                  <p>
                    Our oxygen ambulances cover all areas of Hyderabad including LB Nagar, Kukatpally, 
                    Gachibowli, Madhapur, Secunderabad, Uppal, Dilsukhnagar, Mehdipatnam, and surrounding 
                    regions. We also provide inter-city oxygen ambulance services.
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
                  OXYGEN AMBULANCE EQUIPMENT
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
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-green-600 py-4">
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
                <Card className="bg-green-600 text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      BOOK OXYGEN AMBULANCE
                    </h3>
                    <p className="mb-6 text-green-100">
                      24/7 Oxygen Ambulance Service in Hyderabad
                    </p>
                    <a href="tel:9666069108" className="block">
                      <Button className="w-full bg-white text-green-600 hover:bg-slate-100 font-bold h-14 rounded-full text-lg mb-3">
                        <Phone className="w-5 h-5 mr-2" />
                        9666069108
                      </Button>
                    </a>
                    <a href="tel:9948386178" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold h-12 rounded-full">
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
                        { name: 'Ventilator Ambulance', link: '/ventilator-ambulance-hyderabad' },
                        { name: 'Dead Body Freezer Box', link: '/dead-body-freezer-box-hyderabad' },
                        { name: 'All Services', link: '/ambulance-services' }
                      ].map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
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
              NEED OXYGEN AMBULANCE NOW?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Available 24/7 with jumbo oxygen cylinders
            </p>
            <a href="tel:9666069108">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl">
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

export default OxygenAmbulancePage;
