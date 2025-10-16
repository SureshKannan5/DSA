// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// function checkIfPresent(arr, element) {
//   let isPresent = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       isPresent = true;
//       break;
//     }
//   }

//   return isPresent;
// }
// var removeDuplicates = function (nums) {
//   const expectedNums = [];

//   let index = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const isElementPresent = checkIfPresent(expectedNums, nums[i]);

//     if (!isElementPresent) {
//       if (index === i) {
//         expectedNums.push(nums[i]);
//         index++;
//       } else {
//         const temp = nums[index];
//         nums[index] = nums[i];
//         nums[i] = temp;
//         index++;
//       }
//     }
//   }
//   return nums;
// };

// Binary solution = O(n*logk)

/**
 * @param {number[]} nums
 * @return {number}
 */

// function checkIfPresent(arr, target) {
//   let left = 0;

//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return true;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return false;
// }
// var removeDuplicates = function (nums) {
//   const expectedNums = [];

//   let index = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const isElementPresent = checkIfPresent(expectedNums, nums[i]);

//     console.log(isElementPresent);

//     if (!isElementPresent) {
//       expectedNums.push(nums[i]);

//       if (index === i) {
//         index++;
//       } else {
//         const temp = nums[index];
//         nums[index] = nums[i];
//         nums[i] = temp;
//         index++;
//       }
//     }
//   }
//   return expectedNums;
// };

// const removeDuplicates = (nums) => {
//   let index = 0;

//   const expectedMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const isElementPresent = expectedMap.get(nums[i]);
//     console.log(expectedMap);

//     if (isElementPresent === undefined) {
//       expectedMap.set(nums[i], nums[i]);
//       if (index === i) {
//         index++;
//       } else {
//         const temp = nums[index];
//         nums[index] = nums[i];
//         nums[i] = temp;
//         index++;
//       }
//     }
//   }
//   return expectedMap.size;
// };

// console.log(removeDuplicates([1, 1, 2]));

const removeDuplicates = (nums) => {
  let uniqueIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
