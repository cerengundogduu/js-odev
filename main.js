import Student from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

console.log("Fetching data from database...");

fetchStudents((rawData) => {
  console.log("Data received!\n");

  const students = rawData.map(data => new Student(data.id, data.name, data.courses));

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  
  try {
    students[0].id = 999; 
  } catch (error) {}
  
  console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

  console.log("--- Analytics Report ---");

  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const students102 = filterStudents(students, student => 
    student.courses.some(course => course.courseId === 102)
  );
  const studentNames102 = students102.map(s => s.name).join(", ");
  console.log(`Students in Course 102: ${studentNames102}`);
});