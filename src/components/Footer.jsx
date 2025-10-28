import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img 
          src="/logo.png" 
          alt="" 
          className="w-64 h-64 md:w-96 md:h-96 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm">+56 9 7513 5223</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="mailto:contacto@otecpacificosur.cl" 
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    contacto@otecpacificosur.cl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm">Quilpué, Valparaiso</p>
                  <p className="text-sm">Region de Valparaiso, Chile</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-sm leading-relaxed">
              OTEC Pacifico Sur es un centro de capacitacion comprometido con la excelencia 
              en formacion profesional. Ofrecemos cursos especializados para el desarrollo 
              de competencias en diversos sectores industriales.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Siguenos</h3>
            <div className="flex space-x-4">
            
              
              <a
                href="https://www.instagram.com/otecpacificosur/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-secondary p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a
                href="https://cl.linkedin.com/in/otec-pacífico-sur-chile-650317315?trk=public_post_feed-actor-name"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Organismo Tecnico de Capacitacion
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Certificado por SENCE
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} OTEC Pacifico Sur. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;