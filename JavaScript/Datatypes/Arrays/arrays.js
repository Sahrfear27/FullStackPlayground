/**
 * Arrays in JavaScript can work both as a queue and as a stack. 
 * They allow you to add/remove elements, both to/from the beginning or the end.


 * 
 * **/

let fruits = ["Apple", "Orange", "Plum", "Banana", "Grapes"];
fruits.push("Orange"); //add elem to the end
console.log(fruits);
fruits.pop(); //remove elem at the end
console.log(fruits);

fruits.shift(); //remove at the beginning of the arr
console.log(fruits);
fruits.unshift("tea"); //add to the beginning of the arr
console.log(fruits);

//Array are objects and are copied by referrence

let fruits2 = ["Banana"];
let f = ["Banana"];
let arr = fruits2;

console.log(arr === fruits2);
console.log(f === fruits2);

// Performance: Pop and push are faster. Shift and unshift are slower
