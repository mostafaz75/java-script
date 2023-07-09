// Creating an object for a school
const school = {
  name: 'ABC School',
  classes: [
    {
      className: 'Class A',
      students: [
        { name: 'John', age: 15, grade: 90, gender: 'Male' },
        { name: 'Sarah', age: 16, grade: 85, gender: 'Female' },
        { name: 'Michael', age: 15, grade: 95, gender: 'Male' },
        // Additional students for Class A
        { name: 'Emma', age: 14, grade: 92, gender: 'Female' },
        { name: 'Daniel', age: 16, grade: 88, gender: 'Male' },
      ],
    },
    {
      className: 'Class B',
      students: [
        { name: 'Emily', age: 14, grade: 92, gender: 'Female' },
        { name: 'Jacob', age: 15, grade: 88, gender: 'Male' },
        { name: 'Olivia', age: 14, grade: 97, gender: 'Female' },
        // Additional students for Class B
        { name: 'Ethan', age: 16, grade: 93, gender: 'Male' },
        { name: 'Sophia', age: 15, grade: 90, gender: 'Female' },
      ],
    },
    // Additional classes
    {
      className: 'Class C',
      students: [
        { name: 'Liam', age: 16, grade: 94, gender: 'Male' },
        { name: 'Ava', age: 15, grade: 96, gender: 'Female' },
        { name: 'Mason', age: 15, grade: 91, gender: 'Male' },
      ],
    },
    {
      className: 'Class D',
      students: [
        { name: 'Harper', age: 14, grade: 89, gender: 'Female' },
        { name: 'William', age: 16, grade: 98, gender: 'Male' },
        { name: 'Evelyn', age: 15, grade: 95, gender: 'Female' },
      ],
    },
  ],
};

// Function to find the top-performing student in the school
function findTopStudent(school) {
  let topStudent = null;
  let highestGrade = -1;

  for (const schoolClass of school.classes) {
    for (const student of schoolClass.students) {
      if (student.grade > highestGrade) {
        highestGrade = student.grade;
        topStudent = student;
      }
    }
  }

  return topStudent;
}

// Finding the top-performing student in the school
const topStudent = findTopStudent(school);

console.log(`Top student in ${school.name}: ${topStudent.name}`);
console.log(`Class: ${topStudent.className}`);
console.log(`Grade: ${topStudent.grade}`);
console.log(`Gender: ${topStudent.gender}`);

/* Output:
   Top student in ABC School: William
   Class: Class D
   Grade: 98
   Gender: Male
*/
