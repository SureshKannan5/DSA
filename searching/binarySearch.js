const binarySearch = (nums, target) => {
  let low = 0;

  let high = nums.length - 1;

  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    console.log(mid);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};

const recursiveBinarySearch = (nums, target, low, high) => {
  const mid = Math.floor((low + high) / 2);

  if (low > high) return -1;

  if (nums[mid] === target) return mid;

  nums[mid] < target ? (low = mid + 1) : (high = mid - 1);

  return recursiveBinarySearch(nums, target, low, high);
};

console.log(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 9, 0, 6));
