/**
Imagine you are calculating how you rate your favorite website over time using a random scale. You started with a rating of 1500, and whenever your rating changed, you recorded this change in the array diffs. Return
an array with two numbers - your highest rating ever, and your current rating.
Note: It is guaranteed that your rating never changed to a negative value. Also, note that you are not expected to provide the most optimal solution, but a solution with time complexity not worse than o(diffs. length?)
will fit within the execution time limit.*
Example
• For diffs = [100, -200, 350, 100, -600], the output should be solution (diffs) = [1850, 1250] .
Explanation:
Here is the sequence of ratings after processing each change:
• 1500 - initial rating;
• 1500 + 100 = 1600 ;
• 1600 - 200 = 1400 ; |
• 1400 + 350 = 1750 ;
• 1750 + 100 = 1850 - maximum value;
• 1850 - 600 = 1250 - current value.
Since your highest rating was 1850, and your current rating is is the answer is [1850, 1250] -
• For diffs = [], the output should be solution (diffs) = [1500, 1500] 
Explanation:
Since there aren't any changes to the initial rating, both the highest and the current rating values are 1500
 * **/

function diffs(arrayRating) {
  let initial = 1500;
  if (arrayRating.length == 0) {
    return [initial, initial];
  }

  let result = [];
  for (let i = 0; i < arrayRating.length; i++) {
    let currentValue = initial + arrayRating[i];
    result.push(currentValue);
    initial = currentValue;
  }
  let highest = Math.max(...result);
  return [highest, initial];
}
const nums = [100, -200, 350, 100, -600];

console.log(diffs(nums));
