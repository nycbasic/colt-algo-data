// Solution: Merge Sort
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // Loop that does the comparison
  while (i < arr1.length && j < arr2.length) {
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
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[0];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; ++i) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function testFunction(idx, idx2) {
  console.log(`index of j: ${idx}   index of i: ${idx2}`);
}
