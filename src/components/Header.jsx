function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start h-20">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            {/* Reemplaza el icono con tu logo */}
            <img 
              src="/logo.png" 
              alt="OTEC Pacifico Sur Logo" 
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">
                OTEC Pacifico Sur
              </h1>
              <p className="text-sm text-gray-600">
                Centro de Capacitacion
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;