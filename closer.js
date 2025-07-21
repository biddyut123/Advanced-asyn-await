function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    console.log(counter);
  }

  return innerFunction;
}

const count = outerFunction();
count(); // 1
count(); // 2
count(); // 3


  function SayHi(){
    let counting = 0;


     function sayHi(){
        counting++;
        console.log(`Hello, this is call number ${counting}`);
     }
     return sayHi;

  }
   const  hi = SayHi();
    hi(); // Hello, this is call number 1
    hi(); // Hello, this is call number 2
    hi(); // Hello, this is call number 3
    hi(); // Hello, this is call number 4   
    hi(); // Hello, this is call number 5
    hi(); // Hello, this is call number 6



