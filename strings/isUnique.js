const str = "abcdefg";

let isUnique = true;

// time complexity => 0(n) space => O(1)

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      isUnique = false;
      break;
    }
  }
}

console.log(isUnique);

//

function checkIsUnique(str) {
  const map = new Map();

  if (str.length > 126) return false;

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (map.get(character)) {
      return false;
    }

    map.set(character, true);
  }

  return true;
}

console.log(checkIsUnique("abcdef"));
