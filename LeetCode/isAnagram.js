/**
 The word anagram means a phrase that can be form from another word

 . Valid Anagram (LeetCode #242)

Question:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Input: s = "anagram", t = "nagaram"
Output: true

 * 
 * **/
let s = "anagram",
  t = "nagaram";
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sortedS = s.split("").sort().join("");
  let sortedt = t.split("").sort().join("");
  if (sortedS === sortedt) {
    return true;
  }
  return false;
}

console.log(isAnagram(s, t));

// Using Object
function isAnagram2(s, t) {
  if (s.length !== t.length) return false;
  let frequency = {};
  for (let char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of t) {
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  return true;
}
console.log(isAnagram2(s, t));
