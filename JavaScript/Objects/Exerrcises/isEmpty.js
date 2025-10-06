/**
 Write the function isEmpty(obj) which returns true if the object has 
 no properties, false otherwise.
 * **/
//Solution1
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function isEmpty2(obj) {
  return Object.keys(obj).length === 0;
}
let schedule = {};
console.log(isEmpty(schedule));

schedule["3:30am"] = "Get up and study";
console.log(Object.keys(schedule));
console.log(isEmpty(schedule));

let newSchedule = {};
console.log(isEmpty2(newSchedule));

newSchedule["Is active"] = true;
newSchedule.name = "Sahrfear";
newSchedule.pray = true;

console.log(isEmpty2(newSchedule));
