function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
}

console.log(sort([2, 5, 9, 4]));
