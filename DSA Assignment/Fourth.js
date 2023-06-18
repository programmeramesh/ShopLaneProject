//Q4. Write a program to print the first non-repeated character from a string?
  function findFirstNonRepeatedChar(str) {
    const charFrequency = {};
  
    for (let char of str) {
      if (charFrequency[char]) {
        charFrequency[char]++;
      } else {
        charFrequency[char] = 1;
      }
    }
 
    for (let char of str) {
      if (charFrequency[char] === 1) {
        return char;
      }
    }
  
    return null; 
  }

  const inputString = "abacabad";
  const firstNonRepeatedChar = findFirstNonRepeatedChar(inputString);
  console.log(firstNonRepeatedChar);