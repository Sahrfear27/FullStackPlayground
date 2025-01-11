/**
 * Q1. Second Largest Number
 * Given an array of size N, print  second largert distinct element from an array
 * input: [12,35,1,10,34,1] ---> output:34
 * */

const num1 = [12, 35, 1, 10, 34, 1]; //return 34
const num2 = [10, 5, 10]; //5

function secondLargest(arr) {
  let uniqueNumber = new Set(arr);
  //convert the iterable object back to an array
  let numarray = Array.from(uniqueNumber);
  let sorted = numarray.sort((a, b) => {
    return a - b;
  });
  return sorted[sorted.length - 2];
}

console.log(secondLargest(num1));
console.log(secondLargest(num2));
