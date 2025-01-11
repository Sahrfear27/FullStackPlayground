/**
 In object Oriented programming, classes are template for creating an object. 
 An object is an instance of a class



Function Constructors: It is a function that is use to create an object and doesnt return a value.

function Person(firstName, lastName) { 
// this = {}; implicit
this.firstName = firstName; 
this.lastName = lastName;
 // return this; implicit
}
const asaad = new Person("Asaad", "Saad");

Note: Constructor are special object that are use to create and initialize an objects


The Differences between Function Constructors and Classes are : Function Constructors are introdued in ES5
ES6 introduces Classes

Access Modifiers: These are set of encapsulation that controls class members.
In JavaScript: 
There are two access modifiers: private, protected
private is declare using #
In TypeScript: 
There are three access modifiers: public, private, protected
private is declare using the private keyword
 * */

// Create a class in JavsScript
class Person {
  first = "";
  last = "";
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  fullname = () => {
    return `Full Name is ${this.first} ${this.last}`;
  };
}

const newUrs = new Person("Sahrfear", "Macarthy");
console.log(newUrs);
console.log(typeof newUrs);
console.log(newUrs.fullname());

// To create a class in TypeScipt
class Person2 {
  constructor(public first: string, public last: string, public age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  descirbe = () => {
    return `Fullname:${this.first} ${this.last}\nAge:${this.age}`;
  };
}
const newUrs2 = new Person2("Sahr", "Fear", 30);
console.log(newUrs2);
console.log(newUrs2.descirbe());
