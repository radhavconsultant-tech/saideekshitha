import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, AlertCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! We will contact you shortly. For emergencies, please call us directly.'
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceAreas = [
    'LB Nagar', 'Kukatpally', 'Gachibowli', 'Madhapur', 'Secunderabad',
    'Uppal', 'Dilsukhnagar', 'Mehdipatnam', 'Ameerpet', 'Begumpet',
    'Banjara Hills', 'Jubilee Hills', 'Kondapur', 'Hitech City', 'Kompally',
    'ECIL', 'Malkajgiri', 'Alwal', 'Bowenpally', 'Tarnaka'
  ];

  return (
    <>
      <SEOHead
        title="Contact Sri Sai Deekshitha Ambulance Service | 24/7 Emergency - Hyderabad"
        description="Contact Sri Sai Deekshitha Ambulance Service for 24/7 emergency ambulance in Hyderabad. Call 9666606910 or 9948386178. Location: LB Nagar, Beside Global Hospital."
        keywords="contact ambulance hyderabad, emergency ambulance phone number, ambulance service LB nagar, 24 hour ambulance contact hyderabad"
        canonicalUrl="https://srisaideekshithaambulance.com/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-slate-900" data-testid="contact-hero">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              CONTACT US
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              GET IN TOUCH FOR<br />
              <span className="text-red-500">EMERGENCY AMBULANCE</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              For emergency ambulance service, call us immediately. Our team is available 
              24/7 to respond to your medical emergency anywhere in Hyderabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white" data-testid="contact-info">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Emergency Line 1',
                info: '9666606910',
                link: 'tel:9666606910',
                color: 'bg-red-600'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Emergency Line 2',
                info: '9948386178',
                link: 'tel:9948386178',
                color: 'bg-red-600'
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'WhatsApp',
                info: '9948386178',
                link: 'https://wa.me/919948386178',
                color: 'bg-green-600'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Available',
                info: '24/7 - 365 Days',
                link: null,
                color: 'bg-blue-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white shadow-xl border-none">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xl font-bold text-slate-900 hover:text-red-600 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-xl font-bold text-slate-900">{item.info}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-slate-50" data-testid="contact-form-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                SEND US A MESSAGE
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                For non-emergency inquiries, fill out the form below. For emergencies, 
                please call us directly at <strong>9666606910</strong>.
              </p>

              <Card className="bg-white shadow-lg border-none">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 font-medium">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12"
                          placeholder="Enter your name"
                          data-testid="contact-name-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12"
                          placeholder="Enter your phone"
                          data-testid="contact-phone-input"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="Enter your email"
                        data-testid="contact-email-input"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-700 font-medium">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="How can we help you?"
                        data-testid="contact-message-input"
                      />
                    </div>

                    {status.message && (
                      <div className={`p-4 rounded-lg flex items-start gap-3 ${
                        status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                      }`}>
                        {status.type === 'success' ? (
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{status.message}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 rounded-full text-lg"
                      data-testid="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                OUR LOCATION
              </h2>
              
              <Card className="bg-white shadow-lg border-none mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">
                        Sri Sai Deekshitha Ambulance Service
                      </h3>
                      <p className="text-slate-600">
                        LB Nagar, Beside Global Hospital<br />
                        Hyderabad, Telangana 500074<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5481!3d17.3497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIwJzU5LjAiTiA3OMKwMzInNTMuMiJF!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Sai Deekshitha Ambulance Service Location - LB Nagar, Hyderabad"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white" data-testid="service-areas">
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
              HYDERABAD SERVICE AREAS
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our ambulances cover all areas across Hyderabad and Secunderabad with quick response times.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 md:py-20 bg-red-600" data-testid="contact-cta">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              FOR MEDICAL EMERGENCY
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait - Call us immediately for fastest ambulance service in Hyderabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9666606910">
                <Button className="bg-white text-red-600 hover:bg-slate-100 font-bold text-lg h-16 px-12 rounded-full shadow-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  9666606910
                </Button>
              </a>
              <a href="tel:9948386178">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg h-16 px-12 rounded-full"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  9948386178
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
