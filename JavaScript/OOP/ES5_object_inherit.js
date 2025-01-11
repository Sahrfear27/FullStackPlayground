/**
 In programming the purpose of inheritance is to take something and extend.
  This property of javascript help us to extend he behavior from other object.
  When you search for a property from and object and it does not exist, javascript automatically take it from the prototype

  This is how they use to extend behavior in ES5. 
  
The ES6 classes provides a more structured way to define objects and their inheritance relationships.
Under the hood, it still uses prototypal inheritance.
You can use the extends keyword to create a subclass that inherits properties and methods from a parent class.
 * */

const pet = {
  eat: true,
};

const cat = {
  name: "tracy",
  age: 1,
  color: "black",
};

// Here we set pet to be the prototype of cat. Cat prototypically inheirt from pet
// cat.__proto__ = pet;
Object.setPrototypeOf(cat, pet);
console.log(cat);
console.log(cat.eat);

// Extending prototype chain
console.log("\n" + "Prototype Chain");
const animal = {
  eat: true,
  walk: () => {
    return "All animal can walk or move";
  },
};

const rabbit = {
  color: "brown",
  size: 26,
  __proto__: animal, //inherit the properties from animal
};

console.log(rabbit);
console.log(rabbit.__proto__.eat);
console.log(rabbit.__proto__.walk());

// The prototype is only use for reading, writing doesn't work. Inorder to write,
//you use the  setters and getters

console.log(`\n ${"Assignmet is handle by the setters function"}`);
const users = {
  firstname: "Sahrfear",
  lastname: "Macarthy",
  set fullname(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
};

const admin = {
  __proto__: users,
  isAdmin: true,
};

console.log(admin);
console.log(admin.fullname);

admin.fullname = "John Smith";
console.log(admin.fullname);
console.log(users.fullname);
console.log(Object.keys(admin));

for (let prop in admin) {
  console.log(prop);
}

// To check for the object own property and not inherited property, you can use the hasOwnProperty method
console.log(`\n ${"Checking for object own property"}`);
for (let prop in admin) {
  const hasOwn = admin.hasOwnProperty(prop);
  if (hasOwn) {
    console.log(`Own ${prop}`);
  } else {
    console.log(`Inherited ${prop}`);
  }
}
