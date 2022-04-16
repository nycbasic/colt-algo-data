// Solution #1: Bubble Sort *Unoptimized Approach*
function bubbleSort(arr) {
  // Variable stops unccessary iteration
  let noSwap;
  // Sets the position of where to stop the inner loop
  for (let i = arr.length; i > 0; --i) {
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
  for (let i = 0; i < arr.length; ++i) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort2([34, 22, 10, 19, 17]));

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
