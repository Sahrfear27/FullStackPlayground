/*
A datastructure that is use to store a ordered collection of elements

Array method:
push:add element to the back
pop:remove an element from the back

shift:remove an element from the front
unshift : addd an element to the front
*/

const fruits = ["Orange", "Grapes", "Mango", "Apples"];

fruits.shift();
console.log(fruits);

fruits.unshift("Kiwi");
console.log(fruits);

// MultiDimentional Array: This is also known as matrix
const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 3, 8, 10],
  [2, 3, 1, 5, 6, 8, 9, 11],
];

for (let row of matrix) {
  // Return all the rows (individual array)
  for (let column of row) {
    // Return each element of the row
    console.log(column);
  }
}

let arr = [1, 2, 4];
let arr2 = arr;
let arr3 = [1, 2, 4];
console.log(arr === arr2);
console.log(arr === arr3);
console.log(arr3.join(","));

console.log("\n_____Array Methods____");

// arr.splice: arr.splice(start, delecount, elem1-elemN) :
// It modifies the original array an return a new array with remove items

let arrs = ["I", "Study", "JavaScript"];

arrs.splice(0, 2, "Love"); //from index1, remov2 and replace with "Love"
console.log(arrs);

// arr.slice: this array method is similar to the string method. But it does not modify the original array
let vowel = ["a", "e", "i", "o", "u"];
vowel.slice(0, 4);
console.log(vowel);
console.log(vowel.slice(0, 4));

// arr.forEach: allow to run a function for every element of the array

//arr.fill(value, start, end) – fills the array with repeating value from index start to end
const array1 = [1, 2, 3, 4, 5]; // Fill with 1 from position 3 until position 5
console.log(array1.fill(1, 3, 5));

//arr.some : Similar to map, it is called for each element in the array, return true or false base on the condition specified
const even = array1.some((elements) => elements % 2 == 0);
// console.log(even);

// The sort function: This used to sort the array in place
const items = ["Bat", "Cat", "Apple", "Dog", "Fish"];
items.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    1;
  } else {
    return -0;
  }
});
console.log(items); //use the above method for sorting letters

// for sorting numbers
const nums = [9, 0, 2, -1, 4, 5];
nums.sort((a, b) => a - b);
console.log("Numbers ", nums);

/**
 Eg1: Sort the values of the dictionaries
 1.Convert the dictionaries into an array
 2. Sort the array
 3. Convert the dictionaries back into an array
 * */
const dict = { AI: 91, ML: 75, DSA: 88, IOT: 85 };

const result = Object.entries(dict);

result.sort((a, b) => a[1] - b[1]);

const sortedDict = Object.fromEntries(result);
console.log("Sorted Dictionary is ", sortedDict);

/**
 Eg2: Sort the values in asending order
 1.since items are array. Use the sort method to sort the array
 * */

const records = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
records.sort((a, b) => a.value - b.value);
console.log(records);

/**
 Array.form : The Array.from() static method creates a new, shallow-copied Array instance from an iterable 
 * */

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

/**
 The pad start method.
 The padStart() method of String values pads this string with another string (multiple times,
if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
padStart(targetLength)
padStart(targetLength, padString)
 * */

const str1 = "5";
console.log(str1.padStart(3, 0));

// Eg
const socialSecurity = "123539477";
const lastFourDigit = socialSecurity.slice(-4);
console.log(lastFourDigit);
console.log(lastFourDigit.padStart(socialSecurity.length, "*"));
