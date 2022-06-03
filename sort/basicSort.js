// Solution #1: Bubble Sort *Unoptimized Approach*
// has issues with making unecessary comparison
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      console.log(`Left: ${arr[j]} Right: ${arr[j + 1]}`);
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("PASS COMPLETE");
  }
  return arr;
}

// Solution #2  Optimized Approach
function bubbleSort2(arr) {
  // Variable stops unccessary iteration
  let noSwap;
  // Keeps the count of the number of times to iterate throught the arr.
  for (let i = arr.length; i > 0; --i) {
    noSwap = true;
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
function bubbleSort3(arr) {
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

// Solution #2: Selection Sort *Unoptimized Approach*
function selectionSort2(arr) {
  const swap = (arr, idx, idx2) => {
    return [arr[idx], arr[idx2]] = [arr[idx2], arr[idx]];
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
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; --j) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return arr;
}

console.log(insertionSort([3, 56, 1, 2, 45, 23]));
//                        [1, 2, 3, 23, 45, 56]
// i = null
// j = 2
// currentVal = null
// arr[j] = null
