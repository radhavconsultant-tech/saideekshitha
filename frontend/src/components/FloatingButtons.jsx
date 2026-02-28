import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="floating-buttons">
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
        href="tel:9666606910"
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
