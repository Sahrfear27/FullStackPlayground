/**
 Create a function multiplyNumeric(obj) that multiplies all 
 numeric property values of obj by 2.
 * **/

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  let result = {};
  for (let pro in obj) {
    // console.log(typeof obj[pro]);
    if (typeof obj[pro] === "number") {
      result[pro] = obj[pro] * 2;
    } else {
      result[pro] = obj[pro];
    }
  }
  return result;
}

console.log(multiplyNumeric(menu));
