// merge sorted array.

const mergeArray = (num1, m, num2, n) => {
  //optimal solution
  let p1 = m - 1;
  let p2 = n - 1;

  let p = m + n - 1;

  while (p2 >= 0) {
    if (num1[p1] >= num2[p2]) {
      num1[p] = num1[p1];
      p1--;
      p--;
    } else {
      num1[p] = num2[p2];
      p--;
      p2--;
    }
  }

  console.log(num1);

  return num1;
};

mergeArray([1, 3, 5, 7], 4, [2, 4, 8, 9], 4);
