var plusOne = function (digits) {
  let i = digits.length - 1;

  while (digits[i] == 9) {
    digits[i] = 0;
    --i;
  }

  if (digits[i] || digits[i] == 0) digits[i] = digits[i] + 1;

  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9]));
