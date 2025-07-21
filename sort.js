 let numbers = [23,3,4,5,65,76,45,34];

  let number1 = numbers.slice().sort((x, y) => x - y);
   let number2 = numbers.slice().sort((x, y) => y - x);

    // Assending and desending  using must be slice() method and also using the sort() method.

     const result = {
                 number1:number1,
                 number2:number2
     }

      console.log(result);






 let  num = [100,90,80,70,10,20,50,40,30];
  
  let num1 = num.slice().sort((a, b) => a - b);
  let num2 = num.slice().sort((a, b) => b - a);

   const assendingDesending = {
                     Number1:num1,
                     number2:num2
   }

   console.log(assendingDesending)


