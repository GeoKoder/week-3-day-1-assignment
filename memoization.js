// Before memoization, this is the expensive function that takes time to finish
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// fn is another function passed in as the argument
function memoize(fn) {
  // an object to store previous answers
  const cache = {};

  return async function (...args) {
    // checks the cache and calculates if necessary
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(`Cache HIT for args: ${key}`);
      return cache[key];
    }

    console.log(`Cache MISS for args: ${key} - computing...`);

    const result = await fn(...args);

    cache[key] = result;

    return result;
  };
}

async function main() {
  const memoizedFactorial = memoize(factorial);

  console.log("First call:", await memoizedFactorial(5));
  console.log("Second call:", await memoizedFactorial(5));
  console.log("Third call:", await memoizedFactorial(6));
}

main();
