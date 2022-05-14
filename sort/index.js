// Solution #1: Bubble Sort *Unoptimized Approach*
function bubbleSort(arr) {
  // Variable stops unccessary iteration
  let noSwap;
  // Keeps the count of the number of times to iterate throught the arr.
  for (let i = arr.length; i > 0; --i) {
    // Loop for the logic to make comparisons if a swap is needed.
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        // Sets the current largest val
        let temp = arr[j];
        // Sets the current val to the largest val
        arr[j] = arr[j + 1];
        // Sets the new largest val
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// Solution #2: Bubble Sort *Unoptimized Approach*
function bubbleSort2(arr) {
  const swap = (arr, idx, idx2) => {
    [arr[idx], arr[idx2]] = [arr[idx2], arr[idx]];
  };

  for (let i = arr.length; i > 0; --i) {
    let noSwap;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// Solution #1: Selection Sort *Unoptimized Approach*
function selectionSort(arr) {
  // Loop the set the number of iterations of the array.
  for (let i = 0; i < arr.length; ++i) {
    // Sets the lowest position index
    let min = i;
    // Loop that does the logic comparison for each item in the array.
    for (let j = i + 1; j < arr.length; ++j) {
      testFunction(i, j);
      console.log(arr[min])
      // if the second pointer is less than the first pointer
      if (arr[j] < arr[min]) {
        // Set the second pointer as the new 2
        min = j;
      }
      // Continue the loop
    }
    // if the first pointer position is not equal to the set lowest position
    if (i !== min) {
      // Swap the lowest value with the current first pointer value
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 99, 2, 45, 10, 34, 9]));

// Solution #2: Selection Sort *Unoptimized Approach*
function selectionSort2(arr) {
  const swap = (arr, idx, idx2) => {
    [arr[idx], arr[idx2]] = [arr[idx2], arr[idx]];
  };

  for (let i = 0; i < arr.length; ++i) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

// Solution #1: Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; --j) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSort([3, 56, 1, 2, 45, 23]));
//                         [1, 2, 3, 23, 45, 56]
// i = null
// j = 2
// currentVal = null
// arr[j] = null

// Solution: Merge Sort
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // Loop that does the comparison
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // if the first array still has data
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // if the second array still has data
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // splits the array in the middle
  let mid = Math.floor(arr.length / 2);

  // Left array splits again, with new mid-point
  let left = mergeSort(arr.slice(0, mid));

  // Right array splits again, with new mid-point
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Solution #1: Quick Sort
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[0];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; ++i) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}



function testFunction(idx, idx2) {
  console.log(`index of j: ${idx}   index of i: ${idx2}`);
}
