 let i  = 1;

  let interval = setInterval(() => {
     console.log(`I am not buying it ${i}`)
       i++;

      if( i > 100){
         console.log("I am not buying  it as well")
         clearInterval(interval);
       
      }
    
  }, 200);