/**
 * You are given two strings word and word2. Merge the strings by adding letters in alternating order, starting with wordl. If a string is longer than the other, append the additional letters onto the enc of the merge string.
Ketum the merge sutra
Exampic 1:
Input: wordl = "abc", word2 = "pqr"
Outout: "apbqar"
Explanation, The merge sumne will be traced as so:
merge a poacr
 * 
 * **/

// function mergeString(word1, word2) {}

function mergeString(st1, st2) {
  if (st1 == "") {
    return st2;
  }
  if (st2 == "") {
    return st1;
  }
  let result = "";
  //get the max length
  const MaxLength = Math.max(st1.length, st2.length);

  for (let i = 0; i < MaxLength; i++) {
    if (i < st1.length) {
      result += st1[i];
    }
    if (i < st2.length) {
      result += st2[i];
    }
  }
  return result;
}
let word1 = "abc";
let word2 = "pqr";
let word3 = "moktq";
console.log(mergeString(word1, word2));
console.log(mergeString(word1, word3));
