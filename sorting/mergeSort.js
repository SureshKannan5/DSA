const inPlaceMergeArray = (num1, num2) => {
  //optimal solution
  let p1 = num1?.length - 1;
  let p2 = num2?.length - 1;

  let p = num1?.length + num2?.length - 1;

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

const mergeArray = (left, right) => {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) merged.push(left[i++]);
  while (j < right.length) merged.push(right[j++]);

  return merged;
};

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));

  const right = mergeSort(array.slice(middle));

  return mergeArray(left, right);
}

console.log(mergeSort([8, 7, 9, 2, 1, 0]));
