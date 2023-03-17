const isPalindrome = function (x) {
  const varNum = x.toString();
  return varNum === varNum.split('').reverse().join('') ? true : false;
};

console.log(isPalindrome(1221));
