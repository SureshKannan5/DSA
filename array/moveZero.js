const moveZero = (nums) => {
  let nonzero = 0;

  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === 0 && p2 < nums.length - 1) {
    //   while (nums[p2] === 0) {
    //     p2++;
    //   }

    //   if (p2 > nums.length - 1) {
    //     return nums;
    //   }

    //   const temp = nums[i];

    //   nums[i] = nums[p2];

    //   nums[p2] = temp;
    // } else {
    //   p2++;
    // }

    if (nums[i] !== 0) {
      // Swap non-zero element with the element at `nonzero`
      [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
      nonzero++;
    }
  }
  return nums;
};

console.log(moveZero([0, 1, 0, 3, 12]));
