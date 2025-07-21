const students = [
  { name: "Rafi", marks: 75 },
  { name: "Tania", marks: 90 },
  { name: "Sami", marks: 60 }
];

 const studentName = students.find(student => student.name === "Tania");
 const studentMarks = students.every(student => student.marks >= 50);
  const highScore =  students.some(student => student.marks > 80);

   const results = {
    studentName: studentName,
    studentMarks: studentMarks,
    highScore: highScore
   };

    console.log(results);