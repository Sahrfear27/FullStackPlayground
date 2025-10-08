/**
 * 
 * 
Given an array of integers numbers, compare the sum of elements on even positions against the sum of elements on odd
positions (0 -based), Return "even" if the sum of elements on even positions is greater, "odd" if the sum of elements on 
odd positions is greater, or "equal" if both sums are equal.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(numbers. length?) will fit within the execution time limit.
Example
• For numbers = [1, 2, 3, 4, 5]. the output should be solution (numbers)
"even"
Explanation:
• Sum of elements on even positions is 1 + 3 + 5 = 9.
• Sum of elements on odd positions is 2 + 4 = 6
• 9 > 6. so the expected output is "even"
• For numbers = [-1, 4, 3, -2]. the output should be solution(numbers) = "equal"
Explanation:
• Sum of elements on even positions is (-1) + 3 = 2
• Sum of elements on odd positions is 4 + (-2) = 2.
• 2 = 2, so the expected output is "equal".
 * **/

function compareEvenOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddSum += arr[i];
    } else if (i % 2 === 0) {
      evenSum += arr[i];
    }
  }
  if (evenSum > oddSum) {
    return "Even";
  } else if (evenSum < oddSum) {
    return "Odd";
  } else {
    return "Equal";
  }
}

const numbers = [1, 2, 3, 4, 5];
console.log(compareEvenOdd(numbers));
