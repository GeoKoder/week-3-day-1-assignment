# Week 3 Day 1 Assignment

JavaScript practice with destructuring, spread and rest syntax, chained array methods, and resilient asynchronous requests. The project uses plain JavaScript files and does not require third-party packages.

## Requirements and tasks

### Task 1: Destructuring, Spread, and Rest — 25 points

Complete 15 labelled exercises in `exercises.js`:

- **Destructuring (5):** extract object properties, rename a property, use a default value, destructure a nested address, and skip an array item while extracting values.
- **Spread (5):** merge arrays, copy and update an object without mutating the original, pass array values to `Math.max`, merge objects with later values taking precedence, and add array items at both ends without `push` or `unshift`.
- **Rest (5):** implement `sum(...numbers)`, collect extra greeting arguments, keep selected object keys while collecting the rest, implement `head(first, ...rest)`, and log the first argument and count the remaining arguments.

Log every result with a clear label.

### Task 2: Data Processing Pipeline — 25 points

In `pipeline.js`, implement `findTopListings(listings, neighborhood, maxPrice)` with chained `.filter()`, `.sort()`, `.slice()`, and `.map()` calls. Filter by neighborhood and price, sort by highest rating first, take up to five results, and format each listing with its rating, name, comma-separated amenities, and KES price with thousands separators.

The supplied listing data covers Westlands, Kilimani, Eastleigh, Karen, and CBD. Run the function for Westlands under KES 5,000 and Kilimani under KES 10,000.

### Task 3: Error-Resilient Data Fetcher — 20 points

In `fetcher.js`, implement `resilientFetch(url)` using `fetch()` and `try/catch`. Make up to three attempts, logging each attempt and waiting one second between failed attempts. Return parsed JSON on success. After the final failure, return an object shaped like:

```js
{ success: false, error: "Failed after 3 attempts", url, attempts: 3 }
```

Try both a valid JSONPlaceholder post URL and an invalid endpoint.

### Bonus: Memoization — optional, +10 points

Optionally implement `memoize(fn)` in `memoization.js` (or in the file your course instructions specify). Cache results by arguments, log cache hits and misses, and demonstrate it with an expensive function such as a delayed factorial calculation.

## Project structure

```
week-3-day-1-assignment/
├── exercises.js       # 15 destructuring, spread, and rest exercises
├── pipeline.js        # Nairobi listing data and chained processing
├── fetcher.js         # Fetch retries and error handling
├── memoization.js     # Optional bonus implementation
└── README.md
```

`memoization.js` is optional. If your bonus implementation is stored elsewhere, update the structure above to match your repository.

## Setup

1. Install [Node.js](https://nodejs.org/) version 18 or later. This provides the built-in `fetch()` used by `fetcher.js`.
2. Clone your GitHub repository and change into its folder:

   ```bash
   git clone https://github.com/<your-username>/week-3-day-1-assignment.git
   cd week-3-day-1-assignment
   ```

3. No `npm install` step is needed for these standalone scripts.

## Run the assignment

Run each file from the project folder:

```bash
node exercises.js
node pipeline.js
node fetcher.js
```

If you completed the bonus:

```bash
node memoization.js
```

**Internet access is required for `fetcher.js`** to reach JSONPlaceholder. Without a connection, the valid request will also fail and retry.

## Sample output

The exact formatting may vary slightly depending on your labels. For the fetcher, the response title and body are supplied by the API.

### `exercises.js`

```text
Destructuring 1 — name and age: Amina, 24
Destructuring 2 — renamed name: Amina
Destructuring 3 — default role: student
Destructuring 4 — nested city and county: Mombasa, Mombasa
Destructuring 5 — first and third cities: Nairobi, Kisumu
Spread 1 — merged arrays: [1, 2, 3, 4, 5, 6]
Spread 2 — updated copy: { name: "Amina", age: 25 }; original age: 24
Spread 3 — maximum: 9
Spread 4 — merged objects: { a: 1, b: 3, c: 4 }
Spread 5 — items added at both ends: ["start", "middle", "end"]
Rest 1 — sum: 15
Rest 2 — greeting: Hello, Amina and Brian, Carol
Rest 3 — name: Amina; details: { age: 24, city: "Nairobi" }
Rest 4 — head and remaining: first, ["second", "third"]
Rest 5 — First: A, remaining: 2
```

These values are illustrative; choose inputs that demonstrate the required behavior.

### `pipeline.js`

```text
Top listings in Westlands under KES 5,000:
1. ⭐ 4.8 — Cozy Studio Westlands (KES 3,500/night) — wifi, kitchen, parking
2. ⭐ 4.5 — Artist Loft Westlands (KES 4,500/night) — wifi, kitchen
3. ⭐ 4.1 — Backpacker Hostel Westlands (KES 800/night) — wifi

Top listings in Kilimani under KES 10,000:
1. ⭐ 4.9 — Modern Apartment Kilimani (KES 6,000/night) — wifi, pool, gym, kitchen
```

### `fetcher.js`

```text
Attempt 1 of 3 for https://jsonplaceholder.typicode.com/posts/1...
✅ Success: { userId: 1, id: 1, title: "...", body: "..." }

Attempt 1 of 3 for https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s...
Attempt 2 of 3 for https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s...
Attempt 3 of 3 for https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s...
❌ Failed: { success: false, error: "Failed after 3 attempts", url: "...", attempts: 3 }
```

The failure result should be returned by the function. Your script can log it as shown above. The invalid endpoint produces an HTTP error response, which should count as a failed attempt.

### Optional memoization output

```text
Cache MISS for args: [5] — computing...
Result: 120
Cache HIT for args: [5]
Result: 120
```
