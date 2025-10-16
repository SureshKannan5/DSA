const removeElement = (nums, val) => {
  //   let uniqueCharacterIndex = nums.length - 1;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (
  //       nums[i] === val &&
  //       uniqueCharacterIndex > i &&
  //       uniqueCharacterIndex > 0
  //     ) {
  //       while (nums[uniqueCharacterIndex - 1] === val) {
  //         uniqueCharacterIndex--;
  //       }

  //       if (uniqueCharacterIndex >= 0) {
  //         const temp = nums[i];
  //         nums[i] = nums[uniqueCharacterIndex - 1];

  //         nums[uniqueCharacterIndex - 1] = temp;
  //       }
  //     } else if (nums.length === 1) {
  //       if (nums[i] !== val) {
  //         uniqueCharacterIndex++;
  //       }
  //     }
  //   }

  //   console.log(uniqueCharacterIndex);
  //   return nums;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3, 4, 3, 5], 3));
