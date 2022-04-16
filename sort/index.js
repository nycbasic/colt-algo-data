// Solution #1: Bubble Sort *Unoptimized Approach*
function bubbleSort(arr) {
  // Sets the position of where to stop the inner loop
  for (let i = arr.length; i > 0; --i) {
    // Checks to see if there are any swaps to stop repeatitive iteration
    let noSwap;
    // Loop for the logic starting at the first position
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
    if (noSwap) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort2([38, 20, 45, 6]));

// Solution #2: Bubble Sort *Unoptimized Approach*
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
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
