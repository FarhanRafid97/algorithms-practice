var addStrings = function (num1, num2) {
  let intNum1 = num1 * 1;
  let intNum2 = num1 * 1;
  console.log(typeof intNum2, intNum2);
  const hasil = intNum1 + intNum2;

  return Number.MIN_SAFE_INTEGER(hasil).toString();
};

console.log(addStrings('9333852702227987', '85731737104263'));
