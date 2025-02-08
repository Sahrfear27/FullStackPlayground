/**
 Write a program to find an return the first none repeating numbers in a string
 str = "hello",
 h

 * */

function RepeatingNumber(str) {
  let mapFrequency = {};
  for (let char of str) {
    // If the key is already in the dictionary, increase it frequency
    if (mapFrequency[char]) {
      mapFrequency[char] += 1;
    } else {
      mapFrequency[char] = 1;
    }
  }
  for (let chars of str) {
    if (mapFrequency[chars] == 1) {
      return chars;
    }
  }
  return null;
}

console.log(RepeatingNumber("hheellooabc"));
