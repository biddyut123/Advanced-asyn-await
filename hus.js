let  i = 1;
 
function getData(){
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            console.log(`resolve your data ${i}`)    
            i++;
           

             if( i > 10){
              clearInterval(interval);
                resolve("Your time is up...")
             }
            
        }, 200);
        
    });
}

 async function getFetch() {
 let run =  await  getData();
 console.log("Okh got in as well...", run);
    
 }
  getFetch();