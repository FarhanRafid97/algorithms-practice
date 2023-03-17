var addTwoNumbers = function (l1, l2) {
  const result = Number(l1.join('')) + Number(l2.join(''));
  const returnResult = result.toString().split('');
  return returnResult.map((d) => Number(d));
};

console.log(addTwoNumbers([1, 2, 3, 4], [2, 3, 4, 5]));
