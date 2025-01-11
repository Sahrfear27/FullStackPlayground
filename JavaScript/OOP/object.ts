// Object:
type User = {
  firstname: string;
  lastname: string;
  age?: number;
};

const person: User = {
  firstname: "Sahrfear",
  lastname: "Macarthy",
  age: 29,
};

// delete person.age;
// console.log(person);

/**
 * 
 * ➢ Create 3 objects, student1, student2, student3
➢ property studentId : 101, 102, 103 respectively
➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢ push the students into an array, quizAnswers
➢ write a function to compute the score for a given student
➢ computeStudentScore(student1, [3, 1, 2, 4]) should return 3
➢ second argument is array of correct answers
 * */

type Student = {
  studentId: number;
  quizAnswers: number[];
};
const student1 = {
  studentId: 101,
  quizAnswers: [1, 1, 2, 4],
};
const student2 = {
  studentId: 102,
  quizAnswers: [2, 1, 2, 2],
};
const student3 = {
  studentId: 103,
  quizAnswers: [3, 1, 3, 4],
};

// Check for student1
// [1, 1, 2, 4]
// [3, 1, 2, 4]
console.log("Compute Student Score");
function computeStudentScore(sutdent: Student, correctanswers: number[]) {
  let count = 0;
  let studentAnswer = sutdent.quizAnswers;
  for (let i = 0; i < studentAnswer.length; i++) {
    if (studentAnswer[i] == correctanswers[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(computeStudentScore(student1, [3, 1, 2, 4]));

//Object are created to represent enteties in the real world

const makeUser = {
  name: "Alves",
  age: 30,
  sayhi: () => {
    return "Hello i just got created";
  },
};

console.log(makeUser.sayhi());

// Cloning an object
// Step 1: Create an object and replicate it features

type Users = {
  firstname: string;
  lastname: string;
  sayHi: () => string;
};
let user: Users = {
  firstname: "Alves",
  lastname: "Macarthy",
  sayHi() {
    return `Full Name is ${this.firstname} ${this.lastname}`;
  },
};

let newUser: { [key: string]: any } = {};
for (let key in user) {
  newUser[key] = user[key as keyof Users];
}
console.log(newUser);

// Using objec.ass: the first argument is the destination

let cloneObject = Object.assign({}, newUser);
console.log(cloneObject);
console.log(cloneObject === newUser);

// Using the spread operator to clone
let clone2 = { ...cloneObject };
console.log(clone2);

const urs = {
  name: "John",
  size: {
    height: 34,
    weight: 40,
  },
};

const newurs = Object.assign({}, urs);

console.log(urs === newurs);
console.log(urs.size === newurs.size); //Both will have the same size
// To fix this issue, use structured clone to clone an object:
//This method clone an object with all nested properties
let clone3 = structuredClone(newurs);

//
