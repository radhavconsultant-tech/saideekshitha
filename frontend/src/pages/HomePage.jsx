import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Clock, Shield, MapPin, Heart, Truck, 
  Stethoscope, Wind, Baby, Snowflake, Users,
  CheckCircle, Star, ArrowRight, ChevronDown
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
import Marquee from 'react-fast-marquee';

const HomePage = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'ICU Ambulance',
      description: 'Advanced life support ambulance with ICU facilities for critical care patients.',
      link: '/icu-ambulance-hyderabad',
      color: 'bg-red-500'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Ventilator Ambulance',
      description: 'Equipped with portable ventilators for patients requiring respiratory support.',
      link: '/ventilator-ambulance-hyderabad',
      color: 'bg-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Oxygen Ambulance',
      description: 'Ambulance with continuous oxygen supply for patients with breathing difficulties.',
      link: '/oxygen-ambulance-hyderabad',
      color: 'bg-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Cardiac Ambulance',
      description: 'Specialized ambulance with cardiac monitors and defibrillators.',
      link: '/ambulance-services',
      color: 'bg-purple-600'
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Neonatal Ambulance',
      description: 'Specially equipped for newborn and infant emergency transport.',
      link: '/ambulance-services',
      color: 'bg-pink-500'
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: 'Dead Body Freezer Box',
      description: 'Mortuary services with freezer box for dignified body transport.',
      link: '/dead-body-freezer-box-hyderabad',
      color: 'bg-slate-600'
    }
  ];

  const areas = [
    'Miyapur', 'JNTU', 'KPHB Colony', 'Kukatpally', 'Balanagar', 'Moosapet',
    'Erragadda', 'SR Nagar', 'Ameerpet', 'Punjagutta', 'Khairatabad',
    'Lakdi-ka-pul', 'Nampally', 'MG Bus Station', 'Malakpet', 'Dilsukhnagar',
    'Chaitanyapuri', 'LB Nagar', 'Nagole', 'Uppal', 'Habsiguda', 'Tarnaka',
    'Secunderabad', 'Paradise', 'Begumpet', 'Jubilee Hills', 'Madhapur',
    'HITEC City', 'Raidurg', 'Gachibowli', 'Kondapur', 'Manikonda'
  ];

  const trustBadges = [
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Available', desc: 'Round the clock service' },
    { icon: <Truck className="w-6 h-6" />, title: 'Fast Response', desc: '15-20 min arrival' },
    { icon: <Shield className="w-6 h-6" />, title: 'Certified Team', desc: 'Trained paramedics' },
    { icon: <Users className="w-6 h-6" />, title: '10+ Years', desc: 'Trusted service' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Kukatpally',
      text: 'Called at 2 AM for my father\'s emergency. Ambulance reached in 15 minutes. The paramedics were professional and caring. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Gachibowli',
      text: 'Best ambulance service in Hyderabad. Their ICU ambulance has all advanced equipment. They saved my mother\'s life during cardiac emergency.',
      rating: 5
    },
    {
      name: 'Mohammed Ali',
      location: 'LB Nagar',
      text: 'Used their ventilator ambulance for inter-city patient transfer. Very professional service and reasonable pricing.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How quickly can the ambulance reach me in Hyderabad?',
      answer: 'Our ambulances are strategically located across Hyderabad. In most areas, we can reach you within 15-20 minutes of your call. For emergency cases, our average response time is even faster.'
    },
    {
      question: 'What types of ambulances do you have?',
      answer: 'We offer ICU Ambulance, Ventilator Ambulance, Oxygen Ambulance, Cardiac Ambulance, Neonatal Ambulance, and Dead Body Freezer Box services. All our ambulances are equipped with modern medical equipment.'
    },
    {
      question: 'Are your ambulances available 24/7?',
      answer: 'Yes, Sri Sai Deekshitha Ambulance Service operates 24 hours a day, 7 days a week, 365 days a year. We are always ready to serve you in any emergency.'
    },
    {
      question: 'Do you provide inter-city ambulance service?',
      answer: 'Yes, we provide ambulance services for inter-city patient transfer from Hyderabad to any city in India. Our ICU ambulances are equipped for long-distance travel.'
    },
    {
      question: 'What areas in Hyderabad do you cover?',
      answer: 'We cover all areas of Hyderabad including Secunderabad, Kukatpally, Gachibowli, Madhapur, LB Nagar, Uppal, Mehdipatnam, Dilsukhnagar, and all other localities in Hyderabad and surrounding areas.'
    },
    {
      question: 'What is the cost of ambulance service?',
      answer: 'Our ambulance service charges depend on the type of ambulance and distance. We offer competitive and transparent pricing. Call us at 9666069108 for exact pricing based on your requirements.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Emergency Ambulance Service in Hyderabad | 24/7 ICU Ambulance - Sri Sai Deekshitha"
        description="Sri Sai Deekshitha offers 24/7 emergency ambulance service in Hyderabad. ICU Ambulance, Ventilator Ambulance, Oxygen Ambulance, Dead Body Freezer Box. Call 9666069108 for fastest response."
        keywords="emergency ambulance hyderabad, 24/7 ambulance service hyderabad, ICU ambulance hyderabad, ventilator ambulance hyderabad, ambulance service near me, dead body freezer box hyderabad"
        canonicalUrl="https://srisaideekshithaambulance.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center" data-testid="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1767990375666-8df94ab0f9e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjB2ZWhpY2xlJTIwYmx1ZSUyMGxpZ2h0c3xlbnwwfHx8fDE3NzIyNzY4Mzh8MA&ixlib=rb-4.1.0&q=85)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                HYDERABAD'S TRUSTED AMBULANCE SERVICE
              </span>
              
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                EMERGENCY<br />
                <span className="text-red-500">AMBULANCE SERVICE</span><br />
                IN HYDERABAD
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                24/7 Emergency Ambulance Service with ICU, Ventilator & Oxygen support. 
                <strong className="text-white"> Fastest response time in Hyderabad.</strong> Certified paramedics 
                and modern life-saving equipment. Available round the clock.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:9666069108">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-16 px-10 rounded-full shadow-xl shadow-red-600/30 emergency-pulse w-full sm:w-auto"
                    data-testid="hero-call-btn"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    CALL NOW - 9666069108
                  </Button>
                </a>
                <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg h-16 px-10 rounded-full w-full sm:w-auto"
                    data-testid="hero-whatsapp-btn"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-red-400 mb-2">{badge.icon}</div>
                    <p className="font-bold text-white text-sm">{badge.title}</p>
                    <p className="text-slate-400 text-xs">{badge.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="services-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              AMBULANCE SERVICES IN HYDERABAD
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete range of emergency ambulance services equipped with modern medical facilities and trained paramedics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <Card className="group h-full bg-white border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-red-600 font-semibold group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ambulance-services">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 h-14 rounded-full text-lg">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-choose-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                HYDERABAD'S MOST TRUSTED<br />
                <span className="text-red-600">AMBULANCE SERVICE</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sri Sai Deekshitha Ambulance Service has been serving Hyderabad for over 10 years. 
                Our commitment to saving lives with the fastest response time and best medical 
                equipment makes us the preferred choice for emergency medical transportation.
              </p>

              <div className="space-y-4">
                {[
                  'Fastest Response Time - Reach within 15-20 minutes',
                  'Modern ICU Ambulances with Life Support Equipment',
                  'Trained & Certified Paramedics on Every Trip',
                  'Transparent Pricing - No Hidden Charges',
                  '24/7 Availability - 365 Days a Year',
                  'GPS Tracked Ambulances for Real-time Updates'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a href="tel:9666069108">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-14 rounded-full text-lg shadow-lg shadow-red-600/20">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Emergency
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1770836037704-44bd8c7b6978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwdmVudGlsYXRvciUyMGhvc3BpdGFsJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwwfHx8fDE3NzIyNzY4NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="ICU Ambulance Equipment - Medical Ventilator and Monitors"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>10+</p>
                <p className="text-sm">Years of Service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve - Marquee */}
      <section className="py-12 bg-slate-900" data-testid="areas-marquee">
        <div className="container mx-auto px-4 mb-8">
          <h2 
            className="text-2xl md:text-3xl font-bold text-white text-center"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            AREAS WE SERVE IN HYDERABAD
          </h2>
        </div>
        <Marquee speed={40} gradient={false}>
          {areas.map((area, index) => (
            <span key={index} className="mx-6 text-lg text-slate-300 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              {area}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-24 bg-white" data-testid="areas-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              AMBULANCE SERVICE COVERAGE AREAS
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our ambulances cover all major areas across Hyderabad and Secunderabad with quick response times.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { name: 'Miyapur', link: '/ambulance-service-miyapur' },
              { name: 'KPHB Colony', link: '/ambulance-service-kphb' },
              { name: 'Kukatpally', link: '/ambulance-service-kukatpally' },
              { name: 'Ameerpet', link: '/ambulance-service-ameerpet' },
              { name: 'Dilsukhnagar', link: '/ambulance-service-dilsukhnagar' },
              { name: 'LB Nagar', link: '/ambulance-service-lb-nagar' },
              { name: 'Secunderabad', link: '/ambulance-service-secunderabad' },
              { name: 'HITEC City', link: '/ambulance-service-hitec-city' },
              { name: 'Madhapur', link: '/ambulance-service-madhapur' },
              { name: 'Gachibowli', link: '/ambulance-service-gachibowli' },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={area.link}
                  className="block bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white rounded-xl p-4 text-center font-medium transition-all duration-300 border border-slate-100 hover:border-blue-600 hover:shadow-lg"
                >
                  {area.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8">
            And many more areas across Hyderabad & Telangana
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              WHAT OUR CUSTOMERS SAY
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-l-4 border-l-blue-600 shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}, Hyderabad</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions about our emergency ambulance services in Hyderabad.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-red-600 py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              NEED EMERGENCY AMBULANCE?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Our ambulance can reach you within 15-20 minutes anywhere in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9666069108">
                <Button 
                  className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl"
                  data-testid="cta-call-btn"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  CALL 9666069108
                </Button>
              </a>
              <a href="tel:9948386178">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg h-16 px-12 rounded-full"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  CALL 9948386178
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
