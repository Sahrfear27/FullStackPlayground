/**
 Given a string s, find the first non-repeating character in it and return its index. 
 If it does not exist, return -1.
Input: s = "leetcode"
Output: 0
Input: s = "loveleetcode"
Output: 2
Input: s = "aabb"
Output: -1

 * **/

function uniqueCharacter(string) {
  let frequency = {};

  for (let char of string) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (frequency[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

let s = "leetcode";
s = "loveleetcode";
s = "aabb";
// console.log(uniqueCharacter(s));

//Using the Check if the first and last occurrence of a character are the same.
//Using the IndexOf and lastIndexOf:
function uniqueCharacter2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
let s2 = "leetcode";
// s2 = "loveleetcode";
s2.lastIndexOf();
console.log(uniqueCharacter2(s2));

//Using Array Method
function uniqueCharacter3(str) {
  return [...str].findIndex((ch) => str.indexOf(ch) === str.lastIndexOf(ch));
}
let s3 = "leetcode";
s3 = "loveleetcode";

console.log(uniqueCharacter2(s3));
