/**
 * Note !! There are 3 interraction with the user in javascript which occurs in the browser and not node run time environment
 * 1. alert
 * 2. prompt
 * 3. confirm
 * 
 If you want to take the userinput in node.js, you will have to use the readln
 * **/

// Write a program that ask the user to enter a value in lb and convert it to kg and print out the result.

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please Enter a value in Pounds \n", (pounds) => {
  const valuesInKg = parseFloat(pounds) * 0.453592;
  console.log(`${pounds}lb is equivalent is ${valuesInKg.toFixed(3)}kg`);
  rl.close();
});
