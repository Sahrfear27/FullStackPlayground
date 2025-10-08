// You are given an array of integers nums and a target integer target.
// Your task is to return the indices of the two distinct numbers in the array that add up exactly to the target

const map = new Map();
map.set("Key", "value");
console.log(map.get("Key")); //This return the value associated with the key
console.log(map.has("Key"));
console.log(map.get("Key"));
function twoSum(arr, target) {
  const myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]; // Return the number that is needed to get to the target
    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    }
    myMap.set(arr[i], i);
  }
}
let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 18));

function TwoSum2(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // for(let j = 1; )
  }
}
