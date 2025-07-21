const user = {
  name: "Shuvo",
  address: {
    city: "Dhaka"
  }
};

console.log(user.address?.city);
console.log(user.contact?.phone);
console.log(user.address?.zip)


const student = {
  name: "Rafi",
  department: {
    name: "CSE",
    batch: 2023
  },
  marks: null
};

// ✅ student.department?.batch দেখাও
// ✅ student.contact?.email দেখাও
// ✅ student.marks ?? "Not available"
// ✅ student.age ?? 18



console.log(student.department?.batch);
console.log(student.contact?.email);
console.log(student.marks ?? "Not available");
console.log( student.age ?? 18)