// Bubble Sort
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; --i) {
    // let noSwap;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // noSwap = false;
      }
    }
    // if(noSwap) break;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

// Insertion Sort
// [2, 1, 4]
// [2, 2, 4]
// [1, 2, 4]

// j = 2
// i = 4
function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let currentVal = arr[i]; // 2
    for (var j = i - 1; j >= 0 && arr[j] /*2*/ > currentVal /*4*/; --j) {
      arr[j + 1] /**/ = arr[j]; /**/
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

print(insertionSort([2, 1, 4]));

function print(func) {
  console.log(func);
}

function printIndex(idx, idx2) {
  console.log(`Index of i: ${idx}  Index of j: ${idx2}`);
}
