import { GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="OTEC Pacifico Sur Logo" 
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary dark:text-blue-400">
                OTEC Pacifico Sur
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Centro de Capacitación
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;