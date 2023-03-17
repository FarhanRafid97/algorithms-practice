var hammingDistance = function (x, y) {
  let lowestNumber = [x, y].sort((a, b) => a - b)[0];
  let higherNumber = [x, y].sort((a, b) => a - b)[1];
  const length = higherNumber.toString();
  const zero = (p, a) => {};
  let dif = 0;

  for (let i = 1; lowestNumber < higherNumber - 1; ) {
    lowestNumber += i;
    dif += i;
  }
  return dif;
};
hammingDistance(3, 1);
