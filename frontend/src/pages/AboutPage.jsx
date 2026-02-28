import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Clock, Shield, Target, Heart, Users, 
  Award, CheckCircle, Truck, Stethoscope, ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEOHead from '../components/SEOHead';

const AboutPage = () => {
  const values = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Response',
      description: 'Our strategically located ambulances ensure we reach you within 15-20 minutes in any emergency.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Life-Saving Care',
      description: 'Every second counts in an emergency. Our trained paramedics provide critical care during transit.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Modern equipment, sanitized vehicles, and strict safety protocols for every patient transport.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Compassionate Service',
      description: 'We understand the stress of medical emergencies and treat every family with empathy and care.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Service' },
    { number: '50,000+', label: 'Lives Served' },
    { number: '24/7', label: 'Availability' },
    { number: '15', label: 'Minutes Avg Response' }
  ];

  const equipment = [
    'Portable Ventilators',
    'Cardiac Monitors',
    'Defibrillators',
    'Oxygen Cylinders',
    'Suction Machines',
    'IV Infusion Pumps',
    'Spine Boards',
    'Nebulizers',
    'First Aid Supplies',
    'Emergency Medications'
  ];

  return (
    <>
      <SEOHead
        title="About Sri Sai Deekshitha Ambulance Service | Best Ambulance Provider Hyderabad"
        description="Learn about Sri Sai Deekshitha Ambulance Service - Hyderabad's trusted 24/7 emergency ambulance provider. 10+ years of experience, certified paramedics, modern ICU equipment."
        keywords="about sri sai deekshitha ambulance, best ambulance service hyderabad, 24 hours ambulance company hyderabad, ambulance service provider telangana"
        canonicalUrl="https://srisaideekshithaambulance.com/about-us"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-900" data-testid="about-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621445713722-d3f32fd876a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvciUyMG51cnNlJTIwcG9ydHJhaXQlMjB3aGl0ZSUyMGNvYXR8ZW58MHx8fHwxNzcyMjc2ODUxfDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              ABOUT US
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              ABOUT SRI SAI DEEKSHITHA<br />
              <span className="text-red-500">AMBULANCE SERVICE</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Hyderabad's most trusted 24/7 emergency ambulance service provider. 
              Dedicated to saving lives with quick response, modern equipment, and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="mission-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1765752958045-1d515310262f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjB2ZWhpY2xlJTIwYmx1ZSUyMGxpZ2h0c3xlbnwwfHx8fDE3NzIyNzY4Mzh8MA&ixlib=rb-4.1.0&q=85"
                alt="Sri Sai Deekshitha Ambulance - Emergency Vehicle"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-red-600" />
                <h2 
                  className="text-3xl md:text-4xl font-bold text-slate-900"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  OUR MISSION
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Sri Sai Deekshitha Ambulance Service, our mission is simple yet profound: 
                <strong className="text-slate-900"> to save lives by providing the fastest and most reliable 
                emergency medical transportation in Hyderabad.</strong>
              </p>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded over a decade ago, we started with a single ambulance and a vision to transform 
                emergency healthcare services in Hyderabad. Today, we operate a fleet of modern ICU ambulances 
                equipped with advanced life-support systems, serving thousands of patients every year.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that in medical emergencies, every minute matters. That's why we've positioned 
                our ambulances strategically across Hyderabad to ensure the fastest possible response time. 
                Our commitment is to reach you within 15-20 minutes, anywhere in the city.
              </p>

              <a href="tel:9666069108">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-14 rounded-full text-lg shadow-lg shadow-red-600/20">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {stat.number}
                </p>
                <p className="text-red-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="values-section">
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
              OUR CORE VALUES
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide our 24/7 commitment to emergency medical services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="equipment-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-10 h-10 text-blue-600" />
                <h2 
                  className="text-3xl md:text-4xl font-bold text-slate-900"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  MODERN ICU EQUIPMENT
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our ambulances are equipped with state-of-the-art medical equipment to provide 
                critical care during transit. Every life-saving device is regularly maintained 
                and certified for emergency use.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {equipment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1770836037704-44bd8c7b6978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwdmVudGlsYXRvciUyMGhvc3BpdGFsJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwwfHx8fDE3NzIyNzY4NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="ICU Ambulance Medical Equipment - Ventilator and Patient Monitor"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="team-section">
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
              CERTIFIED PARAMEDICS & TRAINED STAFF
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team of certified paramedics, trained drivers, and medical support staff are 
              dedicated to providing the highest quality emergency care. Every team member 
              undergoes rigorous training in advanced life support, emergency response, and 
              patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Certified Paramedics',
                desc: 'All our paramedics are certified in Advanced Life Support (ALS) and Basic Life Support (BLS).'
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: 'Trained Drivers',
                desc: 'Expert drivers trained in emergency driving protocols to ensure safe and fast transport.'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: '24/7 Support Team',
                desc: 'Dedicated dispatch team available round the clock to coordinate emergency responses.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-none shadow-sm text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
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
      <section className="py-16 md:py-20 bg-blue-700" data-testid="about-cta">
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
              READY TO SERVE YOU 24/7
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether it's an emergency or a planned patient transfer, 
              Sri Sai Deekshitha Ambulance Service is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9666069108">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-16 px-12 rounded-full shadow-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  Call 9666069108
                </Button>
              </a>
              <Link to="/ambulance-services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold text-lg h-16 px-12 rounded-full"
                >
                  Our Services <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
