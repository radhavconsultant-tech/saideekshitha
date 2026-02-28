import { Phone, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export const FloatingButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname === '/contact') {
      // Already on contact page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to contact page
      navigate('/contact');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="floating-buttons">
      {/* Contact/Scroll Button */}
      <motion.button
        onClick={scrollToContact}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="contact-fab"
        aria-label="Go to Contact"
      >
        <Mail className="w-6 h-6 text-white" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919948386178?text=Hello%2C%20I%20need%20emergency%20ambulance%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all float-animation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:9666069108"
        className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-xl shadow-red-600/40 emergency-pulse"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="call-fab"
        aria-label="Call for Emergency"
      >
        <Phone className="w-8 h-8 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
