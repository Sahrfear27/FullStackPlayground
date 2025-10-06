/**
 There are 8 data types in javascrirpt. 7 are primitive and 1 is non primitive


 Objects: They are used to stored key collection of various data and more complex entities
 * * */

//Creating and Object.
//Usiing the Object Constructor
let user = new Object();

//Add to an object
user.age = 20;
user.email = "joe@gmail.com";
user.address = "392 San Ramon Way";

console.log(user);

//Removing form an object
delete user.age;

//Note: If a property name has spaces between, you mush use bracket notation
user["Like Flower"] = true;
console.log(user);

//2. Using the object literal
let user2 = {
  name: "Sharfear",
  age: 29,
  place: "Kono",
  "Is Searching": true,
};

console.log(user2);
console.log(user2["Is Searching"]);

// Computed properties: These allows dynamic creation of object properties. Use computed property if you do not know the value of the property
console.log("\n====Computed properties===");
const prompt = require("prompt-sync")();
// let fruits = prompt("How many Fruits do you want to buy: ");

// let bag = {
//   [fruits]: 4,
// };

// console.log(bag.mango);
// console.log(bag);

//Property Existience: Using the In Opeators

for (keys in user) {
  console.log(keys);
  console.log(user[keys]);
}

/**
 Ordered: Object are ordered.?
 Note: Integer property are ordered
 Others appear the way they are created
 * **/

console.log("\n=====Integers are printed in Ordered fomat====\n");
let codes = {
  49: "Germany",
  232: "Sierra Leone",
  1: "USA",
};

for (let code in codes) {
  // This will print the objects in ascending order
  console.log(`The country code for ${codes[code]} is ${code}`);
}

console.log("\n=====Othes  are printed in the way they were added====\n");

let employee = {
  name: "Sahrfear",
  email: "sahrfear@gmail.com",
  sex: "Male",
  "Is Focus": true,
};

for (let pro in employee) {
  console.log(`${pro}: ${employee[pro]}`);
}
