// Given a smaller strings and a bigger string b, design an algorithm to find all permutations
// of the shorter string within the longer one. Print the location of each permutation.

const a = "abbc";

const original = "cbaadcbbabbcbabaabccbabc";

const letterLength = a.length;

function checkEveryPresent(slicedPortion) {
  let isEvery = false;

  if (slicedPortion.length < letterLength) return false;

  for (let i = 0; i < a.length; i++) {
    if (slicedPortion.includes(a[i])) {
      isEvery = true;
    } else {
      isEvery = false;
      break;
    }

    console.log(a[i], isEvery);
  }

  return isEvery;
}
let count = 0;
for (let i = 0; i < original.length; i++) {
  // => b times
  const slicedPortion = original.substring(i, i + letterLength);

  const isPresent = checkEveryPresent(slicedPortion);

  if (isPresent) {
    count++;
    console.log(`position from ${i} to ${i + letterLength}`);
  }
}

console.log("Total Permutations", count);
