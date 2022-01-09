// Problem #1 - Given two positive intergers, find out if the two numbers have the same frequency of digits.
// sameFrequency(182, 281) true
// sameFrequency(34, 14) false
// sameFrequency(22, 222) false

function sameFrequency(int1, int2) {
  // convert int1 & int2 to a string.
  const strInt1 = int1.toString();
  const strInt2 = int2.toString();

  // check if int1 and int2 has the same length and a length greater than 0
  if (
    strInt1.length !== strInt2.length ||
    strInt2.length === 0 ||
    strInt1.length === 0
  ) {
    return false;
  }

  // create a hashmaps/objects
  const str1Obj = {};
  const str2Obj = {};

  // loop through the converted string int1
  for (let val of strInt1) {
    // if the val exists in the hashmap then add to the count
    if (str1Obj[val]) {
      str1Obj[val] = str1Obj[val] + 1;
      // else if the num does not exist create a key with the value 0.
    } else {
      str1Obj[val] = 1;
    }
  }
  // loop throught the converted string int2
  for (let val of strInt2) {
    // same control flow as the pevious loop
    if (str2Obj[val]) {
      str2Obj[val] = str2Obj[val] + 1;
    } else {
      str2Obj[val] = 1;
    }
  }

  // loop though the converted hashmap for int1
  for (let key in str1Obj) {
    // if the key from the first hashmap does not exist in the second hashmapt1 return false
    if (!str2Obj[key]) {
      return false;
    }
    // if the key value of hashmap of int1 doesn't match the key value of hashmap of int2 return false.
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  return true;
}

// Problem #2 - check if there are any duplicates among the arguments passed in.
// areThereDuplicates(1,2,3) // => false
// areThereDuplicates(1,2,2) => true
// areThereDuplicates('a','b','c','a') => true
// Edge cases:
//  ('') > (["a"], ["b"], ["c"]) > ({a:a}, {a:a}) > ({a:a}, ['a']) > ('this is a string')
// Input: array(numbers, chars)
// Output: boolean

// Using pointers
function areThereDuplicates(...args) {
  // handle edge cases
  if (
    args.length < 1 ||
    args[0].constructor === Array ||
    args[0].constructor === Object
  ) {
    return false;
  }
  // create pointers
  let pointer1 = 0;
  // sort the args
  const sortedArray = args.sort();
  // loop through args starting from 2nd index
  for (let pointer2 = 1; pointer2 < sortedArray.length; ++pointer2) {
    // if the value of pointer 2 does not equal the value of pointer 1
    if (sortedArray[pointer2] !== sortedArray[pointer1]) {
      // move pointer1 up
      pointer1++;
    } else {
      // return true if value of pointer2 is equal to the value of pointer 1
      return true;
    }
  }
  // return false if there are no duplicates.
  return false;
}

// Using Frequency
function areThereDuplicates2(...args) {
  // Handle edge cases
  if (
    args.length < 1 ||
    args[0].constructor === Array ||
    args[0].constructor === Object
  ) {
    return false;
  }

  // create frequency hashmap
  const hashMap = {};
  // Loop through the args
  for (let val of args) {
    // If val exists in the hashmap
    if (hashMap[val]) {
      // add to the exisiting object count
      hashMap[val] = hashMap[val] + 1;
    } else {
      // create an object in the hashmap
      hashMap[val] = 1;
    }
  }
  // loop through the hsshMap
  for (let key in hashMap) {
    // if the key value is greater than 1
    if (hashMap[key] > 1) {
      // return true
      return true;
    }
  }
  // return false if there are no duplicates.
  return false;
}

// Problem #3 - Given a sorted array of int and a target average,
// determine if there is a pair of values in the array where the
// average of the pair equals the target average.
// Edge Cases:
// ({}, "some string"), ("str", 1), ([], 2.4, 34), ("str", "str"), (1,2) etc...
// Inputs: array, number
// Output: boolean

function averagePair(arr, avg) {
  // Handle edge case
  if (
    arr.constructor !== Array ||
    typeof avg !== "number" ||
    arguments.length > 2
  ) {
    return false;
  }
  // Sort the arr and store it
  const sortedArray = arr.sort();
  // Create first pointer starting point
  let pointer1 = 0;
  // Loop through the arr
  for (let pointer2 = 1; pointer2 < sortedArray.length; pointer2++) {
    // store the sum of the two pointer values
    let sum = sortedArray[pointer1] + sortedArray[pointer2];
    // if the sum divided by the avg equal the avg
    if (sum % avg === 0) {
      // return true
      return true;
    }
    // else
    // move pointer1 up;
    pointer1++;
  }
  // return false if there are no sums that match the avg
  return false;
}




