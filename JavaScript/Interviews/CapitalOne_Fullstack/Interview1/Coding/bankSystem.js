/**
 Design and implement a BankingSystem class that manages customer accounts and their financial transactions.
Your solution should include the following functionalities:

1. Account Management:
    createAccount(accountId): Creates a new account. 
    Returns true on success, false if the account already exists. New accounts start with a balance of 0.
    checkBalance(accountId): 
    Returns the balance of accountId, or -1 if the account does not exist.

2. Financial Operations:
    deposit(accountId, amount): Adds amount to accountId. amount must be positive.
  Records a "DEPOSIT" transaction.
  Returns the new balance on success, or -1 for invalid input or non-existent account.
    withdraw(accountId, amount): Subtracts amount from accountId. amount must be positive, and funds must be 
  sufficient.
  Records a "WITHDRAW" transaction. 
  Returns the new balance on success, or -1 for invalid input, insufficient funds, or non-existent account.
    transfer(fromId, toId, amount): Moves amount from fromId to toId. amount must be positive. 
Both accounts must exist and be different. fromId must have sufficient funds. 
Records "TRANSFER_OUT" for fromId and "TRANSFER_IN" for toId. 
Returns the new balance of fromId on success, or -1 for invalid conditions.


3. Transaction Tracking & Queries:
Implement a Transaction class (or similar structure) to store details like type, amount, date, and description
for each successful operation.
  getMostTransactions(): Returns a string identifying the accountId with the highest number of recorded 
transactions and their count (e.g., "Account with most transactions: 'ACC1' (5 transactions)."). 
Handle cases with no accounts or no transactions.
  sortTransactions(accountId): Returns the list of transactions for accountId sorted by amount in 
ascending order. Returns -1 if the account doesn't exist.

4. Bulk Operation Processing:
  processOperations(operationsArray): Takes an array of command arrays 
(e.g., [["CREATE_ACCOUNT", "ACC1"], ["DEPOSIT", "ACC1", 100]]) and executes them sequentially.
Each operation's result should be logged.


Note!!!
Date and TypeStamp: Use the UTC
 * **/

class Transaction {
  constructor(type, amount, date = new Date(), description) {
    this._transactionType = type;
    this._transactionAmount = amount;
    this._transactionDate = date;
    this._transactionDescription = description;
  }

  //Get the tetails
  getDetails() {
    return `${this._transactionType} of ${this._transactionAmount} was made on ${this._transactionDate}. Description is ${this._transactionDescription}`;
  }
}

class BankingSystem {
  constructor() {
    // this._accountID = accountID;
    this.initialBalance = 0;
    // this.transaction = []; //this is because there will be frequent insaction of data
    //Stores : accountID, balance, Transaction []
    this._accounts = new Map(); //for easy look up of account
  }

  //Check if account Exist helper
  _isAccountExist(accountID) {
    return this._accounts.has(accountID);
  }

  //1. Account Management
  createAccount(accountID) {
    if (this._isAccountExist(accountID)) {
      console.log(`CREATE_ACCOUNT ${accountID}:False (Account already Exist)`);
      return false;
    } else {
      this._accounts.set(accountID, {
        balance: this.initialBalance,
        transactions: [],
      });
      console.log(
        `CREATE_ACCOUNT ${accountID}:True (Account created successful)`
      );
      return true;
    }
  }

  checkBalance(accountID) {
    if (this._isAccountExist(accountID)) {
      const balance = this._accounts.get(accountID).balance;
      console.log(
        `CHECK_BALANCE: Account ID ${accountID}, Balance : ${balance}`
      );
      return balance;
    } else {
      console.log(
        `CHECK_BALANCE: Account ID ${accountID}: -1 Account does not exist`
      );
      return -1;
    }
  }
  //2. Financial Operations:
  deposit(accountID, amount) {
    if (!this._isAccountExist(accountID) || isNaN(amount) || amount <= 0) {
      console.log(
        `DEPOSIT: AccountID ${accountID}, Amount ${amount}: -1(Invalid amount or entry)`
      );
      return -1;
    } else {
      const account = this._accounts.get(accountID);
      account.balance += amount;
      let newTransaction = new Transaction(
        "DEPOSIT",
        amount,
        new Date(),
        `Deposited ${account} to an account ID of ${accountID}`
      );
      account.transactions.push(newTransaction);
      return account.balance;
    }
  }

  withdraw(accountID, amount) {
    if (!this._isAccountExist(accountID) || isNaN(amount) || amount <= 0) {
      console.log(
        `WITHDRAW: Account ID ${accountID}, Amount ${amount}: -1 (Invalid Input / Account does not exist)`
      );
      return -1;
    } else {
      let userAccount = this._accounts.get(accountID);
      if (userAccount.balance < amount) {
        console.log(
          `WITHDRAW: AccountID ${accountID}, Amount ${amount}: Insufficient Fund`
        );
        return -1;
      }
      userAccount.balance -= amount;
      let WithdrawalTransaction = new Transaction(
        "WITHDRAW",
        amount,
        new Date(),
        `Withdraw ${amount} from account with Account ID ${accountID}`
      );

      userAccount.transactions.push(WithdrawalTransaction);
      return userAccount.balance;
    }
  }

