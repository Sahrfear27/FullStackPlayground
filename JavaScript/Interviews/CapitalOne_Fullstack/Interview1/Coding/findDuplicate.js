function removeDuplicate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const nums = [1, 1, 5, 2, 1, 2, 3, 2, 4, 2, 6];

console.log(removeDuplicate(nums));
//Time complexity is 0nsquare: include is array method

function removeDuplicate2(arr) {
  const Seen = new Set();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Seen.has(arr[i])) {
      Seen.add(arr[i]);
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate2(nums));

//Using ES6 Syntax

function removeDuplicate3(arr) {
  let result = [...new Set(arr)];
  return result;
}
const num3 = [1, 1, 5, 2, 1, 2, 3, 2, 4, 2, 6];
console.log(removeDuplicate3(num3));
