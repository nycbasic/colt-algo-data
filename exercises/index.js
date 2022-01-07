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
  const sortedArray = args.sort();
  // loop through args starting from 2nd index
  for(let pointer2 = 1; pointer2 < sortedArray.length; ++pointer2) {
    if(sortedArray[pointer2] !== sortedArray[pointer1]) {
      pointer1++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3,4,5));
