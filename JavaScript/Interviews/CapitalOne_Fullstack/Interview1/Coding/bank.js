/**
The core principles of OOP are:
Encapsulation:  It hides the internal state and requires all interaction to be through the object's methods.
Abstraction: Hiding complex implementation details and showing only the essential features of an object.
Inheritance: Allowing new objects to take on the properties and methods of existing objects.
Polymorphism: The ability of an object to take on many forms, or for a single interface to represent different underlying forms (e.g., a method behaving differently based on the object it's called on).
runtime polormorphisy : Method overriding
compile time polymorphism: Method Overloading. Not supported in javascript. Use spread operators
ES6 introduced class syntax, which makes OOP in JavaScript look more like traditional class-based languages. However, under the hood, it's still using prototypes. This is the preferred modern way to do OOP in JavaScript.
 * **/

/**
 
Walk me through how a customer would interact with this system to open a new savings account or current accounts,
 deposit money, withdraw money,get account information, and then check their balance."

 Follow Up questions : 
What would be the main objective or entries of the bank account?
What are all the operations that will be done on the account? (deposit, withdraw, get balance, accInfo)
What makes savings account different from current?What unique behavior
or properties would it have?
Savings: InterestRate
Current: Transaction Limit


 * * */

class Account {
  constructor(name, number, initialDeposit = 0) {
    this.accountName = name;
    this.accountNumber = number;
    this.balance = initialDeposit;
    console.log(
      `Account Created: ${this.accountName}, ${this.accountNumber}, ${this.balance}`
    );
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid Entry. Amount should be positive");
      return false;
    } else {
      this.balance += amount;
      console.log(`Deposited $${amount}. New Balance: ${this.balance}`);
      return true;
    }
  }
  withdraw(amount) {
    if (amount < this.balance && amount > 0) {
      this.balance -= amount;
      console.log(`Withdraw $${amount}. New Balance $${this.balance}`);
    } else if (amount <= 0) {
      console.log("Invalid Entry");
    } else {
      console.log(`Insufficient Funds. Account Balance $${this.balance}`);
    }
  }

  getBalance() {
    console.log(`Account Balance: ${this.balance}`);
  }
  getInfo() {
    console.log(
      `Account Name: ${this.accountName}, Account Number: ${this.accountNumber}, Balance : ${this.balance}`
    );
  }
}

class SavingsAccount extends Account {
  //Has an Interest rate
  //Common behaviors from savings and account: Deposit, withdraw, getAccBalance, getInfo
  constructor(name, number, initialDeposit, interestRate) {
    //Let get all the properties from the parent class
    super(name, number, initialDeposit);
    this.interest = interestRate;
  }
  //No need to override method from parent if the child class is using the same logic.
  //Create a child Method to apply Interest and call everytime you want to apply interest.
  applyInterest() {
    let interest = this.balance * (this.interest / 100);
    this.balance += interest;
    console.log(
      `An Interest of ${interest} was successfully added to your account. New Balance is ${this.balance}`
    );
  }

  //You need to override the getAccountInfo. Reason is : You want to show your interest rate.
  getInfo() {
    console.log(
      `Savings Account Number: ${this.accountNumber}, Holder: ${this.accountName}, Balance: ${this.balance}, Interest Rate ${this.interest}`
    );
  }
}
class CurrentAccount extends Account {
  //Has overdraft limit. or transaction count
  constructor(name, number, initialDeposit, overdraftlimit) {
    //Get all the properties from parent
    super(name, number, initialDeposit);
    this.overdraft = overdraftlimit;
  }

  //We will override withdrawal
  withdraw(amount) {
    //eg: overdraft = 500 which means i can go -500 on my account: this is ususally added to the balance
    let newBalanceWithOverDraft = this.overdraft + this.balance;
    if (amount > 0 && amount <= newBalanceWithOverDraft) {
      this.balance -= amount;
      console.log(
        `Withdrawal of ${amount} was successful. New Balance is ${this.balance}`
      );
      if (this.balance < 0) {
        console.log(`You are now using your overdraft.`);
      }
      return true;
    } else if (amount <= 0) {
      console.log("Invalid Entry");
      return false;
    } else {
      console.log(`Withdrawal of ${amount} failed. Exceeded overdraft limmit`);
      return false;
    }
  }
  getInfo() {
    console.log(
      `Current Account Number: ${this.accountNumber}, Holder: ${this.accountName}, Balance: ${this.balance}, Overdraft ${this.overdraft}`
    );
  }
}
// const currentObj = new CurrentAccount("sksks", 2323344, 90);
// console.log(currentObj instanceof Account);

//Composition: Include all the instances
class Bank {
  constructor(name) {
    this.bankName = name;
    this.accounts = [];
  }

  addAccount(accounts) {
    if (accounts instanceof Account) {
      this.accounts.push(accounts);
      console.log(
        `Account of ${accounts.accountNumber} was added to ${this.bankName}`
      );
    } else {
      console.log(`Sorry. We only operate on Savings and Checkings`);
    }
  }

  findAccount(accountNumber) {
    return this.accounts.find(
      (numbers) => accountNumber.accountNumber === numbers
    );
  }

  displayAllAccount() {
    console.log(`\n----Accounts at ${this.bankName}-----`);
    if (this.accounts.length == 0) {
      console.log("No Account Currently");
    }
    for (let account of this.accounts) {
      account.getInfo();
    }
  }
}
//Create a bank Object
const myBank = new Bank("Capitol One");

//Create an Accounts
const savingsAccount1 = new SavingsAccount("Sahrfear", "SA001", 200, 0.5);
const currentAccount1 = new CurrentAccount("Alves", "MA020", 100, 300);
const savingsAccount2 = new SavingsAccount("Alice", "AK103", 200, 0.5);

//
savingsAccount1.deposit(200);
savingsAccount1.withdraw(100);
savingsAccount1.applyInterest();

currentAccount1.deposit(100);
currentAccount1.withdraw(200);
currentAccount1.withdraw(400);
//Add account to the bank
myBank.addAccount(savingsAccount1);
myBank.addAccount(currentAccount1);

//Display all the account
myBank.displayAllAccount();
