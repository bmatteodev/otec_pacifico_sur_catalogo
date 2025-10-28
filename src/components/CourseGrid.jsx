import CourseCard from './CourseCard';

function CourseGrid({ courses, onCourseClick }) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No se encontraron cursos con los filtros seleccionados.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          Intenta ajustar tus criterios de busqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard 
          key={course.id} 
          course={course} 
          onClick={() => onCourseClick(course)}
        />
      ))}
    </div>
  );
}

export default CourseGrid;