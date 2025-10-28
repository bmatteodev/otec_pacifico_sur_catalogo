import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/56975135223"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-colors"
      title="Contáctanos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsAppIcon className="w-7 h-7" />
      
      {/* Efecto de pulso */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
    </motion.a>
  );
}

export default FloatingWhatsApp;