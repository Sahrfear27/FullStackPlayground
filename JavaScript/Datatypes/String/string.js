/**
 String is one of the primitive data type that is used to store texual data.
 * **/

let guestList = "Guest:\n *Sahrfear\n *Alves\n *Alex\n *John";
console.log(guestList);

// Get string Length
let username = "Macarthy";
console.log(username.length);

//Last and First char
console.log(username.at(-1));
console.log(username.at(0));

//Accessing a string
for (let char of username) {
  console.log(char);
}

// Searching for a string

//str.indexOf(subStrr, pos)
let str = "Widget with id";
console.log(str.indexOf("with"));
console.log(str.indexOf("id", 2)); //this will start the search fom 2

//Eg: Let look fo as in str2 and print

let str2 = "As sly as a fox, as strong as an ox";

let target = "as";

let pos = 0;
while (true) {
  let foundPos = str2.indexOf(target, pos);
  if (foundPos == -1) {
    break;
  }
  console.log(`Found Pos at ${foundPos}`);
  pos = foundPos + 1;
}

//str.lastIndexOf(substr, position): This searches from the end of the string to the beginning

console.log(str.lastIndexOf("Widget"));
console.log(str.indexOf("Widget"));

// includes, startsWith, endsWith
//Str.includes(substr, pos)
let phrase = "The quick brown fox jumps over the lazy dog";

console.log(phrase.includes("fox", 10));

console.log(phrase.startsWith("The"));
console.log(phrase.endsWith("dog"));

// Getting a substring:

//Slice: str.slice(start,end)
let words = "stringify";
console.log(words.slice(0, 6));
console.log(words.slice(6));

//Str.substr(start,end)
console.log(words.substring(2, 6));

// Comparing Sting : String are compared character by character by alphebital character
console.log("a" > "Z");

//Get the char of unicode
console.log(words.codePointAt(0));

// str.localeCompare(str2):eturns an integer indicating whether str is less, equal or greater than str2 according to the language rules
