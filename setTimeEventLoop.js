 console.log('Start');
   let CallbackQueue = setTimeout(() => {
    console.log(`Im not buying it`)
    clearInterval(CallbackQueue)
    
   }, 0);

   console.log("End")