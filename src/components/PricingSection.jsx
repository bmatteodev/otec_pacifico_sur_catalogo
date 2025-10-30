import { motion } from 'framer-motion';
import { DollarSign, Users, MessageCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

function PricingSection() {
  const handleWhatsApp = (courseType) => {
    const message = `Hola, quiero cotizar un curso ${courseType}`;
    const phoneNumber = '56975135223';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const pricingOptions = [
    {
      title: 'E-learning Asincronico',
      price: '$89.000',
      description: '+1 participante',
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'E-learning Sincronico',
      price: '$149.000',
      description: '+6 participantes',
      icon: Users,
      color: 'from-primary to-primary-light',
    },
    {
      title: 'E-learning Sincronico',
      price: '$119.000',
      description: '+12 hasta 20 participantes',
      icon: Users,
      color: 'from-primary to-primary-light',
    },
  ];

  const customQuote = [
    { title: 'Semi presencial', email: 'contacto@otecpacificosur.cl' },
    { title: 'Presencial', email: 'contacto@otecpacificosur.cl' },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Tarifas por Modalidad
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Precios especiales para empresas y grupos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pricingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${option.color} p-4 text-white`}>
                  <IconComponent className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-center">{option.title}</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary dark:text-blue-400 mb-2">
                    {option.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customQuote.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Precios especiales - Contactanos para cotizar
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsApp(item.title)}
                  className="flex-1 bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </button>
                <a
                  href={`mailto:${item.email}`}
                  className="flex-1 bg-primary hover:bg-primary-light text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;