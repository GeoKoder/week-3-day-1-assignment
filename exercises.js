// Task 1: Destructuring, Spread, and Rest (25 points)

// ==========================================
// Destructuring (5 exercises):
// ==========================================
console.log("=== Destructuring (5 exercises) ===");

// 1. Extract name and age from { name: "Amina", age: 24, city: "Nairobi" } into variables
const person1 = {
  name: "Amina",
  age: 24,
  city: "Nairobi",
};

const { name, age } = person1;
console.log("Destructuring 1 - Name:", name, "| Age:", age);

// 2. Rename name to fullName during destructuring
const { name: fullName } = person1;
console.log("Destructuring 2 - Renamed fullName:", fullName);

// 3. Destructure with a default value: { role = "student" } from { name: "Brian" } (role should be "student")
const person2 = {
  name: "Brian",
  age: 26,
  county: "Kisumu",
};

const { name: firstName, age: personAge, role = "student" } = person2;
console.log("Destructuring 3 - Default role:", role);

// 4. Destructure a nested object: { address: { city, county } } from { name: "Lilian", address: { city: "Mombasa", county: "Mombasa", zip: "80100" } }
const person3 = {
  name: "Lilian",
  address: {
    city: "Mombasa",
    county: "Mombasa",
    zip: "80100",
  },
};

const {
  address: { city, county },
} = person3;
console.log("Destructuring 4 - City:", city, "| County:", county);

// 5. Array destructuring: extract the first and third items from ["Nairobi", "Mombasa", "Kisumu", "Nakuru"], skipping the second
const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];

const [first, , third] = cities;
console.log("Destructuring 5 - First:", first, "| Third:", third);

// ==========================================
// Spread (5 exercises):
// ==========================================
console.log("\n=== Spread (5 exercises) ===");

// 1. Merge two arrays: [1, 2, 3] and [4, 5, 6] into one
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log("Spread 1 - Merged arrays:", combinedArray);

// 2. Create a shallow copy of an object and change one property without mutating the original
const laptop = {
  model: "hp",
  screenSize: 14,
  keyboard: "backlit",
  touchScreen: true,
};

const laptopCopy = {
  ...laptop,
  screenSize: 16,
};
console.log("Spread 2 - Shallow copy with modified property:", laptopCopy);

// 3. Use spread to pass array elements as function arguments: Math.max(...numbers)
const numbers = [15, 34, 6, 89, 42, 21, 12];
const maxNumber = Math.max(...numbers);
console.log("Spread 3 - Math.max with spread:", maxNumber);

// 4. Merge two objects, with the second overriding shared keys: { a: 1, b: 2 } and { b: 3, c: 4 } → { a: 1, b: 3, c: 4 }
const numObject1 = {
  a: 1,
  b: 2,
};

const numObject2 = {
  b: 3,
  c: 4,
};

const combinedNumObject = { ...numObject1, ...numObject2 };
console.log("Spread 4 - Merged objects with override:", combinedNumObject);

// 5. Add items to the beginning and end of an array without using push/unshift
const originalArray = [15, 23, 57, "Meat", "Beans"];
const addedArray = ["Added Item 1", ...originalArray, "Added Item 2"];
console.log("Spread 5 - Array with items added to start and end:", addedArray);

// ==========================================
// Rest (5 exercises):
// ==========================================
console.log("\n=== Rest (5 exercises) ===");

// 1. Write a function sum(...numbers) that accepts any number of arguments and returns their sum
const numbers1 = [];
const numbers2 = [];
const numbers3 = [];

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log("Rest 1 - sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
console.log("Rest 1 - sum(45, 78):", sum(45, 78));
console.log("Rest 1 - sum(56, 89, 45, 23, 76):", sum(56, 89, 45, 23, 76));

// 2. Write a function that takes a first parameter and collects the rest: function greet(first, ...others)
function greet(first, ...rest) {
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  console.log(`Hello, ${first}, and all your friends: ${formatter.format(rest)}.`);
}

console.log("Rest 2 - greet(first, ...rest):");
greet("Robert", "James", "Martin", "Aston", "Elvis");
greet("Robert", "James");
greet("Robert", "James", "Peter");

// 3. Destructure an object keeping specific keys and collecting the rest: const { name, ...details } = person
const person = {
  name: "James Gichuru",
  occupation: "Politician",
  networth: "256 Million USD",
  children: 4,
  wife: "Elena Gichuru",
  residence: "Mai Mahiu",
};

const { name: bothNames, ...details } = person;
console.log("Rest 3 - Name:", bothNames);
console.log("Rest 3 - Remaining details:", details);

// 4. Write a function head(first, ...rest) that returns the first element and the remaining array
function head(first, ...rest) {
  return `This is the first element: ${first} and these are the others: ${rest}`;
}

console.log("Rest 4 - head(first, ...rest):", head("Hi", "hello", "hey", "woza", "eya", "sup"));

// 5. Use rest to write a function that logs the first argument and counts the remaining: "First: X, remaining: Y"
function logCounter(first, ...remaining) {
  console.log(`First: ${first}, remaining: ${remaining.length}`);
}

console.log("Rest 5 - logCounter(first, ...remaining):");
logCounter("Cheater", "Lion", "Elephant", "Hippopotamus", "Crocodile", "Leopard");