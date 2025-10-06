/**
 Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

Two strings are anagrams if they contain the same characters in the same frequency.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

 * **/

// Use object keys for sorted strings.
//Solution1.
function groupAnagram(strArray) {
  let map = {};

  for (let str of strArray) {
    let keys = str.split("").sort().join("");
    if (!map[keys]) map[keys] = [];
    map[keys].push(str);
  }

  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// let user = {
//   name: "sahrfear",
//   age: 33,
//   email: "sahrfear@gmail.com",
// };
// console.log(Object.values(user));
console.log(groupAnagram(strs));

//Solution2 using hash map

function groupAnagram2(stringArray) {
  let map = new Map();

  for (let str of stringArray) {
    let key = [...str].sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}

let myMap = new Map();
myMap.set("user", "sahrfear");
// console.log(myMap);

console.log(groupAnagram2(strs));
