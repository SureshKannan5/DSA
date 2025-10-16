const array = [1, 2, 3, 4, 5];

let sum = 0;

let product = 1;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

for (let i = 0; i < array.length; i++) {
  product *= array[i];
}

//Time complexity = O(n) + o(n) => O(2n) => O(n);

// Space complexity = O(1)

function printON2Complexity() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// Time Complexity => O(n^2)

// Permutation problem;

const text = "ABC";

function permutation(str) {
  console.log(`${str} `);
}

function calcPer(str, perfix) {
  if (str.length === 0) {
    console.log("===>", perfix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);

      console.log("str==>", str);

      console.log(rem, perfix, str.charAt(i));
      calcPer(rem, perfix + str.charAt(i));
    }
  }
}

// calcPer("ABC", "");

function powerOf2(n) {
  if (n < 1) return 0;
  if (n === 1) {
    console.log(1);
    return 1;
  }

  const prev = powerOf2(Math.floor(n / 2));

  const curr = prev * 2;
  console.log(curr);

  return curr;
}

function integerDivision(a, b) {
  let sum = b;
  let count = 0;

  while (sum <= a) {
    sum += b;
    count++;
  }
  console.log(sum, count);
}

function sqrtHelper(n, min, max) {
  if (max < min) return -1;

  const guess = Math.floor((min + max) / 2);

  const squartValue = guess * guess;

  if (squartValue === n) return guess;

  if (squartValue < n) return sqrtHelper(n, guess + 1, max);

  return sqrtHelper(n, min, guess - 1);
}

function sqrt(n) {
  let finalAns = -1;
  for (let i = 0; i * i <= n; i++) {
    if (i * i === n) {
      finalAns = i;
    }
  }

  return finalAns;
}

console.log(sqrt(100));
