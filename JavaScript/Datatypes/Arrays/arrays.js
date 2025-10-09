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

// Iteratiing Through Array
const arr2 = ["Mango", "Grapes", "Pear", "Banana"];
arr2.forEach((item, index, arr) => {
  console.log(`${item} is at ${index} in  ${arr}`);
});

// Searching in array
// 1. indexOf/lastindexOf and includes

let fruit = ["Apple", "Orange", "Apple"];
console.log(fruit.indexOf("Apple")); //0
console.log(fruit.lastIndexOf("Apple")); //0
console.log(fruit.includes("Orange"));

//2. find and findIndex/findLastIndex

let result = fruit.find((fruit) => fruit === "Ornge");
console.log(result);

let userArray = [
  { id: 1, name: "John", age: 22, salary: 100 },
  { id: 2, name: "Joe", age: 33, salary: 250 },
  { id: 4, name: "Abu", age: 30, salary: 300 },
  { id: 7, name: "Kai", age: 21, salary: 70 },
  { id: 8, name: "Mary", age: 19, salary: 88 },
];

let qualifyUsers = userArray.filter((users) => {
  return users.age <= 22;
});
console.log(qualifyUsers);

let userWithBonuses = userArray.filter((user) => {
  if (user.age <= 22) {
    let userWithBonus = (user.salary += 100);
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      salary: userWithBonus,
    };
  }
});

console.log(userWithBonuses); //Retun an array of all that meet the specified condition

let applyBonus = userArray.map((user) => {
  if (user.age <= 22) {
    return { ...user, salary: user.salary + 100 };
  }
  return user;
});
console.log("Apply Bonus to Specific Users");
console.log(applyBonus);
console.log(userArray);

/**
Note:
When we need to iterate over an array – we can use forEach, for or for..of.
When we need to iterate and return the data for each element – we can use map.
 A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
Please note that methods sort, reverse and splice modify the array itself.
 * **/
