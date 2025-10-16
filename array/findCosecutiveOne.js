const nums = [1, 1, 0, 1, 1, 1];

let max = 0;

let counter = 0;

for (let index = 0; index < nums.length; index++) {
  if (nums[index] === 1) {
    counter++;

    if (max < counter) {
      max = counter;
    }
  } else {
    counter = 0;
  }
}

console.log(max);

// Time complexity o(n) and space O(1)
