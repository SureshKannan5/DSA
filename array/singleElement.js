const singleNumber = (nums) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     let isPresent = false;

  //     for (let j = 0; j < nums.length; j++) {
  //       console.log(nums[i], nums[j], isPresent);
  //       if (nums[i] === nums[j] && i !== j) {
  //         isPresent = true;
  //         break;
  //       }
  //     }

  //     if (!isPresent) return nums[i];
  //   }

  // you can use hash map also and count it's frequency.

  // optimal xor solutions;

  return nums.reduce((a, b) => a ^ b, 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
