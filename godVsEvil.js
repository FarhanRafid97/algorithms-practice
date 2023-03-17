function goodVsEvil(good, evil) {
  const godPower = [1, 2, 3, 3, 4, 10];
  const evilPower = [1, 2, 2, 2, 3, 5, 10];
  const goodScoreArr = good
    .split(' ')
    .map((d, i) => Number(d) * godPower[i])
    .reduce((a, b) => a + b);
  const evilScoreArr = evil
    .split(' ')
    .map((d, i) => Number(d) * evilPower[i])
    .reduce((a, b) => a + b);
  if (goodScoreArr === evilScoreArr) {
    return 'Battle Result: No victor on this battle field';
  }
  if (goodScoreArr > evilScoreArr) {
    return 'Battle Result: Good triumphs over Evil';
  }
  if (goodScoreArr < evilScoreArr) {
    return 'Battle Result: Evil eradicates all trace of Good';
  }
}
