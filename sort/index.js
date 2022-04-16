// Bubble Sort *unoptimized approach*
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; --i) {
    console.log("Position of i", i);
    for (let j = 0; j < i - 1; ++j) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 28, 45, 8]));
