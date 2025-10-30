import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

function DiscountBanner() {
  const handleWhatsApp = () => {
    const message = 'Hola, quiero información sobre descuentos para 2 o más cursos';
    const phoneNumber = '56975135223';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-secondary to-secondary-light rounded-lg shadow-xl p-6 mb-8 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4 text-white">
          <div className="bg-white/20 p-3 rounded-full">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              ¿Necesitas 2 o más cursos?
            </h3>
            <p className="text-white/90 text-sm md:text-base">
              Tenemos valores especiales para empresas y grupos. ¡Consultanos!
            </p>
          </div>
        </div>
        
        <button
          onClick={handleWhatsApp}
          className="bg-white hover:bg-gray-100 text-secondary font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2 shadow-lg whitespace-nowrap"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Solicitar descuento</span>
        </button>
      </div>
    </motion.div>
  );
}

export default DiscountBanner;