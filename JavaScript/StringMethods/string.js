// String in javascript are immutable

let str = "Hello";

// str.at(0) = 'K' //error.

// Includes, startswith, endswith.
let str2 = "Widget with id";
console.log(str2.includes("id"));

console.log("widget".includes("id", 3));

// Getting a substring
// There are three method of getting a substring in javascript. substring, substr, and slice

//1. sice :str.slice(start, end)
let str3 = "Stringify";

console.log(str3.slice(0, 5)); //Strin. to get a substring in python you use the bracket notation

// 2. substring(start, end)
console.log(str3.substring(5, 8));

// 3. str: This is depreciated
console.log(str3.substr(0, 5));

/*
Eg1:
1. Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

2. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.


3. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
 to make its length equal to maxlength.

4. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.


*/

const ucFirst = (str) => {
  return str.at(0).toUpperCase() + str.slice(1);
};
console.log(ucFirst("john"));

const checkSpam = (str) => {
  let lowerstr = str.toLowerCase();
  return lowerstr.includes("viagra") || lowerstr.includes("xxx");
};
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("innocent rabbit"));

const truncate = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
};
let inputsrt = "What I'd like to tell on this topic is:";
console.log(truncate(inputsrt, 20));

const extractCurrencyValue = (str) => {
  return parseInt(str.slice(1));
};

console.log(extractCurrencyValue("$120"));
