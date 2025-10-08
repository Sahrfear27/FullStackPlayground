/**
 You are given a list of student–course enrollments. Each enrollment is a pair [studentId, courseName].

Your task is to return an object (dictionary) that maps every pair of students who share at least one 
course to the list of shared courses.

 * **/

// Example:
const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
];
const enrollments2 = [
  ["1", "Math"],
  ["2", "Math"],
  ["3", "Math"],
  ["4", "Math"],
  ["5", "Math"],
  ["6", "Math"],
  ["7", "Math"],
  ["8", "Math"],
  ["9", "Math"],
  ["10", "Math"],
];

function findSharedCourses(enrollments) {
  // Step 1: Build a mapping of course -> students enrolled
  const courseToEnrolledStudents = new Map();

  for (const [studentId, courseName] of enrollments) {
    if (!courseToEnrolledStudents.has(courseName)) {
      courseToEnrolledStudents.set(courseName, new Set());
    }
    courseToEnrolledStudents.get(courseName).add(studentId);
  }

  // Step 2: Build student-pair -> shared courses
  const studentPairToCourses = {};

  for (const [courseName, enrolledStudentsSet] of courseToEnrolledStudents) {
    const enrolledStudents = Array.from(enrolledStudentsSet);

    for (let i = 0; i < enrolledStudents.length; i++) {
      for (let j = i + 1; j < enrolledStudents.length; j++) {
        const studentA = enrolledStudents[i];
        const studentB = enrolledStudents[j];

        // Always build a consistent key (sorted)
        const pairKey =
          studentA < studentB
            ? `${studentA},${studentB}`
            : `${studentB},${studentA}`;

        if (!studentPairToCourses[pairKey]) {
          studentPairToCourses[pairKey] = [];
        }
        studentPairToCourses[pairKey].push(courseName);
      }
    }
  }
  return studentPairToCourses;
}
const enrollmentsTest = [];
for (let i = 1; i <= 20; i++) {
  enrollmentsTest.push(["17", `Course${i}`]);
  enrollmentsTest.push(["58", `Course${i}`]);
}

console.log(findSharedCourses(enrollmentsTest));

// Example runs
// console.log(findSharedCourses(enrollments1));
console.log(findSharedCourses(enrollmentsTest));
// console.log(findSharedCourses(enrollments2));
