var deleteDuplicates = function (head) {
  let duplicate = 0;

  return head.filter((d) => {
    if (duplicate !== d) {
      duplicate = d;
      return d;
    }
  });
};

console.log(deleteDuplicates([1, 2, 3, 3, 4, 4, 5, 5]));
