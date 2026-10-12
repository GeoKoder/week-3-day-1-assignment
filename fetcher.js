// Helper: delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function resilientFetch(url) {
  // for loop for maxTries
  // inside the loop put a try/catch block
  // if succeeds - return immediately
  // if fails - catch the error, log it, await 1s and try again
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return `Attempt ${i + 1} of 3 for ${url} \n ✅ Success: ${JSON.stringify(data, null, 2)}`;
    } catch (error) {
      console.warn(`Attempt ${i + 1} of 3 for ${url}`);

      if (i === 2) {
        return `❌ Failed: { success: false, error: "Failed after 3 attempts", url: ${url}, attempts: 3}`;
      }

      await delay(1000);
    }
  }
}

// Valid URL
console.log(await resilientFetch("https://jsonplaceholder.typicode.com/posts/1"));

// Invalid URL
console.log(await resilientFetch("https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s"))
