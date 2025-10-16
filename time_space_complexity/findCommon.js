const arr1 = [13, 27, 35, 40, 49, 55, 59];
const arr2 = [17, 35, 39, 40, 55, 58, 60];

// Brute force solution => O(n^2)

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] === arr1[i]) {
      console.log(arr1[i]);
    }
  }
}

// optimal Algorithm => O(A + B)

const map = new Map();

for (let i = 0; i < arr1.length; i++) {
  map.set(arr1[i], arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  if (map.get(arr2[i])) {
    console.log(map.get(arr2[i]));
  }
}

function binarySearch(arr, searchElement) {
  const searchIndex = Math.ceil(arr.length / 2);

  const middleElement = arr[searchIndex];

  if (middleElement === searchElement) {
    return middleElement;
  }
  if (arr.length === 1 && middleElement === searchElement) return middleElement;

  if (arr.length === 0) return -1;

  const newArray =
    middleElement > searchElement
      ? arr.slice(0, searchIndex)
      : arr.slice(searchIndex, arr.length);

  return binarySearch(newArray, searchElement);
}

// Binary search solution => 0(nlog(n))
for (let i = 0; i < arr1.length; i++) {
  const search = binarySearch(arr2, arr1[i]);

  if (search !== -1) {
    console.log("binary", search);
  }
}

// merge sort solution (O(n) solution)

let i = 0; // pointer for A
let j = 0; // pointer for B

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    console.log(arr1[i]);
    i++;
    j++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}
