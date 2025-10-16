function stringCompression(str) {
  let newString = "";

  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    counter++;

    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      newString += `${str[i]}${counter}`;
      counter = 0;
    }
  }

  return str.length < newString.length ? str : newString;
}

console.log(stringCompression("abccba"));

// time and space complexity will be 0(n)
