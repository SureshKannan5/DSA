function isPermutation(strA, strB) {
  if (strA.length !== strB.length) return false;

  const firstMap = new Map();

  const secondMap = new Map();

  for (let i = 0; i < strA.length; i++) {
    const value = firstMap.get(strA[i]);

    if (value) {
      firstMap.set(strA[i], value + 1);
    } else {
      firstMap.set(strA[i], 1);
    }
  }

  for (let i = 0; i < strB.length; i++) {
    const value = secondMap.get(strB[i]);

    if (value) {
      secondMap.set(strB[i], value + 1);
    } else {
      secondMap.set(strB[i], 1);
    }
  }

  let isPermutation = false;

  console.log(firstMap, secondMap);

  for (let i = 0; i < strA.length; i++) {
    const firstTableValue = firstMap.get(strA[i]);

    const secondTableValue = secondMap.get(strA[i]);

    console.log(firstTableValue, secondTableValue);

    if (!firstTableValue || !secondTableValue) {
      return false;
    }

    if (firstTableValue === secondTableValue) {
      isPermutation = true;
    } else {
      isPermutation = false;
    }
  }
  return isPermutation;
}

console.log(isPermutation("dogd", "dog "));

// Time complexity => O(A+B+A) => O(2A+B)

// space complexity => O(A+B)
