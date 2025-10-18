function insertionSort(nums) {
  //   const sorted = [nums[0]]; => HAS O(n2) and O(n) space

  //   for (let i = 1; i < nums.length; i++) {
  //     for (let j = sorted.length - 1; j >= 0; j--) {
  //       if (nums[i] < sorted[j]) {
  //         [sorted[j], sorted[j + 1]] = [nums[i], sorted[j]];
  //       } else if (j === sorted.length - 1) {
  //         sorted[j + 1] = nums[i];
  //       }
  //     }
  //   }

  //   return sorted;

  // solved it O(1) space;

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    let prev = i - 1;

    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }

  return nums;
}

console.log(insertionSort([74, 98, 56, 2, -10, 89, 65, 43, 78, 0, 1]));
