var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let a = i + 1; a < nums.length; a++) {
      if (nums[i] + nums[a] === target) {
        return [i, a];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 6));
