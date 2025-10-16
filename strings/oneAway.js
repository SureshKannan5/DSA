// function checkStrOneAway(str1, str2) {
//   if (str1.length === str2.length) {
//     return checkOneStepReplace(str1, str2);
//   } else if (str1.length + 1 === str2.length) {
//     return checkOneStepInsert(str1, str2);
//   } else if (str1.length - 1 === str2.length) {
//     return checkOneStepInsert(str2, str1);
//   }

//   return false;
// }

// function checkOneStepInsert(str1, str2) {
//   let index1 = 0;

//   let index2 = 0;

//   while (index1 < str1.length && index2 < str2.length) {
//     if (str1[index1] !== str2[index2]) {
//       if (index1 !== index2) return false;
//       index2++;
//     } else {
//       index1++;
//       index2++;
//     }
//   }

//   return true;
// }

// function checkOneStepReplace(str1, str2) {
//   let oneStepReplace = false;

//   for (let index = 0; index < str1.length; index++) {
//     if (str1[index] !== str2[index]) {
//       if (oneStepReplace) return false;
//       oneStepReplace = true;
//     }
//   }

//   return oneStepReplace;
// }

// const result = checkStrOneAway("pale", "ple");

// console.log(result);
// #Another Approach;

function oneStepEditAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  const shorterString = str1.length > str2.length ? str2 : str1;

  const longerString = str1.length > str2.length ? str1 : str2;

  let index1 = 0;

  let index2 = 0;

  let foundDifference = false;

  while (index2 < longerString.length || index1 < shorterString.length) {
    console.log(longerString[index2], shorterString[index1]);

    if (longerString[index2] !== shorterString[index1]) {
      if (foundDifference) return false;
      foundDifference = true;

      if (longerString.length === shorterString.length) {
        index1++;
      }
    } else {
      index1++;
    }

    index2++;
  }

  return foundDifference;
}

console.log(oneStepEditAway("mark", "marks"));
