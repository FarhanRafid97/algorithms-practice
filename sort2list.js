var mergeTwoLists = function (list1, list2) {
  return list1.concat(list2).sort((a, b) => a - b);
};
console.log(mergeTwoLists([2, 3, 4, 1], [3, 3, 1, 1]));
