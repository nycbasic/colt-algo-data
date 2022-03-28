// Write a function that accepts and array and a value.
// Returns the index at where the value exist.
// If the value does not exist in the array, return -1

// Inputs: array, ("str", num)
// Outputs: number

// Edge cases:
// ([], value), ("str", value), (num, value), ({}, value), ([], []), ([], {}), ([], value, value2)

function linearSearch(arr, val) {
  if (
    arr.length < 1 ||
    !Array.isArray(arr) ||
    Array.isArray(val) ||
    typeof val === "object" ||
    linearSearch.arguments.length > 2
  ) {
    return null;
  }

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Binary Search
// Write a function that accepts a sorted arra and a value.
// Return true if the value is in the array.

// Inputs: array, string or number
// Outputs: boolean

// Edge Cases:
// ([], value), ("str", value), (num, value), ({}, value), ([], []), ([], {}), ([], value, value2)

function binarySearch(arr, val) {
  //   if (
  //     arr.length < 1 ||
  //     !Array.isArray(arr) ||
  //     Array.isArray(val) ||
  //     typeof val === "object" ||
  //     binarySearch.arguments.length > 2
  //   ) {
  //     return null;
  //   }

  // Create a left pointer at the start of the array
  let start = 0;
  // And a right pointer at the end of the array.
  let end = arr.length - 1;
  // Create the midpoint
  let mid = Math.floor((end + start) / 2);
  // While the val is not equal to the midpoin t& left pointer is less than or equal to the right pointer:
  while (arr[mid] !== val && start <= end) {
    // if the value is too small....
    if (val < arr[mid]) {
      // move the end pointer up
      end = mid - 1;
    } else {
      // move the start pointer up
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  // if the midpoint is equal the the val
  if (arr[mid] === val) {
    // return the index
    return mid;
  }
  // return -1 if there are no items in the array that matches the val
  return -1;
}

// [1,2,3][4,5]
// 0 2 4
// [4,5]
// 3 3 4
// [5]
// 4 4 4

// Naive String Search (Linear Search)

function naiveStringSearch(long, pattern) {
  // count
  let count = 0;
  // 1st Loop through the long string
  for (let i = 0; i < long.length; ++i) {
    // 2nd Loop through the pattern string
    for (let j = 0; j < pattern.length; ++j) {
      // If current long letter does not equal pattern letter
      console.log(long[i], pattern[j]);
      if (long[i + j] !== pattern[j]) {
        console.log("BREAK!");
        // break out of 2nd loop
        break;
      }
      // if the pattern long index is equal to the length of the pattern index,
      if (j === pattern.length - 1) {
        // add to count variable
        console.log("Matched");
        count++;
      }
    }
  }
  return count;
  // return count;
}

console.log(naiveStringSearch("testing testing", "test"));
