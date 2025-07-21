

 async function showData() {
  console.log("📡 Loading...");

  let data = await getData();

  console.log("✅ Got it:", data);
}

showData();

 
