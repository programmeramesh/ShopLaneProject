
//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs(arr, target) {
  const pairs = [];

  const numFrequency = new Map();
  for (let num of arr) {
    if (numFrequency.has(num)) {
      numFrequency.set(num, numFrequency.get(num) + 1);
    } else {
      numFrequency.set(num, 1);
    }
  }

  for (let num of arr) {
    const complement = target - num;

    if (numFrequency.has(complement)) {
      const frequency = numFrequency.get(complement);

      if (complement === num && frequency < 2) {
        continue;
      }

      pairs.push([num, complement]);

      numFrequency.set(complement, frequency - 1);
    }
  }

  return pairs;
}

const arr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
const target = 7;
const result = findPairs(arr, target);
console.log(result);