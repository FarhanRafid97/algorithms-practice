const dateToRender = (date) => {
  const dateArray = date.split('');
  const year = [];
  const month = [];
  const day = [];
  for (let i = 0; i < dateArray.length; i++) {
    if (i < 4) {
      year.push(dateArray[i]);
    }
    if (i >= 4 && i < 6) {
      month.push(dateArray[i]);
    } else if (i >= 6 && i < 8) {
      day.push(dateArray[i]);
    }
  }
  const aa = '';
  console.log(!!aa);
  return [year.join(''), month.join(''), day.join('')].join('-');
};

dateToRender('20220203');
