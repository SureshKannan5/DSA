/*URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith" */

const url = [
  "m",
  "r",
  " ",
  "J",
  "o",
  "h",
  "n",
  " ",
  "s",
  "m",
  "i",
  "t",
  "h",
  " ",
  " ",
];

const printLength = 13;

// for (let i = 0; i < printLength; i++) {
//   if (url[i] === " ") {
//     url[i] = replacingWord;
//   }
// }

// original goal is without modify original string we have to do.

let spaceCount = 0;

for (let i = 0; i < printLength; i++) {
  if (url[i] === " ") {
    spaceCount++;
  }
}

let modifiedLength = printLength + spaceCount * 2;

for (i = printLength - 1; i >= 0; i--) {
  if (url[i] === " ") {
    url[modifiedLength - 1] = "0";
    url[modifiedLength - 2] = "2";
    url[modifiedLength - 3] = "%";
    modifiedLength -= 3;
  } else {
    url[modifiedLength - 1] = url[i];
    modifiedLength--;
  }
}

console.log(url);
