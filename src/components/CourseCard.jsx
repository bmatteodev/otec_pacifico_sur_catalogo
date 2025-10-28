import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, Eye } from 'lucide-react';

function CourseCard({ course, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col"
      onClick={onClick}
    >
      {/* Header de la tarjeta con categoría */}
      <div className="bg-gradient-to-r from-primary to-primary-light p-4">
        <span className="inline-block bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Contenido - flex-grow hace que ocupe el espacio disponible */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {course.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Información del curso */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-secondary" />
            <span>{course.duration} horas</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="w-4 h-4 mr-2 text-secondary" />
            <span>{course.modality}</span>
          </div>
          
          {course.codigoSence && (
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 mr-2 text-secondary" />
              <span>Código SENCE: {course.codigoSence}</span>
            </div>
          )}
        </div>

        {/* Botón ver más - mt-auto lo empuja al final */}
        <button className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mt-auto">
          <Eye className="w-5 h-5" />
          <span>Ver más detalles</span>
        </button>
      </div>
    </motion.div>
  );
}

export default CourseCard;