var searchInsert = function (nums, target) {
  let inset = 0;
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (nums[i] === target || target < nums[i]) {
      break;
    }
    inset += 1;
  }
  return inset;
};

console.log(searchInsert([1, 3, 5, 6], 2));
