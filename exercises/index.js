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
    } else {
      str1Obj[val] = 1;
    }
    // else if the num does not exist create a key with the value 0.
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
    // if the key does not exist in the hashmap of int1 return false
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


