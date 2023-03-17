function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const array = [1, 5, 1, 2, 3, 2, 4, 5, 6, 7, 5].sort();
console.log(array[8]);
const data = 5;
console.log(binarySearch(array, data));
