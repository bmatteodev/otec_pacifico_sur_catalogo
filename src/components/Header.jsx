import { GraduationCap } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start h-20">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">
                OTEC Pacífico Sur
              </h1>
              <p className="text-sm text-gray-600">
                Centro de Capacitación
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;