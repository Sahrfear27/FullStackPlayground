/**
 Given an array of integers nums and an integer target, 
 return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not
use the same element twice.Return the answer in any order.
 ***/

function twoSum(numbers, target) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, 9));
// O(n^2)

function twoSum2(num, target) {
  let map = {};
  for (let i = 0; i < num.length; i++) {
    let complement = target - num[i]; //9-2 = 7
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[num[i]] = i;
  }
}

console.log(twoSum2(nums, target));
