var toLowerCase = function (s) {
  return s
    .split('')
    .map((d) => d.toLowerCase())
    .join('');
};

toLowerCase('TEST');
