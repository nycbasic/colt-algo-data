// Bubble Sort *unoptimized approach*
function bubbleSort(arr) {
    // Sets the position of where to stop the inner loop
  for (let i = arr.length; i > 0; --i) {
    // Loop for the logic starting at the first position
    console.log("Position of i", i);
    for (let j = 0; j < i - 1; ++j) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // Sets the current largest val
        let temp = arr[j];
        // Sets the current val to the largest val
        arr[j] = arr[j + 1];
        // Sets the new largest val
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 28, 45, 8]));
