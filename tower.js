function towerBuilder(nFloors) {
  const arr = [];
  const start = '*';
  const space = ' ';
  console.log(space.repeat(5) + 'aa');
  for (let i = 0; i < nFloors; i++) {
    console.log(nFloors);
    if (i === 0) {
      const spaces1 = space.repeat(nFloors - 1 - i);
      const startsZero2 = start.repeat(i + 1);
      const spaces2 = space.repeat(nFloors - 1 - i);
      arr.push(spaces1 + startsZero2 + spaces2);
    } else {
      const space1 = space.repeat(nFloors - 1 - i);
      const startsZero = start.repeat(
        arr[i - 1].replaceAll(' ', '').length + 2
      );
      const space2 = space.repeat(nFloors - 1 - i);
      arr.push(space1 + startsZero + space2);
    }
  }
  return arr;
}

console.log(towerBuilder(5));
