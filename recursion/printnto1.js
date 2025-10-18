// print n to 1 using recursion;

function printNum(num) {
  if (num === 0) return;

  console.log(num);

  num -= 1;

  printNum(num);
}

printNum(5);
