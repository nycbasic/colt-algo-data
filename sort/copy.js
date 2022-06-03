// Bubble Sort
function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; --i) {
    noSwap = true;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
}


function bubbleSort2(arr) {
  let noSwap;
  for(let i = 0; i < arr.length; ++i) {
    noSwap = true;
    for(let j = 0; j < arr.length; ++j) {
      printIndex(i, j)
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
      if(noSwap) break;
    }
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      printIndex(i, j)
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      // [arr[i], arr[min]] = [arr[min], arr[i]];
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
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
    for (let j = i - 1; j >= 0 && arr[j] /*2*/ > currentVal /*1*/; --j) {
      arr[j + 1] /*1*/ = arr[j]; /*2*/
      arr[j] = currentVal;
    }
  }
  return arr;
}

print(selectionSort([2, 1, 9, 76, 4]));
//               [1, 2, 4, 9, 76] 
// Pass: 2
function print(func) {
  console.log(func);
}

function printIndex(idx, idx2) {
  console.log(`Index of i: ${idx}  Index of j: ${idx2}`);
}

var insertionSortList = function (head) {
  for (let i = 1; i < head.length; ++i) {
    let currentVal = head[i];
    for (let j = i - 1; j >= 0 && head[j] > currentVal; --j) {
      head[j + 1] = head[j];
      head[j] = currentVal;
    }
  }
  return head;
};

console.log(insertionSortList([4,2,1,3]))