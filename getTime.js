

 function startTime(){
     let i = 1;
     return new Promise((resolve) => {
       let interval =   setInterval(() => {
             console.log(`Interval Time : ${i}`);
             i++;
             if( i > 10){
              clearInterval(interval);
                resolve("End time");
             }
         }, 2000);
     })
 }
  async function  getFetch() {
    try {
         let run = await startTime();
         console.log("Run in ", run);
        
    } 
    catch (error) {
        console.log(" Try to again Tnx...", error)
        
    }

    
  }
   getFetch();