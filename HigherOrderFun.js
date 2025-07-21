 function multiple(factor){
     return function value(num){
        return factor * num;
     }

 }
   const double = multiple(8);
   const result = double * 5;
      console.log(result);


       const num1 = [2,3,4,5,6,7,8];
         const square =  num1.map(function(n){
             return n * n;

         });
          console.log(square);


          function calculator(a, b, callback) {
  return callback(a, b);
}

// 🔸 Add, Subtract, Multiply ফাংশন বানাও
// 🔸 calculator() এর মাধ্যমে callback আকারে পাঠাও

// 🔸 Output:
// Add Result: 30
// Subtract Result: 10
// Multiply Result: 200

 function  add(x , y) {
     return  x + y;
 }

  function subtrac(x , y){
     return x - y;
  }

   function multiple(x, y){
     return x * y;}

       const  addResult = calculator(30,40, add);
        const subResult = calculator(30,20, subtrac);
        const mulResult = calculator(10,20, multiple);
         const total ={
              add: addResult,
              sub: subResult,
              mul: mulResult
         }
         console.log(total)
