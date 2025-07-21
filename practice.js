 let i = 1;
 function  getData() {
       return new Promise((resolve) => {
        let interval = setInterval(() => {
            console.log(`Okh ${i}`)
            i++;
             
               if(i > 5) {
                console.log("I am not buying it as well...!");
                clearInterval(interval);
                 resolve("I am not buying it");
               }
         }, 1000);

       });
 }

  async  function getFetch(){
     try {
        let data = await getData();
        console.log("success", data)
        
     } 
     catch (error) {
        console.log("Try  to understand  again and again !", error)
        
     }
  }
   getFetch();