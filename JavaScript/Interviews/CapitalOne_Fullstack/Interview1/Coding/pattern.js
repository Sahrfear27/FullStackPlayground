/**
 * Given an array of integers numbers and an array pattern representing a comparison pattern, 
 * find how many subarrays of numbers match the given pattern.
 *  pattern can only contain the following integers:
• pattern[i] = 1, represents that the number corresponding to this element of the pattern is greater than the previous one.
• pattern[i] = 0, represents that the number corresponding to this element of the pattern is equal to the previous one.
• pattern[i] = -1, represents that the number corresponding to this element of the pattern is less than the previous one.
It is guaranteed that the numbers.length › pattern. length .
Note: You are not expected to provide the most optimal solution, 
but a solution with time complexity not worse than 0 (numbers.length x pattern.length) 
will fit within the execution time limit.

For numbers = [4, 1, 3, 4, 4, 5, 5, 1] and pattern = [1, 0, -1], the output should be solution (numbers, pattern) = 1 .
Explanation:
Let's check all possible subarrays of length 3. 
Note, that the subarray [4, 1, 3], starting with numbers [0] = 4 does not need to be checked, as there is nothing to compare the first element with.
• Subarray [1, 3, 4] doesn't satisfy the pattern. pattern[0] = 1 means that the first element of the subarray should be greater than the previous one, but numbers [1] = 1 < numbers [0] = 4 .
• Subarray [3, 4, 4] doesn't satisfy the pattern. pattern [1] = 0 means that the second element of the subarray should be equal to the previous one, but numbers [3] = 4 != numbers [2] = 3 .
• Subarray [4, 4, 5] doesn't satisfy the pattern. pattern[2] = -1 means that the third element of the subarray should be less than the previous one, but numbers [5] = 5 › numbers [4] = 4 .
• Following the same logic, subarray [4, 5, 5] doesn't satisfy the pattern.

• Subarray [5, 5, 1] satisfies the pattern, because:
numbers [1] = 5 > numbers (4) = 4 and patternio]
• numbers [6] = numbers [5] = 5 and pattern [1] = 0 ;
• numbers [7] = 1 < numbers [6] = 5 and pattern [2] = -1 ;
Since there is a single subarray that satisfies the given pattern, the answer is 1 .
 * **/

function solution(numbers, pattern) {
  let count = 0;
  //loop through the numbers to define the starting points

  for (let i = 0; i <= numbers.length - (pattern.length + 1); i++) {
    //Extract the current sub array
    let currentsubarray = [];
    for (let j = 0; j < pattern.length; j++) {
      //Check if the first element of the sub array is greater than the previous
      if (numbers[i + j + 1] > numbers[i + j]) {
        currentsubarray.push(1);
      } else if (numbers[i + j + 1] === numbers[i + j]) {
        currentsubarray.push(0);
      } else if (numbers[i + j + 1] < numbers[i + j]) {
        currentsubarray.push(-1);
      }
    }
    if (JSON.stringify(currentsubarray) === JSON.stringify(pattern)) {
      count++;
    }
  }

  return count;
}

// const arr1 = [-1, 3, 4];
// const arr2 = [-1, 3, 4];
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
let n1 = [4, 1, 3, 4, 4, 5, 5, 1];
let p1 = [1, 0, -1];

console.log(solution(n1, p1));
let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let p2 = [1, 0];
console.log(solution(n2, p2));

let n3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 20, 19];
let p3 = [1, -1];

console.log(solution(n3, p3));
