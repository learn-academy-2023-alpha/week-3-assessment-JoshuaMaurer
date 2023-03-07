// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Input: a single number.
// Output: A single array of numbers following the fibonacci sequence containing the same amount of numbers as the input number.
// Note: The Fibonacci Sequence is the series of numbers where the next number is found by adding up the two numbers before it.

// Psuedo: Create a function  called fibonacciCreator
// create variables  for firstNumber = 0, secondNumber = 1 and output = [] (try doing this in the same line same line if possible,)
// .push the second number to the output array.
// Pass the array through a for loop starting at the index of 2 and iterating by 1
// create a new variable called combineNumbers and add the first and second numbers together then .push to the output variable.
// return output



// Jest Test:

describe("fibonacciCreator", () => {
    const fibLength1 = 6
    const fibLength2 = 10
    it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
        expect(fibonacciCreator(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciCreator(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Jest Test 1 Results:

// FAIL  ./code-challenges.test.js
// fibonacciCreator
//   ✕ return an array that length containing the numbers of the Fibonacci sequence

// ● fibonacciCreator › return an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: fibonacciCreator is not defined

//     25 | describe("fibonacciCreator", () => {
//     26 |     it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
//   > 27 |         expect(fibonacciCreator(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//        |         ^
//     28 |         expect(fibonacciCreator(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     29 |     })
//     30 | })

//     at Object.expect (code-challenges.test.js:27:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 2 Results:

// FAIL  ./code-challenges.test.js
// fibonacciCreator
//   ✕ return an array that length containing the numbers of the Fibonacci sequence (3 ms)

// ● fibonacciCreator › return an array that length containing the numbers of the Fibonacci sequence

//   expect(received).toEqual(expected) // deep equality

//   Expected: [1, 1, 2, 3, 5, 8]
//   Received: undefined

//     25 | describe("fibonacciCreator", () => {
//     26 |     it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
//   > 27 |         expect(fibonacciCreator(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//        |                                              ^
//     28 |         expect(fibonacciCreator(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     29 |     })
//     30 | })

//     at Object.toEqual (code-challenges.test.js:27:46)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 3 Results:

// PASS  ./code-challenges.test.js
// fibonacciCreator
//   ✓ return an array that length containing the numbers of the Fibonacci sequence (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

const fibonacciCreator = (array) => {
    let firstNumber = 0, secondNumber = 1, output = [] 
    output.push(secondNumber)
    for(let i = 2; i <= array; i++) {
      let combinedNumbers = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = combinedNumbers;
      output.push(combinedNumbers)
    }
    
    return output;
  };

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Input: an object with different Key: value pairs.
// Output: an array with only the values displayed and sorted from least to greatest.


// Psuedo: Create a function called smallToLarge.
// Create a variable inside smallToLarge called arrayValues. arrayValues takes the input object and uses Object.value to pull only the values out of the object and places them into a new array inside the variable arrayValues.
// arrayValues will then use .sort which will return the array but with the numbers sorted in ascending value based on their value.
// To address issues such as 1 and 100 being next to each because of how .sort() works, comparing these numbers as numbers and not the default .sort string value, (a, b) => a - b will be used.
// return arrayValues


// a) Create a test with expect statements for each of the variables provided.

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("smallToLarge", () => {
    const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
    }

    const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
    }
    it("return an array of the values sorted from least to greatest" , () => {
        expect(smallToLarge(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
        expect(smallToLarge(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
})

// Jest Test 1 Results:

// FAIL  ./code-challenges.test.js
// smallToLarge
//   ✕ return an array of the values sorted from least to greatest (1 ms)

// ● smallToLarge › return an array of the values sorted from least to greatest

//   ReferenceError: smallToLarge is not defined

//     244 |     }
//     245 |     it("return an array of the values sorted from least to greatest" , () => {
//   > 246 |         expect(smallToLarge(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//         |         ^
//     247 |         expect(smallToLarge(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//     248 |     })
//     249 | })

//     at Object.expect (code-challenges.test.js:246:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 2 Results:

// FAIL  ./code-challenges.test.js
// smallToLarge
//   ✕ return an array of the values sorted from least to greatest (2 ms)

// ● smallToLarge › return an array of the values sorted from least to greatest

//   expect(received).toEqual(expected) // deep equality

//   Expected: [15, 15, 20, 30, 30, 60, 90]
//   Received: undefined

//     244 |     }
//     245 |     it("return an array of the values sorted from least to greatest" , () => {
//   > 246 |         expect(smallToLarge(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//         |                                                 ^
//     247 |         expect(smallToLarge(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//     248 |     })
//     249 | })

//     at Object.toEqual (code-challenges.test.js:246:49)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 3 Results:

// PASS  ./code-challenges.test.js
// smallToLarge
//   ✓ return an array of the values sorted from least to greatest (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// b) Create the function that makes the test pass.

const smallToLarge = (object) => {
    const arrayValues = Object.values(object)
    arrayValues.sort((a, b) => a - b)
    return (arrayValues)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Input: an array of numbers
// Output: an array of numbers with the accumulating sum of the previous value and the new value.


// Psuedo: Create a functional called keepAddingAllTheValues.
// create a variable called sum that starts at 0
// .map over the input array of numbers adding the value of each number in the array to the sum variable using the += operator.
// return the new array created by .map with each of the summed values 
// If there is nothing in the array return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []

describe("keepAddingAllTheValues", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
    it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
        expect(keepAddingAllTheValues(accountTransactions1)).toEqual([100, 83, 60, 51]);
        expect(keepAddingAllTheValues(accountTransactions2)).toEqual([250, 161, 261, 165]);
        expect(keepAddingAllTheValues(accountTransactions3)).toEqual([]);
    })
})

// Jest Test 1 Results:

// FAIL  ./code-challenges.test.js
// keepAddingAllTheValues
//   ✕ return an array that length containing the numbers of the Fibonacci sequence

// ● keepAddingAllTheValues › return an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: keepAddingAllTheValues is not defined

//     332 |     const accountTransactions3 = []
//     333 |     it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
//   > 334 |         expect(keepAddingAllTheValues(accountTransactions1)).toEqual([100, 83, 60, 51])
//         |         ^
//     335 |         expect(keepAddingAllTheValues(accountTransactions2)).toEqual([250, 161, 261, 165])
//     336 |         expect(keepAddingAllTheValues(accountTransactions3)).toEqual([])
//     337 |     })

//     at Object.expect (code-challenges.test.js:334:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 2 Results:

// FAIL  ./code-challenges.test.js
// keepAddingAllTheValues
//   ✕ return an array that length containing the numbers of the Fibonacci sequence (2 ms)

// ● keepAddingAllTheValues › return an array that length containing the numbers of the Fibonacci sequence

//   expect(received).toEqual(expected) // deep equality

//   Expected: [100, 83, 60, 51]
//   Received: undefined

//     341 |     const accountTransactions3 = []
//     342 |     it("return an array that length containing the numbers of the Fibonacci sequence" , () => {
//   > 343 |         expect(keepAddingAllTheValues(accountTransactions1)).toEqual([100, 83, 60, 51]);
//         |                                                              ^
//     344 |         expect(keepAddingAllTheValues(accountTransactions2)).toEqual([250, 161, 261, 165]);
//     345 |         expect(keepAddingAllTheValues(accountTransactions3)).toEqual([]);
//     346 |     })

//     at Object.toEqual (code-challenges.test.js:343:62)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Jest Test 3 Results:

// PASS  ./code-challenges.test.js
// keepAddingAllTheValues
//   ✓ return an array that length containing the numbers of the Fibonacci sequence (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.


const keepAddingAllTheValues = (num) => {
    let sum = 0;
    return num.map(value => sum += value);
  };
