const palindrom = (word) => {
  const wordReverse = word.split('').reverse().join('');
  return word === wordReverse;
};
