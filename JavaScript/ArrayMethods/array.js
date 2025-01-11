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
