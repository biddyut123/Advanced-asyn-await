 async function loadJoke() {
     try {
          let res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
      let data = await res.json();
         document.getElementById('jokeBox').innerText = data.joke;
     }
     catch (error) {
        document.getElementById('jokeBox').innerText = "জোক খুঁজে পাওয়া যায়নি।";
        console.error("Error fetching joke:", error);
     }
    
 }