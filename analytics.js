export function calculateClassAverage(students, courseId) {
  const targetCourses = students
    .flatMap(student => student.courses)
    .filter(course => course.courseId === courseId);

  if (targetCourses.length === 0) return 0;

  const total = targetCourses.reduce((sum, course) => sum + course.grade, 0);
  return total / targetCourses.length;
}

export function findTopStudent(students) {
  if (students.length === 0) return null;
  
  return students.reduce((topStudent, currentStudent) => {
    return (currentStudent.getAverage() > topStudent.getAverage()) ? currentStudent : topStudent;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}