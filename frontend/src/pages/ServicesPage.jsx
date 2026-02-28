import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Stethoscope, Wind, Heart, Baby, Snowflake, 
  Truck, ArrowRight, CheckCircle, Clock, Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEOHead from '../components/SEOHead';

const ServicesPage = () => {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: 'ICU Ambulance Service Hyderabad',
      slug: '/icu-ambulance-hyderabad',
      description: 'Our ICU ambulances are equipped with advanced life support systems including cardiac monitors, defibrillators, ventilators, and all emergency medications. Ideal for critical care patients requiring intensive monitoring during transport.',
      features: [
        'Cardiac Monitor with ECG',
        'Portable Defibrillator',
        'Oxygen Supply System',
        'IV Infusion Pumps',
        'Suction Machine',
        'Emergency Medications'
      ],
      color: 'bg-red-600'
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: 'Ventilator Ambulance Service Hyderabad',
      slug: '/ventilator-ambulance-hyderabad',
      description: 'Specialized ambulances with portable ventilators for patients requiring respiratory support. Our ventilator ambulances are staffed with trained respiratory therapists and paramedics experienced in ventilator management.',
      features: [
        'Portable Ventilator',
        'BiPAP/CPAP Support',
        'Oxygen Concentrator',
        'Pulse Oximeter',
        'Airway Management Kit',
        'Trained RT Staff'
      ],
      color: 'bg-blue-600'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Oxygen Ambulance Service Hyderabad',
      slug: '/oxygen-ambulance-hyderabad',
      description: 'Ambulances equipped with high-flow oxygen systems for patients with breathing difficulties, COVID-19 patients, and those requiring supplemental oxygen during transport. Available with jumbo oxygen cylinders.',
      features: [
        'Jumbo Oxygen Cylinders',
        'High-Flow Oxygen Delivery',
        'Nebulizer Support',
        'SpO2 Monitoring',
        'Emergency Resuscitation',
        'Trained Paramedics'
      ],
      color: 'bg-green-600'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Cardiac Ambulance Service Hyderabad',
      slug: '/ambulance-services',
      description: 'Specialized cardiac ambulances for heart attack patients and cardiac emergencies. Equipped with 12-lead ECG, cardiac drugs, and staffed with paramedics trained in Advanced Cardiac Life Support (ACLS).',
      features: [
        '12-Lead ECG Machine',
        'Cardiac Defibrillator',
        'Cardiac Emergency Drugs',
        'ACLS Trained Staff',
        'Direct Hospital Coordination',
        'Real-time ECG Transmission'
      ],
      color: 'bg-purple-600'
    },
    {
      icon: <Baby className="w-10 h-10" />,
      title: 'Neonatal Ambulance Service Hyderabad',
      slug: '/ambulance-services',
      description: 'Specially designed ambulances for newborn and infant emergency transport. Equipped with neonatal incubators, infant warmers, and pediatric resuscitation equipment.',
      features: [
        'Neonatal Incubator',
        'Infant Warmer',
        'Pediatric Ventilator',
        'Phototherapy Unit',
        'Neonatal Monitors',
        'NICU Trained Nurses'
      ],
      color: 'bg-pink-500'
    },
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: 'Dead Body Freezer Box Service Hyderabad',
      slug: '/dead-body-freezer-box-hyderabad',
      description: 'Dignified and respectful mortuary transport services with temperature-controlled freezer boxes. Available for local transport and interstate body transfer with all necessary documentation support.',
      features: [
        'Temperature-Controlled Box',
        'Embalming Services',
        'Documentation Support',
        'Interstate Transfer',
        'Airport Coordination',
        '24/7 Availability'
      ],
      color: 'bg-slate-600'
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Intercity Patient Transfer Hyderabad',
      slug: '/ambulance-services',
      description: 'Long-distance patient transfer services from Hyderabad to any city in India. Our ICU ambulances are equipped for extended journeys with all necessary medical support and trained staff.',
      features: [
        'Long Distance ICU Support',
        'Trained Medical Team',
        'Continuous Monitoring',
        'Comfortable Patient Care',
        'Direct Hospital to Hospital',
        'All India Coverage'
      ],
      color: 'bg-orange-500'
    }
  ];

  return (
    <>
      <SEOHead
        title="Ambulance Services in Hyderabad | ICU, Ventilator, Oxygen Ambulance - Sri Sai Deekshitha"
        description="Complete ambulance services in Hyderabad - ICU Ambulance, Ventilator Ambulance, Oxygen Ambulance, Cardiac Ambulance, Neonatal Ambulance, Dead Body Freezer Box. 24/7 emergency service. Call 9666606910."
        keywords="ambulance services hyderabad, ICU ambulance hyderabad, ventilator ambulance hyderabad, oxygen ambulance hyderabad, cardiac ambulance, neonatal ambulance, dead body freezer box hyderabad"
        canonicalUrl="https://srisaideekshithaambulance.com/ambulance-services"
        serviceName="Ambulance Service"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-900" data-testid="services-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              OUR SERVICES
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              AMBULANCE SERVICES<br />
              <span className="text-red-500">IN HYDERABAD</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Complete range of emergency ambulance services including ICU, Ventilator, Oxygen, Cardiac, 
              Neonatal ambulances and Dead Body Freezer Box services. All ambulances equipped with 
              modern medical equipment and staffed by certified paramedics.
            </p>
            <a href="tel:9666606910">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-14 px-10 rounded-full shadow-xl shadow-red-600/30 emergency-pulse">
                <Phone className="w-5 h-5 mr-2" />
                Book Ambulance Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="services-grid">
        <div className="container mx-auto px-4">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-white border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Icon Section */}
                      <div className={`${service.color} p-8 lg:p-12 flex flex-col justify-center items-center text-white lg:col-span-1`}>
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <p className="text-lg font-bold text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                          24/7 Available
                        </p>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6 md:p-8 lg:p-12 lg:col-span-4">
                        <h2 
                          className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                          style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a href="tel:9666606910">
                            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 h-12 rounded-full">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Now
                            </Button>
                          </a>
                          <Link to={service.slug}>
                            <Button variant="outline" className="border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-700 font-bold px-6 h-12 rounded-full">
                              Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-services">
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
              WHY CHOOSE OUR AMBULANCE SERVICES?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10" />,
                title: 'Fastest Response Time',
                desc: 'Our strategically located ambulances reach you within 15-20 minutes anywhere in Hyderabad.'
              },
              {
                icon: <Stethoscope className="w-10 h-10" />,
                title: 'Advanced Equipment',
                desc: 'All ambulances equipped with modern ICU equipment, ventilators, and life-saving devices.'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Certified Paramedics',
                desc: 'Trained and certified paramedics provide expert medical care during transport.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-50 border-none text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600" data-testid="services-cta">
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
              NEED EMERGENCY AMBULANCE SERVICE?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Available 24/7 across Hyderabad. Our team is ready to serve you in any medical emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9666606910">
                <Button className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  CALL 9666606910
                </Button>
              </a>
              <a href="https://wa.me/919948386178" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg h-16 px-12 rounded-full"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
