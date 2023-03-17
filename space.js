const encrypt = (event, obj) => {
  var encrypted = '';
  var keyLength = 100;

  for (var i = 0; i < event.length; i++) {
    var ascii = event.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii = ascii + (keyLength % 26);
      if (ascii > 90) {
        ascii = ascii - 26;
      }
    } else if (ascii >= 97 && ascii <= 122) {
      console.log('asscii', ascii);
      ascii = ascii + (keyLength % 26);
      if (ascii > 122) {
        ascii = ascii - 26;
      }
    }
    var res = String.fromCharCode(12);
    console.log(res);
    encrypted = encrypted + res;
  }

  return encrypted;
};

console.log(encrypt('sss'));
