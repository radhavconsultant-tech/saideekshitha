import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Stethoscope, CheckCircle, Clock, Shield, 
  Heart, ArrowRight, MapPin
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

const ICUAmbulancePage = () => {
  const features = [
    'Advanced Cardiac Monitor with 12-Lead ECG',
    'Portable Defibrillator/AED',
    'Mechanical Ventilator',
    'Multi-parameter Patient Monitor',
    'Oxygen Supply System with Flow Meters',
    'Suction Apparatus',
    'IV Infusion Pumps',
    'Syringe Pumps',
    'Emergency Medications & Drugs',
    'Spine Board & Cervical Collar',
    'Portable Nebulizer',
    'Glucometer & Diagnostic Kits'
  ];

  const faqs = [
    {
      question: 'What is an ICU Ambulance?',
      answer: 'An ICU (Intensive Care Unit) Ambulance is a mobile intensive care unit equipped with advanced life support equipment similar to a hospital ICU. It includes ventilators, cardiac monitors, defibrillators, and other critical care equipment to provide continuous medical support during patient transport.'
    },
    {
      question: 'When do I need an ICU Ambulance?',
      answer: 'You need an ICU Ambulance for critical patients requiring continuous monitoring and advanced life support during transport. This includes heart attack patients, stroke victims, severe trauma cases, post-surgery patients, patients on ventilator support, and those requiring inter-hospital transfer with ICU care.'
    },
    {
      question: 'How fast can your ICU Ambulance reach me in Hyderabad?',
      answer: 'Our ICU ambulances are strategically located across Hyderabad. We typically reach any location in Hyderabad within 15-20 minutes. For areas like LB Nagar, Dilsukhnagar, and Uppal, our response time is even faster.'
    },
    {
      question: 'What staff accompanies the ICU Ambulance?',
      answer: 'Our ICU ambulances are staffed with certified paramedics trained in Advanced Cardiac Life Support (ACLS), emergency nurses, and experienced drivers trained in emergency driving protocols. For critical cases, we can also arrange for a doctor to accompany the patient.'
    },
    {
      question: 'What is the cost of ICU Ambulance service in Hyderabad?',
      answer: 'ICU Ambulance service cost depends on the distance, duration, and equipment required. We offer transparent pricing with no hidden charges. For exact pricing, please call us at 9666069108. We provide affordable rates for emergency and planned transfers.'
    }
  ];

  return (
    <>
      <SEOHead
        title="ICU Ambulance Service in Hyderabad | Advanced Life Support Ambulance 24/7"
        description="Best ICU Ambulance Service in Hyderabad. Advanced life support ambulance with ventilator, cardiac monitor, defibrillator. 24/7 emergency service. Call 9666069108 for fastest ICU ambulance."
        keywords="ICU ambulance hyderabad, advanced life support ambulance, mobile ICU hyderabad, critical care ambulance, ICU ambulance service near me, emergency ICU ambulance"
        canonicalUrl="https://srisaideekshithaambulance.com/icu-ambulance-hyderabad"
        serviceName="ICU Ambulance Service"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-900 to-red-700" data-testid="icu-hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                ADVANCED LIFE SUPPORT
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                ICU AMBULANCE SERVICE<br />
                <span className="text-yellow-400">IN HYDERABAD</span>
              </h1>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                Sri Sai Deekshitha provides the best ICU Ambulance service in Hyderabad with 
                advanced life support equipment, trained paramedics, and 24/7 availability. 
                Our mobile ICU ambulances are equipped to handle all critical care emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9666069108">
                  <Button className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-10 rounded-full shadow-xl emergency-pulse">
                    <Phone className="w-6 h-6 mr-3" />
                    CALL 9666069108
                  </Button>
                </a>
                <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg h-16 px-10 rounded-full"
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
                alt="ICU Ambulance Equipment - Ventilator and Cardiac Monitor"
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
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Service', desc: 'Round the clock' },
              { icon: <Shield className="w-6 h-6" />, title: 'Certified Team', desc: 'ACLS trained' },
              { icon: <Stethoscope className="w-6 h-6" />, title: 'Full ICU Setup', desc: 'Mobile ICU' },
              { icon: <Heart className="w-6 h-6" />, title: '15 Min Response', desc: 'Fastest in Hyderabad' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
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
      <section className="py-16 md:py-24 bg-slate-50" data-testid="icu-content">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
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
                  BEST ICU AMBULANCE SERVICE IN HYDERABAD
                </h2>
                
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    <strong>Sri Sai Deekshitha Ambulance Service</strong> provides the most advanced 
                    <strong> ICU Ambulance service in Hyderabad</strong>. Our Intensive Care Unit 
                    ambulances are designed to provide hospital-grade critical care during patient 
                    transport, ensuring continuous monitoring and life support throughout the journey.
                  </p>
                  
                  <p>
                    Our <strong>ICU ambulances in Hyderabad</strong> are equipped with the latest 
                    medical technology including ventilators, cardiac monitors, defibrillators, and 
                    all essential emergency medications. This mobile ICU setup allows our trained 
                    paramedics to provide advanced life support (ALS) care identical to what patients 
                    receive in a hospital ICU.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    When Do You Need an ICU Ambulance?
                  </h3>
                  <ul className="space-y-2">
                    <li><strong>Heart Attack (Myocardial Infarction)</strong> - Patients experiencing cardiac emergencies</li>
                    <li><strong>Stroke</strong> - Brain stroke patients requiring immediate care</li>
                    <li><strong>Severe Trauma</strong> - Accident victims with multiple injuries</li>
                    <li><strong>Respiratory Failure</strong> - Patients needing ventilator support</li>
                    <li><strong>Post-Surgery Transfer</strong> - Critical patients moving between hospitals</li>
                    <li><strong>Sepsis & Shock</strong> - Patients in critical condition</li>
                    <li><strong>Multi-Organ Failure</strong> - Patients requiring intensive monitoring</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Our ICU Ambulance Coverage in Hyderabad
                  </h3>
                  <p>
                    Our ICU ambulances serve all areas of Hyderabad including Secunderabad, Kukatpally, 
                    Gachibowli, Madhapur, LB Nagar, Uppal, Mehdipatnam, Dilsukhnagar, Ameerpet, Kondapur, 
                    Hitech City, Banjara Hills, Jubilee Hills, and all other localities. We also provide 
                    inter-city ICU ambulance transfer from Hyderabad to any city in India.
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
                  ICU AMBULANCE EQUIPMENT
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
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-red-600 py-4">
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
                {/* Emergency CTA Card */}
                <Card className="bg-red-600 text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      NEED ICU AMBULANCE?
                    </h3>
                    <p className="mb-6 text-red-100">
                      Call now for fastest ICU Ambulance service in Hyderabad
                    </p>
                    <a href="tel:9666069108" className="block">
                      <Button className="w-full bg-white text-red-600 hover:bg-slate-100 font-bold h-14 rounded-full text-lg mb-3">
                        <Phone className="w-5 h-5 mr-2" />
                        9666069108
                      </Button>
                    </a>
                    <a href="tel:9948386178" className="block">
                      <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold h-12 rounded-full">
                        9948386178
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Other Services */}
                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      OTHER SERVICES
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Ventilator Ambulance', link: '/ventilator-ambulance-hyderabad' },
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

                {/* Service Areas */}
                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      SERVICE AREAS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['LB Nagar', 'Kukatpally', 'Gachibowli', 'Madhapur', 'Secunderabad', 'Uppal'].map((area, index) => (
                        <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                          {area}
                        </span>
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
      <section className="py-16 md:py-20 bg-slate-900" data-testid="icu-cta">
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
              BOOK ICU AMBULANCE IN HYDERABAD
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Available 24/7 for emergency and planned patient transfers. 
              Fastest response time guaranteed.
            </p>
            <a href="tel:9666069108">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-16 px-12 rounded-full shadow-xl emergency-pulse">
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

export default ICUAmbulancePage;
