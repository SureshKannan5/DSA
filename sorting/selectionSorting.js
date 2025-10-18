function selectionSorting(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (nums[i] > nums[minIndex]) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }

  return nums;
}

console.log(selectionSorting([10, 0, 0, 3, 2, 5, -1, -110]));
