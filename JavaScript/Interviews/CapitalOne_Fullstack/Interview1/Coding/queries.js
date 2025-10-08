/**
 * You are given two arrays of integers a and b, and an array queries containing the queries you are required to process.
 * Every queries[i] can have the following two forms:
 * [0, i, x] in this case you need to add x to the current value of b[i]
 * [1,x] in the case you will need to find the total number of pair of indices i and j such that a[i] + b[j] = x
 *
 * perform the given queries in order and an array containing the results of the queries of the type[1,x]
 * 
Examples:

For a = [1, 2, 3], b = [1, 4] ,and queries = [[1, 5], [O, 0, 2], [1, 5]], the output should be solution(a, b, 
queries）=［1, 2］

The arrays look like this initially:
a = [1, 2, 3] and b = [1, 4]
For the query [1, 5], there's only one way to form a sum of 5 using an element from each array: 5 = 1 + 4 = a [0] +
b [1]. So the result is 1

The next query [0, 0, 2] adds 2 to the value of b[0], so the arrays now look like this:
a = [1, 2, 3] and b = [3, 4]

For the next [1, 5] query, there are now two ways to form a sum of using an element from each array: 5 = 1 + 4 =
a [0] + b[1] and 5 = 2 + 3 = a[1] + b[0] So the result is 2
Since the two queries of type [1, x] gave results of 1 and 2 respectively, the answer is [1, 2].

 * **/

function solution(a, b, queries) {
  let result = [];

  for (let query of queries) {
    //[1, 5],[0, 0, 2], [1, 5],
    let type = query[0]; // get the element of the first query
    if (type === 0) {
      let index = query[1];
      let valueToAdd = query[2];
      b[index] += valueToAdd;
    } else if (type === 1) {
      let count = 0;
      let target = query[1];

      //a: [1, 2, 3],b [1, 4],
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
          if (a[i] + b[j] == target) {
            count++;
          }
        }
      }
      result.push(count);
    }
  }
  return result;
}

const testCases = [
  {
    a: [1, 2, 3],
    b: [1, 4],
    queries: [
      [1, 5],
      [0, 0, 2],
      [1, 5],
    ],
    expected: [1, 2],
  },
];
const a = [1, 2, 3];
const b = [1, 4];
const expected = [1, 2];
const queries = [
  [1, 5],
  [0, 0, 2],
  [1, 5],
];
console.log(solution(a, b, queries));
