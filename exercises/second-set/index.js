// Recursion Excercises

// Exercise #1
// Write a function called power which accepts a base and an exponent
// The function should return the power of the base component.
// Function should mimic the Math.pow() function.
// No need to worry about negative exponents.

// Inputs: (number: base, number: exponent);
// Outputs: number
// Edge Cases:
// ("str", "str"), ({}, []), ("str", number), (number, "str")

// Ex: 2^3 = 2 * 2 * 2 = 8;
// how to duplicate the base three times or according the the exponent?

function power(base, exponent) {
  // Edge case
  if (typeof base !== "number" || typeof exponent !== "number") {
    return;
  }

  if (exponent < 1) return 1;

  let total = 0;
  // Base Case
  if (exponent === 1) {
    return base;
  }
  total = total + base * power(base, exponent - 1);
  return total;
}

// Exercise #2
// Write a function factorial which accepts a number.
// The return value should be the factorial of the number.

// Input: number
// Output: number
// Edge cases:
// ({}), ("str"), ([]), ({}, [])

// Ex: 4! 1 * 2 * 3 * 4 = 24

function factorial(num) {
  // Edge Case;
  if (typeof num !== "number" || factorial.arguments.length > 1) {
    return 1;
  }
  // Base Case:
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// Exercise #3
// Write a function called productOfArray.
// Takes in an array of numbers.
// Returns the product of all the numbers

// Input: [numbers]
// Output: number
// Edge Cases:
// ("str"), ({}), ([empty]), ([],[]), ([number, "str", {}])

// Ex: [1,2,3,4] = 1 * 2 * 3 * 4 = 24
// need to the items in the array.

function productOfArray(arr) {
  // Base Case:
  if (arr.length < 1) {
    console.log("Base Case")
    return 1;
  } 

  const areNumbers = arr.every((item) => {
    return typeof item === "number";
  });
  // Edge Case:
  if (
    !Array.isArray(arr) ||
    !areNumbers ||
    productOfArray.arguments.length > 1 
  ) {
    console.log("Edge Case #2")
    return 1;
  }

  // Recursive Case:
  return arr[0] * productOfArray(arr.slice(1))
}

// Excercise #4
// Write a function which accepts a number.
// Adds all the number from 0 to the number passsed in the function.

// Inputs: number
// Outputs: number
// Edge Cases:
// ("str"), ({}), ([]), (boolean), ("str", []);

// Ex: range(6) = 1 + 2 + 3 + 4 + 5 + 6 = 21;

function recursiveRange(num) {
  // Edge Case:
  if(typeof num !== "number" || recursiveRange.arguments.length > 1) {
    return false;
  }

  // Base Case:
  if(num === 0) {
    return num;
  }
  // Recursive Case:
  return num + recursiveRange(num - 1);
}

// Exercise #5
// Write a function which accepts a number.
// Returns the nth number of the fib sequence.

// Inputs: number
// Output: number

// Edge Case:
// ("str"), ({}), ([]), (boolean), ("str", []);

function fibRecursive(n) {
  // Edge Case:
  if(typeof n !== "number" || fibRecursive.arguments.length > 1) {
    return 1;
  }

  // Base Case:
  if(n <= 2) {
    return 1;
  }

  // Recursive Case:
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Exercise #6
// Write a function that accepts a string.
// Returns a the reversed version of the string.

// Inputs: string
// Output: string

// Edge Case:
// (number), ({}), ([]), (boolean), ("str", []);

function reverse(str) {
  // Edge Case:
  if(typeof str !== "string" || reverse.arguments.length > 1) {
    return false;
  }

  // Base Case:
  if(str.length < 1) {
    return str;
  }

  // Recursion Case:
  return reverse(str.slice(1)) + str[0]
}

// Exercise #7
// Write a function which takes a string.
// Returns true if the string passed is a palindrome.

// Inputs: string
// Outputs: boolean

// Edge Case:
// (number), ({}), ([]), (boolean), ("str", []);

function isPalindrome(str) {
  // Edge Case:
  if(typeof str !== "string" || isPalindrome.arguments.length > 1) {
    return false; 
  }

  // Base Case:
  if(str.length < 2) {
    return true;
  }

  if(str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  }

  return false;
}


// Exercise #8
// Write a function that accepts an array and a callback.
// Returns true if a single value in the array returns true when passed to the callback.

// Inputs: array, function
// Outputs: boolean

// Edge Cases:
// ({}, {}), ([], []), (num, func), (str, func) etc...

// [1,2,3,4]
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
  // your solution.
  // Edge Case:
  if(typeof callback !== "function" || !Array.isArray(arr) || someRecursive.arguments.length > 2 || someRecursive.arguments.length < 2) {
    return null;
  }
  // If there are no values in the array
  // Base Case:
  if(arr.length < 1) {
    // automatically return false;
    return false;
  }

  // store the return value of the callback
  let result = callback(arr[0]);

  // If the return value is false
  if(!result) { 
    // continue the recursion
    // Recursive Case;
    return someRecursive(arr.slice(1), callback);
  }
  // return the result when the recursion is done.
  return result;
}

// Exercise #9
// Write a function that accepts an array of arrays of values.
// Returns a single array of values.

// Inputs: array
// Outputs: array

// Edge Cases:
// ([]), ("str"), (num), (boolean), ([""]), ([[]]),([],[])

// Example: 
// flatten([[1],[2],[3]]) // [1,2,3]
// if any of the values in the array is an array
// does the value contain an array

function flatten(nestedArr) {
  // Outut of the function
  const flat = [];
  // Using helper function to create a loop for the nested arrays
  function helper(arr) {
    // Tracks the index of the arrray
    let counter = 0;
    // Loops througth the array
    while (counter < arr.length) {
      // stores the value of the index in the array
      const val = arr[counter];
      // if the current value is an array
      if(Array.isArray(val)) {
        // recall the helper function
        helper(val)
        // else if the val is not an array
      } else {
        // push the value into the output array.
        flat.push(val);
      }
      // Move the index up.
      counter++;
    }
  }
  // Start the helper function
  helper(nestedArr);
  // returnt he output array.
  return flat;
}

console.log(flatten([1, 2, 3, [4, 5] ]));