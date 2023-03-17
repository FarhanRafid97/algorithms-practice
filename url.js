function domainName(url) {
  const d = url.replaceAll(/^(http:\/\/|https:\/\/|www\.)/g, '');
  console.log(url.replaceAll(/^(http:\/\/|https:\/\/|www\.)/g, ''));
  //   if (url.includes('htt')) {
  //     const a = url.split('.');
  //     const d = a[0].split('/');
  //     console.log(a);
  //     return d[d.length - 1];
  //   }
  //   if (url.includes('www')) {
  //     const a = url.split('.');

  //     return a[1];
  //   }
  //   const ass = url.split('.');
  //   return ass[0];
}

domainName('http://www.yqodt28.br/index.php');
