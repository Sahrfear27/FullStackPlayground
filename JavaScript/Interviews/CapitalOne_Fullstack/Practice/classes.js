// Getters / setters;
class Bank {
  constructor() {
    this._balance = 4;
  }

  get balance() {
    return this._balance;
  }

  set balance(amout) {
    this._balance += amout;
  }
}

const BankObj = new Bank();
//Call the setter
BankObj.balance = 30;

//Call the getter
console.log(BankObj.balance);

// Inheritance: A technique in which one class inherit behavior from the other class
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name}  runs with speed of ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name}  stands stills`);
  }
}

// const animalObj = new Animal("Dog");
// animalObj.run(20);

//Create a class Called Rabbit that will inheirt behavior from run Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides !`);
  }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.run(200);
rabbit.hide();
console.log(rabbit.name);
rabbit.stop();

// Method Overriding: Let
