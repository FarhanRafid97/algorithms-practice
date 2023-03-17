const subArray = (arr, n, k) => {
  const arrSub = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
    } else {
      arrSub.push(arr[i]);
      if (arrSub.reduce((a, b) => a + b) === k) {
        return arrSub;
      }
    }
  }
};

console.log(subArray([11, 3, 5, 2, 2, 5, 1, 0], 8, 9));
