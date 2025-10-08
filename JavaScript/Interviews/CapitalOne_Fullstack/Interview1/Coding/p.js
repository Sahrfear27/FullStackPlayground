function solution(numbers, patterns) {
  let subarrayCount = 0;

  //This outer loop iterates over all possible starting positions i in the numbers array where a subarray of size patterns.length + 1 can begin.
  // patterns.length + 1 is needed because each comparison compares two numbers, and we need N+1 numbers to perform N comparisons
  for (let i = 0; i <= numbers.length - (patterns.length + 1); i++) {
    let currentSubArray = []; //store comparism
    //Loop through the patterns and compare the corresponding element to the ones in the num array
    for (let j = 0; j < patterns.length; j++) {
      if (numbers[i + j + 1] > numbers[i + j]) {
        currentSubArray.push(1);
      }
      if (numbers[i + j + 1] == numbers[i + j]) {
        currentSubArray.push(0);
      }
      if (numbers[i + j + 1] < numbers[i + j]) {
        currentSubArray.push(-1);
      }
    }

    if (JSON.stringify(currentSubArray) === JSON.stringify(patterns)) {
      subarrayCount++;
    }
  }
  return subarrayCount;
}

let n1 = [4, 1, 3, 4, 4, 5, 5, 1];
let p1 = [1, 0, -1];
console.log(solution(n1, p1)); // ✅ Should return 1
