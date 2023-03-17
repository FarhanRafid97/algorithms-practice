var lengthOfLastWord = function (s) {
  const test = s.split(' ');
  const filtered = test.filter((d) => d !== '');
  return filtered[filtered.length - 1].split('').length;
};

console.log(lengthOfLastWord('fly me to the sharddd    '));
