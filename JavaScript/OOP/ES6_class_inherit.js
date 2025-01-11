/***
 In javascript , you can create a class that inherit from another class using the extends keyword.


ES5 Approach: Uses Object.setPrototypeOf() or the __proto__ property to establish prototypal inheritance.

ES6 vs. ES5: While ES6 introduced class syntax (extends keyword) for a more structured approach, 
it still uses prototypal inheritance under the hood.
Prototype Chain: Allows objects to inherit from other objects, forming a chain that JavaScript traverses when looking for properties or methods.

Class vs. Object: A class is a blueprint for creating objects. An object is an instance of a class.
 */

console.log(
  "_____To extend a class from another class , you use the extends keyword____"
);

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat = () => {
    return "All animal can eat";
  };
  makesound = () => {
    return "Generic name sound";
  };
}

/*
Note: If you define a constructor from the sub class, it automically replaced the constructor from the parent class. So you used the keyword super to call the methods on the parent.
The extends keyword is used to create a subclass that inherits from a parent class.
*/

// Create a class from another class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makesound = () => {
    return "Woof!";
  };
}

// Create dog object
const mydog = new Dog("Max", "Golden Retriver");
console.log(mydog.makesound());
console.log(mydog.name);
