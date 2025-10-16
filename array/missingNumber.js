function findMissing(nums) {
  //   for (let i = 0; i <= nums.length; i++) {
  //     const isElementPresent = checkElementIsPresent(i, nums);

  //     if (!isElementPresent) {
  //       return i;
  //     }
  //   }

  //optimal solutions;

  const total = nums.reduce((a, b) => a + b, 0);

  const length = nums.length;

  const n = (length * (length + 1)) / 2;

  return n - total;
}

function checkElementIsPresent(element, nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === element) {
      return true;
    }
  }

  return false;
}

console.log(findMissing([9, 6, 4, 2, 3, 5, 7, 0, 1]));
