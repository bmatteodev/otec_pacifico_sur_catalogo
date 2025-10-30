import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, BookOpen, Award, Download } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

function CourseModal({ course, isOpen, onClose }) {
  if (!course) return null;

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el curso: ${course.name}`;
    const phoneNumber = '56975135223';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDownloadTemario = () => {
    // Crear un elemento <a> temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = course.temarioUrl;
    link.download = `${course.name}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <span className="inline-block bg-white dark:bg-gray-900 text-primary dark:text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  {course.category}
                </span>
                
                <h2 className="text-3xl font-bold text-white pr-12">
                  {course.name}
                </h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Duracion</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{course.duration} horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <BookOpen className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Modalidad</p>
                      <p className="font-semibold text-gray-800 dark:text-white text-sm">{course.modality}</p>
                    </div>
                  </div>

                  {course.codigoSence && (
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <Award className="w-6 h-6 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Codigo SENCE</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{course.codigoSence}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Descripcion del curso
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleDownloadTemario}
                    className="bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Descargar Temario</span>
                  </button>

                  <button
                    onClick={handleWhatsApp}
                    className="bg-secondary hover:bg-secondary-light text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CourseModal;