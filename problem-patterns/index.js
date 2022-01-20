// Example of a Frequency Pattern
// Problem: Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array
// The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Frequency Counter Problem #1  - Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrases, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Understand The Problem:
// 1) Restate the problem
//    - check if the second string has the same letters in the first string with the same length.
// 2) The inputs that go into the problem
//    - strings only
// 3) The output for the problem
//    - returns a boolean
// 4) Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
//    - yes
// 5) Label the most important pieces of information
//    - function: validAnagram
//    - Variable(s)
//        - obj

function validAnagram(str1, str2) {
  // Create an empty object;
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  // for loop to count letters;
  for (let letter of str1) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  // for loop to check if hashmap has letters
  for (let letter of str2) {
    // if letter from string two does not exist in object
    if (!obj[letter]) {
      // return boolean false
      return false;
    } else {
      obj[letter]--;
    }
  }
  // return true for the function
  return true;
}

// Example of a Multiple Pointer
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// Multiple Pointer Problem #1 - Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  // Start pointer 1 at the first index;
  let pointer1 = 0;
  // Statt pointer 2 at the second index;
  let pointer2 = 1;
  // Set count to 0;
  let count = 0;
  for (let i = pointer2; i < arr.length + 1; ++i) {
    //if the value of pointer 2 is not equal to the value of pointer 1
    if (arr[i] !== arr[pointer1]) {
      // then move pointer1 up one index
      pointer1++;
      // set pointer1's value to pointer2
      arr[pointer1] = arr[i];
      // Add the count for unique values
      count++;
      // else if pointer2's value is equal to pointer1's value
    } else if (arr[i] === arr[pointer1]) {
      // then move pointer2's index up
      pointer2++;
    }
    // continue to count
  }
  // return count once pointer2 has hit the end of the array.
  return count;
}

// Colt's solution

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// Sliding Window Pattern Example - Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maxiumum sum of an consecutive elements in the array.

function maxSubarraySum(arr, num) {
  // keep track of the largests subarray sumj
  let maxSum = 0;
  // keep track of the temporary largest subarray sum
  let tempSum = 0;
  // Edge casse, if the arr length is greater than the num param, return null
  if (arr.length < num) {
    return null;
  }
  // Sets the starting point with the sum of the required num
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // Set the tempSum to the current maxSum
  tempSum = maxSum;
  
  // Loop through the arr
  for (let i = num; i < arr.length; i++) {
    // make temp sum remove the first intial value and add the end of the required value?
    tempSum = tempSum - arr[i - num] + arr[i];
    // set maxSUm to the largest sum value
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
