/**
 Walk me through how a customer would interact with this system to open a new savings account or current accounts,
 deposit money, withdraw money,get account information, and then check their balance."



 * **/

//Define a base class and define all it common properties and method
class Account {
  constructor(accountName, accountID, initialAmout = 0) {
    this._id = accountID;
    this._number = accountName;
    this.balance = initialAmout;
  }

  deposit(amount) {
    if (amount <= 0 || isNaN(amount)) {
      console.log("Invalid Amount to Deposit");
      return false;
    } else {
      this.balance += amount;
      console.log(
        `Amount of ${amount} was deposited. New Balance is ${this.balance}`
      );
      return true;
    }
  }

  withdraw(amount) {
    if (amount <= 0 || this.balance < amount) {
      console.log("Invalid Input or Insufficient Fund");
      return false;
    } else {
      this.balance -= amount;
      console.log(
        `Amount of ${amount} was Withdraw. New Balance is ${this.balance}`
      );
      return true;
    }
  }
  getAccountInfo() {
    return `Account Name: ${this.accountName}, AccountID: ${this._id}, Balance ${this.balance}`;
  }
}

//Create Saving Account
class Savings extends Account {
  constructor(accountName, accountID, interestRate) {
    super(accountName, accountID);
    this.rot = interestRate;
  }

  applyForInterest() {
    let interest = (this.balance * this.rot) / 100;
    this.balance += interest;
    console.log(
      `An new Interest of ${interest} was added. New Balance is ${this.balance}`
    );
  }

  getAccountInfo() {
    return `Account Name: ${this.accountName}, AccountID: ${this._id}, Balance ${this.balance}, Interest ${this.rot}`;
  }
}

class Current extends Account {
  constructor(accountName, accountID, overdraftLimit = 0) {
    super(accountName, accountID);
    this.overdraft = overdraftLimit;
  }

  withdraw(amount) {
    if (isNaN(amount)) {
      console.log("Invalid Input");
    }
    const newBalanceWithOverdraft = this.balance + this.overdraft;
    if (amount > 0 && amount <= newBalanceWithOverdraft) {
      this.balance -= amount;
      console.log(
        `Amount of ${amount} was successfully Withdraw. New Balance: ${this.balance}`
      );
      return true;
    }
    if (this.balance < 0) {
      console.log("You are using your overdraft limit");
    } else {
      console.log("Insufficient Fund");
    }
  }
  getAccountInfo() {
    return `Account Name: ${this.accountName}, AccountID: ${this._id}, Balance ${this.balance}, OverDraft ${this.overdraft}`;
  }
}

class Bank {
  constructor(name) {
    this.bankName = name;
    this.bankAccounts = [];
  }

  addAccount(accounts) {
    if (accounts instanceof Account) {
      this.bankAccounts.push(accounts);
      console.log(`Account Successflly Added to ${this.bankName}`);
    } else {
      console.log("We only operate on savings and current");
    }
  }
  findAccount(accountNumber) {
    return this.bankAccounts.find(
      (account) => account.accountName == accountNumber
    );
  }

  displayAccount() {
    if (this.bankAccounts.length == 0) {
      console.log("No Account to Display");
    }
    for (let acc of this.bankAccounts) {
      acc.getAccountInfo();
      return true;
    }
  }
}

let myBank = new Bank("Capitol One");
let saving = new Savings("Sahr", "AZ22", 0.2);
let current = new Current("Alves", "AJDJ121", 4000);

myBank.addAccount(saving);
saving.deposit(20);
saving.applyForInterest();
console.log(saving.getAccountInfo());
