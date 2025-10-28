import { useState, useMemo } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import CourseGrid from './components/CourseGrid';
import CourseModal from './components/CourseModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import coursesData from './data/courses.json';
import { normalizeText } from './utils/searchUtils';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedModality, setSelectedModality] = useState('Todas');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    return coursesData.courses.filter((course) => {
      const normalizedSearch = normalizeText(searchTerm);
      const normalizedName = normalizeText(course.name);
      const normalizedDescription = normalizeText(course.description);
      
      const matchesSearch = normalizedName.includes(normalizedSearch) ||
                           normalizedDescription.includes(normalizedSearch);
      
      const matchesCategory = selectedCategory === 'Todas' || course.category === selectedCategory;
      const matchesModality = selectedModality === 'Todas' || course.modality === selectedModality;

      return matchesSearch && matchesCategory && matchesModality;
    });
  }, [searchTerm, selectedCategory, selectedModality]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCourse(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Catalogo de Cursos
        </h2>
        
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedModality={selectedModality}
          setSelectedModality={setSelectedModality}
        />

        <CourseGrid 
          courses={filteredCourses} 
          onCourseClick={handleCourseClick}
        />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;