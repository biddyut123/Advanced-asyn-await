const user = {
  name: "Shuvo",
  age: 24,
  gender: "male"
};

const {name, age } = user;
 console.log(user, age);


 
  let num = [1, 2, 3, 4, 5];
  let num2 = [6, 7, 8, 9, 10];
   const [one, two, three] = num;

   console.log(one, two, three);

    const combined = [...num, ...num2];
    console.log(combined)


     const student = { name: "Joha", age:24};
      const newStudent = {...student, marks:90};
      console.log(newStudent);