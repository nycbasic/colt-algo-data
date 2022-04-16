// Example #1 of a recursive function
function countdown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}

// Example #2 of a recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}


// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
// return 3 + 2 + 1

// Example # of recursive function
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(2))



// Example of Helper Method Recursion
function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}



// Example of a Pure Recursion
function collectOddValues2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}
