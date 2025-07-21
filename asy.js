async function fetchData() {
  try {
    let data = await getData();
    setTimeout(() => {
      const num = [1,2,3,4,5,6];
      num.sort.slice()
      
    }, timeout);
    console.log("Success:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}