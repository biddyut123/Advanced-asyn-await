// Delay function using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async countdown function
async function countDownDots() {
  console.log("Starting countdown...");

  for (let i = 5; i >= 1; i--) {
    console.log(i);
    await delay(1000); // 1 second delay
    console.log("....");
    await delay(1000); // another 1 second delay before next number
  }

  console.log("⏰ Boom! Time’s up!");
}

// Call the function
countDownDots();