  transfer(fromID, toID, amount) {
    if (
      !this._isAccountExist(fromID) ||
      !this._isAccountExist(toID) ||
      isNaN(amount) ||
      amount <= 0
    ) {
      console.log(
        `TRANSFER_OUT: FORMID ${fromID}, TRANSFER_IN: ${toID}, Amount ${amount}: -1 (Invalid Input/Account does not exist) `
      );
      return -1;
    }
    const senderUserAccount = this._accounts.get(fromID);
    if (senderUserAccount.balance < amount) {
      console.log(
        `TRANSFER_OUT: FORMID ${fromID}, TRANSFER_IN: ${toID}, Amount ${amount}: -1 (Failed: Insufficient fund) `
      );
      return -1;
    }

    let recerverUserAccount = this._accounts.get(toID);

    //Perform Transfer
    senderUserAccount.balance -= amount;
    recerverUserAccount.balance += amount;

    let senderTransaction = new Transaction(
      "TRANSFER_OUT",
      -amount,
      new Date(),
      `Transfer to ${toID}`
    );
    senderUserAccount.transactions.push(senderTransaction);

    let receiverTransacton = new Transaction(
      "TRANSFER_IN",
      amount,
      new Date(),
      `Transfer from ${fromID}`
    );
    recerverUserAccount.transactions.push(receiverTransacton);
    console.log(
      `TRANSFER from ${fromID} to ${toID} with amount ${amount} was successful`
    );
    return senderUserAccount.balance;
  }
  //3. Transaction Tracking & Queries:
  getMostTransactions() {
    if (this._accounts.size === 0) {
      console.log(`GET_MOST_TRANSACTION. Transaction Does not exist`);
    }

    let maxTransactionCount = 0;
    let mostTransactionID = null;

    for (let [accountID, accountDetails] of this._accounts.entries()) {
      //check transaction
      let transactionCount = accountDetails.transactions.length;
      if (transactionCount > maxTransactionCount) {
        maxTransactionCount = transactionCount;
        mostTransactionID = accountID;
      }
    }
    if (maxTransactionCount == 0 || mostTransactionID == null) {
      let msg = "NO TRANSACTION HAS BEEN RECORDED";
      console.log(`GET_MOST_TRANSACTION: ${msg}`);
      return msg;
    }

    let result = `ACCOUNT_WITH_MOST_TRANSACTION ${mostTransactionID}: (${maxTransactionCount}) transactions`;
    console.log(`GET_MOST_TRANSACTION: ${result}`);
    return result;
  }

  sortTransactions(accountID) {
    if (!this._accounts.has(accountID)) {
      console.log(
        `SORT_TRANSACTION ${accountID}: -1(Account ID does not exist)`
      );
      return -1;
    }

    let accountDetails = this._accounts.get(accountID);
    //Are we returning an array of sorted transacttion.?
    let result = accountDetails.transactions.sort(
      (a, b) => a.amount - b.amount
    );
    console.log(
      `SORTED_TRANSACTION ${accountID}:`,
      result.map((t) => t.getDetails())
    );
  }

  processOperations(operationsArray) {
    console.log("------Processing Operation -------");
    operationsArray.forEach(([opType, ...args]) => {
      switch (opType) {
        case "CREATE_ACCOUNT":
          this.createAccount(args[0]);
          break;
        case "CHECK_BALANCE":
          this.checkBalance(args[0]);
          break;
        case "DEPOSIT":
          this.deposit(args[0], parseInt(args[1]));
          break;
        case "WITHDRAW":
          this.deposit(args[0], parseFloat(args[1]));
          break;
        case "TRANSFER":
          this.transfer(args[0], args[1], parseFloat(args[2]));
          break;
        case "GET_MOST_TRANSACTIONS":
          this.getMostTransactions();
          break;
        case "SORT_TRANSACTION":
          this.sortTransactions(args[0]);
          break;
        default:
          console.log(`Invalid Operation: ${opType}`);
      }
    });
  }
}

const bank = new BankingSystem();
const Ops = [
  ["CREATE_ACCOUNT", "A1"],
  ["CREATE_ACCOUNT", "A2"],
  // ["CREATE_ACCOUNT", "A3"],
  // ["CREATE_ACCOUNT", "A1"], // Should return false
  ["DEPOSIT", "A1", "100"],
  ["DEPOSIT", "A2", "50"],
  // ["DEPOSIT", "A3", "200"],
  // ["DEPOSIT", "A1", "50"], // A1 balance becomes 150
  // ["DEPOSIT", "A4", "100"], // Non-existent account
  ["CHECK_BALANCE", "A1"], // Expected: 150
  ["CHECK_BALANCE", "A2"], // Expected: 150
  ["WITHDRAW", "A1", "75"], // A1 balance becomes 75
  // ["WITHDRAW", "A2", "100"], // Insufficient funds
  ["CHECK_BALANCE", "A1"], // Expected: 75
  // ["CHECK_BALANCE", "A4"], // Non-existent account
  // ["TRANSFER", "A1", "A2", "25"], // A1: 50, A2: 75
  // ["TRANSFER", "A2", "A3", "100"], // A2: -25 (Insufficient funds), should return -1
  // ["TRANSFER", "A1", "A1", "10"], // Same account, should return -1
  // ["CHECK_BALANCE", "A1"], // Expected: 50
  // ["CHECK_BALANCE", "A2"], // Expected: 75
  // ["CHECK_BALANCE", "A3"], // Expected: 200
  ["GET_MOST_TRANSACTIONS"], // Will reflect transaction counts
  // ["SORT_TRANSACTIONS", "A1"], // Sorts A1's transactions
  // ["CHECK_BALANCE", "A1"], // Should still be 50
  // ["SORT_TRANSACTIONS", "A4"], // Non-existent account
];
bank.processOperations(Ops);
