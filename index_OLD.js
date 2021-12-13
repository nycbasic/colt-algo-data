// Colt Steele - JavaScript Algorithms and Data Structures Masterclass

// 1) Anagrams
/* Given two strings, write a function to determine if the second string is
an anagram of the first. An anagram is a word, phrase, or name formed by rearranging
letters of another, such as cinema, formed from iceman. */

// Can I restate the problem
"create a function that confirms a string is an Anagram";
// What are the inputs that go into the problem?
"Two Strings";
"all lower case strings";
// What are the outputs that should come from the solution of the problem?
"A boolean value, whether it's true or false";
// Can the outputs be determined from the inputs? In other words, do I have enough
// enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. It's still worth considering the question at this early stage.)
"Yes";
// How should I label the important pieces of data that are a part of the problem?

function MyValidAnagram(stringOne, stringTwo) {
  let count1 = {};
  let count2 = {};
  if (stringOne.length < stringTwo.length) {
    return false;
  }

  for (let i = 0; i < stringOne.length; ++i) {
    count1[stringOne[i]] = (count1[stringOne[i]] || 0) + 1;
  }
  for (let i = 0; i < stringTwo.length; ++i) {
    count2[stringTwo[i]] = (count2[stringTwo[i]] || 0) + 1;
  }

  for (let key in count1) {
    if (!(key in count2)) {
      return false;
    }
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

// Colt Steele's Solution
function ColtsValidAnagram(first, second) {
  if (first.length > second.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < first.length; ++i) {
    let letter = first[i];
    if (lookup[letter]) {
      lookup[letter]++;
    } else {
      lookup[letter] = 1;
    }
  }

  for (let i = 0; i < second.length; ++i) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
}

// 2) Multiple Pointers
/* Implement a function called countUniqueValues, which accepts a sorted array, and counts 
the unique values in the array. There can be negative numbers in the array, but it will always
be sorted.*/

function myCountUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  // Start pointer 1 at the first index;
  let pointer1 = 0;
  // Set count to 0;
  let count = 0;
  // Statt pointer 2 at the second index;
  for (let pointer2 = 1; pointer2 < arr.length; ++pointer2) {
    //if the value of pointer 2 is not equal to the value of pointer 1
    if (arr[pointer2] !== arr[pointer1]) {
      // then move pointer1 up one index
      pointer1++;
      // set pointer1's value to pointer2
      arr[pointer1] = arr[pointer2];
      // Add the count for unique values
      count++;
      // else if pointer2's value is equal to pointer1's value
    } else if (arr[pointer2] === arr[pointer1]) {
      // then move pointer2's index up
      pointer2++;
    }
    // continue to count
  }
  // return count once pointer2 has hit the end of the array.
  return count + 1;
}

// Colt Steele's Solution
function coltsCountUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; ++j) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// Coding Exercise - 3
/* Write a function called sameFrequency, given two positive integers,
out if the two numbers have the same frequency of digits */
function sameFrequency(intOne, intTwo) {
  const stringOfIntOne = intOne.toString();
  const stringOfIntTwo = intTwo.toString();
  if (
    stringOfIntOne.length > stringOfIntTwo.length ||
    stringOfIntOne.length < stringOfIntTwo.length
  ) {
    return false;
  }

  const hashTable = {};

  for (let i = 0; i < stringOfIntOne.length; ++i) {
    const number = stringOfIntOne[i];
    if (hashTable[number]) {
      hashTable[number]++;
    } else {
      hashTable[number] = 1;
    }
  }

  for (let j = 0; j < stringOfIntTwo.length; ++j) {
    const number = stringOfIntTwo[j];
    if (hashTable[number]) {
      hashTable[number]--;
    } else {
      return false;
    }
  }
  return true;
}

// Coding Exercise - 4
/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
there are any duplicates among the arguments passed in.*/
function areThereDuplicates(...value) {
  if (value.length === 0) {
    return false;
  }
  value.sort((a, b) => a > b);

  let pointerOne = 0;
  for (let pointerTwo = 1; pointerTwo < value.length; ++pointerTwo) {
    if (value[pointerOne] !== value[pointerTwo]) {
      pointerOne++;
    } else {
      return true;
    }
  }
  return false;
}

// Coding Exercise - 5
/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair
of values in the array where the average of the pair equals the target average. There may be more than on pair that matches
the average target.*/
function averagePair(arr, avg) {
  if (arr.length === 0 || avg === 0) {
    return false;
  }

  let pointerTwo = 2;
  for (let pointerOne = 0; pointerOne < arr.length; ++pointerOne) {
    const averageTotal = (arr[pointerOne] + arr[pointerTwo]) / 2;

    if (pointerOne === pointerTwo) {
      pointerTwo += 2;
      pointerOne--;
    } else if (averageTotal === avg) {
      return true;
    }
  }
  return false;
}

// Coding Exercise - 6
/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
subsequence of the characters in the second string. In other words, the function should check whether the characters
in the first string appear somewhere in the second string. Without their order changing.*/

function isSubsequence(str, random) {
  if (str.length === 0 || random.length === 0) {
    return false;
  }

  const newArr = [];
  let pointerOne = 0;
  for (let pointerTwo = 0; pointerTwo < random.length; ++pointerTwo) {
    if (str[pointerOne] === random[pointerTwo]) {
      newArr.push(random[pointerTwo]);
      pointerOne++;
    }
  }
  const newStr = newArr.join("");
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

//console.log(isSubsequence("ABAD", "BACBAD"))

// Google Interview Question: Involving subsequence
/* Write a function that takes two strings S1, and S2 and returns the longest common
sequence of s1 and s2

EX:
ABAZDC, BACBAD => ABAD

Next: Give me the Time Complexity of your solution.
*/
function isLongestSubsequence(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return false;
  }

  const newArr = [];
  let p1 = 0;
  let p2 = 0;

  const recursiveFunction = () => {
    console.log("POINTER TWO: ", p2, "POINTER ONE: ", p1);
    if (p2 + 1 === s2.length) {
      p1++;
      p2 = 0;
      console.log(p1);
      console.log(p2);
      console.log(s1[p1]);
      while (p2 < s2.length) {
        console.log(s2[p2]);
        if (s1[p1] !== s2[p2]) {
          console.log("POINTER TWO: ", s2[p2]);
          p2++;
        }
      }
    }

    for (let i = 0; i < s2.length; ++i) {
      console.log("POINTER ONE: ", s1[p1], "POINTER TWO: ", s2[i]);
      // console.log("S2 LENGTH: ", s2.length, "POINTER TWO: ", i);
      if (s1[p1] === s2[i]) {
        console.log("POINTER ONE PUSH: ", s1[p1], "POINTER TWO: ", s2[i]);
        newArr.push(s2[i]);
        p1++;
        return recursiveFunction();
      } else if (i + 1 === s2.length) {
        p2 = i;
        return recursiveFunction();
      }
    }
  };
  recursiveFunction();
  return newArr;

  // const newStr = newArr.join("")
  // return newStr;
  // if (str === newStr) {
  //   return true
  // } else {
  //   return false
  // }
}

// coding exercise - 7
/*
Given an array of integers and a whole number, write a function called maxSubarraySum, which finds the maximum sum of the subarray with the length of the number passed to the function.

Note: The subarray must consist of consecutive elements from the original array.
*/

// function maxSubarraySum(arr, subarrayLength) {
//   let p2 = subarrayLength;
//   let p1 = 0;
//   let total = [];

//   for (let i = p1; i < p2; ++i) {}

//   total.reduce((subtotal, num) => {
//     console.log(subtotal);
//   });
// }

// maxSubarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 4);
