// Bubble Sort
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; --i) {
    let noSwap;
    for (let j = 0; j < i - 1; ++j) {
      printIndex(i, j);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        nowSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

print(bubbleSort([4, 9, 5, 8, 2, 1]));

function print(func) {
  console.log(func);
}

function printIndex(idx, idx2) {
  console.log(`Index of i: ${idx}  Index of j: ${idx2}`);
}
