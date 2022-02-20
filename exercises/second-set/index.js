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
  const areNumbers = arr.every((item) => {
    return typeof item === "number";
  });
  // Edge case:
  if (
    !Array.isArray(arr) ||
    !areNumbers ||
    productOfArray.arguments.length > 1 ||
    arr.length < 1
  ) {
    return false;
  }

  let product = 1;

  // Base Case:
  if (arr.length === 0) {
    return product;
  }

  // Recursive Case:
  product = product * productOfArray(arr.slice(1));
  return product * arr[0]
}

console.log(productOfArray([1, 2, 3]));
