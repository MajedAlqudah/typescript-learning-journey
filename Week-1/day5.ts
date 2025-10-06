// Simple promise function
function wait(seconds: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${seconds} seconds!`);
    }, seconds * 1000);
  });
}

// Using async/await
async function demoAsync() {
  console.log("Starting...");
  
  const result = await wait(2);
  console.log(result);
  
  console.log("Finished!");
}

// Run the async function
demoAsync();