 function great(name){
    console.log(`Hello ${name}`)

 }

   function processor(Callback){
    const  name = ' Shahariar'
     Callback(name);
   }
     processor(great); // Hello Shahariar

    //   Other Extension  another  practive  mode  call to  back 



      function collageName(name){
        console.log(`This is our Collage: ${name}`);
      }

        function newCollage(callback){
            const  name = "BDAGvtC";
            callback(name);
        }

         newCollage(collageName);