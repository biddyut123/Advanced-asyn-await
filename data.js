const students = [
  { name: "Rafi", marks: 85 },
  { name: "Lima", marks: 72 },
  { name: "Hasan", marks: 40 },
  { name: "Mitu", marks: 90 },
  { name: "Nadim", marks: 33 },
];


 const passStudent = students.filter(student => student.marks >= 40);
 const nameStudent = passStudent.map(student => student.name.toUpperCase());
const markStudent = passStudent.reduce((sum,student) => sum + student.marks, 0);

const results = {
    passStudent: passStudent,
    nameStudent: nameStudent,
    markStudent: markStudent
};
 console.log(results)