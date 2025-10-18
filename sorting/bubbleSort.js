const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let allSorted = true;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        allSorted = false;
      }
    }

    if (allSorted) return nums;
  }

  return nums;
};

console.log(bubbleSort([1, 2, 6, 5]));

const students = [
  { name: "Asha", score: 78 },
  { name: "Rahul", score: 92 },
  { name: "Kiran", score: 63 },
  { name: "Deepa", score: 45 },
];

const bubbleSort2 = () => {
  for (let i = 0; i < students.length; i++) {
    let allSorted = true;
    for (let j = 0; j < students.length; j++) {
      if (students[j].score > students[j + 1]?.score) {
        [students[j], students[j + 1]] = [students[j + 1], students[j]];
        allSorted = false;
      }
    }

    console.log(i, allSorted);
  }

  return students;
};

// console.log(bubbleSort2());
