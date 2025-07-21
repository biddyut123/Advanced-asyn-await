 function getData(){
     return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const personalDetails = {
                 name:"John",
                 age:30
            }
            resolve("Personal Details : ", personalDetails)
            
        }, 2000);

     })
 }
 getData().then((value) =>{
    console.log("End")


 })
