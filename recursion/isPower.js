const isPower = (n) => {
  //   if (n === 1) return true;

  //   if (n % 2 !== 0 || n < 1) return false;

  //   return isPowerOfTwo(n / 2);
  if (n <= 0) return false;

  // A power of two has only one bit set in binary form
  return (n & (n - 1)) === 0;
};

console.log(3 & 2);
