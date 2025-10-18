const sumArray = (array, index) => {
  const currentValue = array[index];

  if (array.length - 1 === index)
    return currentValue % 2 === 0 ? 0 : array[index];

  return (
    (currentValue % 2 === 0 ? 0 : currentValue) + sumArray(array, index + 1)
  );
};

console.log(sumArray([1, 2, 3, 4, 5, 6, 7], 0));
