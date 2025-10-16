const input = [
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 0, 0],
];

for (let i = 0; i < input.length / 2; i++) {
  for (let j = 0; j < input.length; j++) {
    const temp = input[j][i];
    input[i][j] = input[j][input.length - 1 - i];
    input[input.length - 1 - i][j] = temp;
    console.log("ip=>", input);
  }
}

console.log(input);
