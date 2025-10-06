/**
 Write the code to sum all salaries and store in the variable sum. 
 Should be 390 in the example above.
 let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
 * **/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function getSalaray(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
console.log(getSalaray(salaries));
