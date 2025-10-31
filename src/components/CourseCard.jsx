import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, Eye } from 'lucide-react';

function CourseCard({ course, onClick }) {
  // Manejar tanto modality (string) como modalities (array)
  const modalitiesText = Array.isArray(course.modalities) 
    ? course.modalities.join(' • ') 
    : course.modality;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-primary to-primary-light p-4">
        <span className="inline-block bg-white dark:bg-gray-900 text-primary dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
          {course.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2 text-secondary flex-shrink-0" />
            <span>{course.duration} horas</span>
          </div>
          
          <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
            <BookOpen className="w-4 h-4 mr-2 text-secondary flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{modalitiesText}</span>
          </div>
          
          {course.codigoSence && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Award className="w-4 h-4 mr-2 text-secondary flex-shrink-0" />
              <span>Codigo SENCE: {course.codigoSence}</span>
            </div>
          )}
        </div>

        <button className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mt-auto">
          <Eye className="w-5 h-5" />
          <span>Ver mas detalles</span>
        </button>
      </div>
    </motion.div>
  );
}

export default CourseCard;