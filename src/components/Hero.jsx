import { motion } from 'framer-motion';
import { Award, Users, Clock, BadgeCheck, Shield, GraduationCap } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 relative overflow-hidden">
      {/* Logo de fondo translúcido */}
      <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img 
          src="/logo.png" 
          alt="" 
          className="w-64 h-64 md:w-96 md:h-96 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CATÁLOGO DE CURSOS
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Encuentra el curso perfecto para tu desarrollo profesional
          </p>
        </motion.div>

        {/* Estadisticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-3 text-secondary" />
            <h3 className="text-2xl font-bold">+1000</h3>
            <p className="text-blue-100">Alumnos Capacitados</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-3 text-secondary" />
            <h3 className="text-2xl font-bold">+50</h3>
            <p className="text-blue-100">Cursos Actualizados</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-3 text-secondary" />
            <h3 className="text-2xl font-bold">Relatores altamente calificados</h3>
            <p className="text-blue-100">por REUF</p>
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <BadgeCheck className="w-10 h-10 text-secondary flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Certificados NCh 2728</p>
                <p className="text-sm text-blue-100">por CERTHIA</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-secondary flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Acreditados</p>
                <p className="text-sm text-blue-100">por SENCE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;