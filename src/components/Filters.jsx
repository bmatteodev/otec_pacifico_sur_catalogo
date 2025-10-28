import { Search } from 'lucide-react';

function Filters({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, selectedModality, setSelectedModality }) {
  const categories = ['Todas', 'Sector Industrial', 'Sector Minero'];
  const modalities = ['Todas', 'Presencial', 'Semi presencial', 'E-learning asincrónico', 'E-learning sincrónico con relator'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Buscador */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Buscar curso
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Ej: Grúa, Seguridad, Liderazgo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Filtro por categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por modalidad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Modalidad
          </label>
          <select
            value={selectedModality}
            onChange={(e) => setSelectedModality(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          >
            {modalities.map((modality) => (
              <option key={modality} value={modality}>
                {modality}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;