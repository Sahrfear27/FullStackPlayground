/**
Map is also a collection of key value pair
The key diffeences between Map and Object

Objects: The keys can only be strings and symbols.
Non string keys are converted to string

Map: The keys can be of any data types. Be if number, stirng, function, object etc

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.


Note:
When to use which
Use case	                                                    Recommended
You need simple key-value storage with string keys	            Object
ou need keys of any type (objects, functions, numbers)          Map
You care about insertion order                                  Map
 * **/

//Obj
let obj = {};
obj["name"] = "Alice";
obj[42] = "number key";
obj[{ a: 1 }] = "Object Key";
console.log(obj); //Convert the keys into string Return an object with all the keys as strings

let map = new Map();
map.set("name", "Alice");
map.set(42, "number key");
map.set({ a: 1 }, "Object key");
console.log(map); //Stores object and numbers as keys without conveting them

//Get the value of the key
console.log(map.get("name"));

//Check if key exist
console.log(map.has(42));

//Get the size
console.log(map.size);

/**
  For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], 
it’s used by default in for..of.
 ***/
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

console.log(recipeMap);
//Iterate over the keys of vegitable
for (let veg of recipeMap.keys()) {
  console.log(veg);
}

//Iterate over the values
for (let amount of recipeMap.values()) {
  console.log(amount);
}

//Iterate over the [key value] entries
for (let entry of recipeMap) {
  console.log(entry);
}
