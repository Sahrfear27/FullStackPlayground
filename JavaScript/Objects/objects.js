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
let fruits = prompt("How many Fruits do you want to buy: ");

let bag = {
  [fruits]: 4,
};

console.log(bag.mango);
console.log(bag);

//Prroperty Existience: Using the In Opeators

for (keys in user) {
  console.log(keys);
  console.log(user[keys]);
}
