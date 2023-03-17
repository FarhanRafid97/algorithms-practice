function pascalToCamel(str) {
  const camelArr = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      camelArr.push(str[i].toLowerCase());
    } else {
      camelArr.push(str[i]);
    }
  }
  console.log(camelArr.join(''));
}
pascalToCamel('DataSayaSendiri');
