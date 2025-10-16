/**
 A set is a special type of collection where each value occurrs only once.

A Set is a special type collection – “set of values” (without keys), where each value
may occur only once.

Its main methods are:
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

Note: Set does not repeat duplicate
 * **/

/**
 For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. 
 A visitor must be “counted” only once.

 Note. Set does not have a key value pair
 * **/
let set = new Set();

let john = { name: "john" };
let pete = { name: "pete" };
let joe = { name: "joe" };
let mary = { name: "mary" };

set.add(joe);
set.add(john);
set.add(pete);
set.add(mary);
set.add(joe);
set.add(john);

console.log(set.size); //size of 4

console.log(set);

//Iterating over set
for (let users of set.keys()) {
  console.log(users);
}

console.log("\n");
// Printing all the name
for (let values of set) {
  console.log(values);
}

console.log("\n" + "looping thorugh set");
let fruits = ["Mango", "Grapes", "Banana"];
let fruitSet = new Set(fruits);
console.log(fruitSet);
for (let fruit of fruitSet) {
  console.log(fruit);
}

// set.keys(): retun the iterable objects of values
console.log(set.keys());

console.log(set.values());

console.log(set.entries());

console.log(`\n Example1`);
// Create a function unique(arr) that should return an array with unique items of arr.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let unique = new Set();

  for (let item of arr) {
    unique.add(item);
  }
  return Array.from(unique);
}
console.log(unique(values));

// Fast Approach
console.log(`\n Option 2`);
function unique2(arr) {
  return Array.from(new Set(arr));
}
console.log(unique2(values));

/**
 
Filter Anagrram: Anagrams are words that have the same number of same letters, but in different order.
nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.
From every anagram group should remain only one word, no matter which one.
 * **/
console.log("\n Filter Anagram");
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
console.log(aclean(arr));
