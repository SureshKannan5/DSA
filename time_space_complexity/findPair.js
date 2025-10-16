const ip = [1, 7, 5, 9, 2, 12, 3];

const k = 2;

const set = new Set(ip);

console.log(set);

let count = 0;

for (const num of ip) {
  if (set.has(num + k)) count++;
  if (set.has(num - k)) count++;
}

console.log(count / 2);

function findingQuartables(n) {
  const map = new Map();

  for (let c = 0; c < n; c++) {
    for (let d = 0; d < n; d++) {
      const sum = c ** 3 + d ** 3;

      if (!map.has(sum)) {
        map.set(sum, []);
      }

      map.get(sum).push([c, d]);
    }
  }

  console.log(map);

  const results = [];
  for (const [sum, pairs] of map.entries()) {
    for (let i = 0; i < pairs.length; i++) {
      for (let j = 0; j < pairs.length; j++) {
        const [a, b] = pairs[i];
        const [c, d] = pairs[j];
        results.push([a, b, c, d]);
      }
    }
  }

  return results;
}

console.log(findingQuartables(4));
