// Bubble Sort

// Not Optimal Solution
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; --i) {
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Optimization for persistent swaps Solution
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; --i) {
    noSwaps = true;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
