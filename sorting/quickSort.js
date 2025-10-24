const arr = [3, 1, 8, 5, 9, 4, 2];

const quickSort = (arr, left, right) => {
  if (left >= right) return;

  const index = partition(arr, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];

  console.log(pivot);

  while (left <= right) {
    while (arr[left] < pivot) left++;

    while (arr[right] > pivot) right--;

    console.log(left, right);

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }

  return left;
};

console.log(quickSort(arr, 0, 6));
