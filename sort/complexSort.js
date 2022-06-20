// Solution: Merge Sort
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // Loop that does the comparison
  while (i < arr1.length && j < arr2.length) {
    checkFunction(i, j);
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
  let temp = arr[i]; // 1
  arr[i] = arr[j]; // 9
  arr[j] = temp; // 9
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start; // 1

  for (let i = start + 1; i < arr.length; ++i) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([2, 9, 5, 1, 24, 3, 7, 34]));

function checkFunction(idx, idx2) {
  console.log(`index of j: ${idx}   index of i: ${idx2}`);
}
