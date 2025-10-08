// Map: Collecton of data items like objects, but the diffrence is, map allows keys of any data types
//Note: Map constructor expect an iterable.new Map([["key1", "value1"], ["key2", "value2"]])
/**
 
Map Methods: 
set(key, value): Adds or updates a key-value pair.
get(key): Retrieves the value associated with a key.
has(key): Checks if a key exists in the Map.
delete(key): Removes a key-value pair by key.
clear(): Removes all elements from the Map.
forEach(callbackFn): Executes a provided function once for each key-value pair.
entries(): Returns an iterator for key-value pairs.
keys(): Returns an iterator for keys.
values(): Returns an iterator for values.
Map.groupBy(): Groups elements of an iterable based on a callback


Other Set Methods:
add(value): Adds a new element to the set.
delete(value): Deletes an element with a specified value.
clear(): Removes all elements from the set.
has(value): Checks if the set contains a specific value.
forEach(callbackFn): Executes a provided function once for each value in the set.
entries(): Returns a new iterator object that contains an array of [value, value] for each element in the set. 
 * **/

let map = new Map();
map.set("1", "Str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map);
console.log(map.values);

console.log(map.get("1"));

//Using the comprator
const nums = [21, 4, 2, 5, 71, 3, 44, 34, 0];
const ans = nums.sort((a, b) => a - b); //Assending order
console.log(ans);
const ans2 = nums.sort((a, b) => b - a);
console.log(ans2);

const accounts = [
  { accountId: "B002" },
  { accountId: "C003" },
  { accountId: "E005" },
  { accountId: "A001" },
  { accountId: "D004" },
];
const anss = accounts.sort((a, b) => {
  a.accountId.localeCompare(b.accountId);
});
console.log(anss);

const str1 = { accountId: "E005" };
const str2 = { accountId: "A001" };
console.log(str1.accountId.localeCompare(str2.accountId));

// const acc = accounts.sort();
// console.log(acc);
// accounts.reverse();
// console.log(acc);
//Prefer way to sort string
// if (a.activity_indicatior !== b.activity_indicatior) {
//   return b.activity_indicatior - a.activity_indicatior;
// }
// return a.accountId.localeCompare(b.accountId);
// console.log(Math.min(3, 5));

console.log(map.entries());
console.log(map.has(1));

let n = [2, 5, 3, 5, 1, 8, 10];
let result = n.sort((a, b) => a - b);
console.log(result);

let obj = {
  balance: 20,
  transaction: [6, 3, 4, 1],
};
let r = obj.transaction.sort((a, b) => a - b);
console.log(r);

let m = new Map();
let aid = 2;
let t = {
  balance: 20,
  trans: [2, 4, 5, 5],
};
m.set(aid, t);
console.log(m);
console.log(m[0]);

let test = ["CREATE_ACCOUNT", "A1"];
const [type, id] = test;

console.log(type);
console.log(id);

const demo = [1, 2, 3];
const demo2 = [1, 6, 3];
const r1 = JSON.stringify(demo);
const r2 = JSON.stringify(demo2);
console.log(r1 === r2);
