/**
 *Recurssion is when function called it self or repeat it self.
 pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
 * */

// Iterative way

function pow1(x: number, n: number) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow1(2, 3));

// Recussive way
//Recursive: base + reduce the task and call self:
function pow2(x: number, n: number): number {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}
const employee = {
  name: "Sahrfear name",
  email: "sahrfear@gmail.com",
};

const department = {
  deptname: "Engineering",
  salary: 300,
};

//   department.__proto__ = employee;
Object.setPrototypeOf(department, employee);
console.log(department);
console.log((department as any).name);
