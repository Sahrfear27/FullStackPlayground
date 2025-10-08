/***
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

Considerations:
Choose an appropriate data structure for storing accounts to ensure efficient lookups.
Justify your choice.
Implement robust input validation and error handling for all methods.

OOP Concepts Illustrated
1. Encapsulation: Achieved by bundling data (account balance, transactions) and methods 
(deposit, withdraw, transfer) that operate on that data within classes (Account, BankingSystem).


2. Abstraction: The BankingSystem class provides a simplified interface for interacting with the 
banking operations, hiding the complex internal details of how accounts are stored or transactions are managed. 
Users don't need to know the Map implementation detail. 
The Transaction class abstracts the concept of a single financial movement.

3.  Inheritance (and Polymorphism): While not strictly required for this basic system, we can introduce a
 base Transaction class and then specialized transaction types (e.g., DepositTransaction, WithdrawalTransaction) 
 that inherit from it. This allows for Polymorphism where we can treat all transaction types uniformly as Transaction
objects in a list, but they might have different underlying logic or properties if the system were to expand 
(e.g., calculating fees differently).
 * */

class Transaction {
  // A simpler Transaction class that just records the basics
  constructor(type, amount, date = new Date(), description = "") {
    this.type = type; // e.g., 'DEPOSIT', 'WITHDRAW', 'TRANSFER_OUT', 'TRANSFER_IN'
    this.amount = amount; // Positive for credit, negative for debit
    this.date = date;
    this.description = description;
  }

  // Method to get a readable detail, common for all types
  getDetails() {
    return `${this.type} of ${Math.abs(
      this.amount
    )} on ${this.date.toLocaleString()} - ${this.description}`;
  }
}

class BankingSystem {
  constructor() {
    // Stores { accountId: { balance: number, transactions: Transaction[] } }
    this.accounts = new Map();
  }

  // Helper to check if an account exists
  isAccExist(accountId) {
    return this.accounts.has(accountId);
  }

  // 1. Account Management
  createAccount(accountId) {
    if (this.isAccExist(accountId)) {
      console.log(
        `CREATE_ACCOUNT ${accountId}: false (Account already exists)`
      );
      return false;
    }
    this.accounts.set(accountId, { balance: 0, transactions: [] });
    console.log(
      `CREATE_ACCOUNT ${accountId}: true (Account created successfully)`
    );
    return true;
  }

  checkBalance(accountId) {
    if (this.isAccExist(accountId)) {
      const balance = this.accounts.get(accountId).balance;
      console.log(`CHECK_BALANCE ${accountId}: ${balance}`);
      return balance;
    }
    console.log(`CHECK_BALANCE ${accountId}: -1 (Account does not exist)`);
    return -1;
  }

  // 2. Financial Operations
  deposit(accountId, amount) {
    if (!this.isAccExist(accountId) || isNaN(amount) || amount <= 0) {
      console.log(
        `DEPOSIT ${accountId} ${amount}: -1 (Invalid account or amount)`
      );
      return -1;
    }
    const account = this.accounts.get(accountId);
    account.balance += amount;
    account.transactions.push(
      new Transaction("DEPOSIT", amount, new Date(), `Deposit of ${amount}`)
    );
    console.log(`DEPOSIT ${accountId} ${amount}: ${account.balance}`);
    return account.balance;
  }

  withdraw(accountId, amount) {
    if (!this.isAccExist(accountId) || isNaN(amount) || amount <= 0) {
      console.log(
        `WITHDRAW ${accountId} ${amount}: -1 (Invalid account or amount)`
      );
      return -1;
    }
    const account = this.accounts.get(accountId);
    if (account.balance < amount) {
      console.log(`WITHDRAW ${accountId} ${amount}: -1 (Insufficient funds)`);
      return -1;
    }
    account.balance -= amount;
    account.transactions.push(
      new Transaction(
        "WITHDRAW",
        -amount,
        new Date(),
        `Withdrawal of ${amount}`
      )
    );
    console.log(`WITHDRAW ${accountId} ${amount}: ${account.balance}`);
    return account.balance;
  }

  transfer(fromId, toId, amount) {
    if (
      !this.isAccExist(fromId) ||
      !this.isAccExist(toId) ||
      fromId === toId ||
      isNaN(amount) ||
      amount <= 0
    ) {
      console.log(
        `TRANSFER ${fromId} ${toId} ${amount}: -1 (Invalid transfer parameters)`
      );
      return -1;
    }
    const fromAccount = this.accounts.get(fromId);
    if (fromAccount.balance < amount) {
      console.log(
        `TRANSFER ${fromId} ${toId} ${amount}: -1 (Insufficient funds in source)`
      );
      return -1;
    }

    const toAccount = this.accounts.get(toId);

    // Perform transfer
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    // Record transactions for both accounts
    fromAccount.transactions.push(
      new Transaction(
        "TRANSFER_OUT",
        -amount,
        new Date(),
        `Transfer to ${toId}`
      )
    );
    toAccount.transactions.push(
      new Transaction(
        "TRANSFER_IN",
        amount,
        new Date(),
        `Transfer from ${fromId}`
      )
    );

    console.log(`TRANSFER ${fromId} ${toId} ${amount}: ${fromAccount.balance}`);
    return fromAccount.balance;
  }

  // 3. Transaction Tracking & Queries
  getMostTransactions() {
    if (this.accounts.size === 0) {
      console.log("GET_MOST_TRANSACTIONS: No accounts available");
      return "No accounts available";
    }

    let mostTransactionsAccountId = null;
    let maxTransactions = -1;

    for (const [accountId, accountDetails] of this.accounts.entries()) {
      const transactionCount = accountDetails.transactions.length;

      if (transactionCount > maxTransactions) {
        maxTransactions = transactionCount;
        mostTransactionsAccountId = accountId;
      }
    }

    if (mostTransactionsAccountId === null || maxTransactions === 0) {
      const msg = "No transactions have been made across all accounts.";
      console.log(`GET_MOST_TRANSACTIONS: ${msg}`);
      return msg;
    }

    const result = `Account with most transactions: '${mostTransactionsAccountId}' (${maxTransactions} transactions).`;
    console.log(`GET_MOST_TRANSACTIONS: ${result}`);
    return result;
  }

  sortTransactions(accountId) {
    if (!this.isAccExist(accountId)) {
      console.log(
        `SORT_TRANSACTIONS ${accountId}: -1 (Account does not exist)`
      );
      return -1;
    }
    const account = this.accounts.get(accountId);
    // Sort a copy of the transactions by amount
    const sorted = [...account.transactions].sort(
      (a, b) => a.amount - b.amount
    );
    console.log(
      `SORT_TRANSACTIONS ${accountId}:`,
      sorted.map((t) => t.getDetails())
    );
    return sorted;
  }

  // 4. Bulk Operation Processing
  processOperations(operations) {
    console.log("--- Processing Operations ---");
    operations.forEach(([opType, ...args]) => {
      switch (opType) {
        case "CREATE_ACCOUNT":
          this.createAccount(args[0]);
          break;
        case "DEPOSIT":
          this.deposit(args[0], parseFloat(args[1]));
          break;
        case "WITHDRAW":
          this.withdraw(args[0], parseFloat(args[1]));
          break;
        case "TRANSFER":
          this.transfer(args[0], args[1], parseFloat(args[2]));
          break;
        case "CHECK_BALANCE":
          this.checkBalance(args[0]);
          break;
        case "GET_MOST_TRANSACTIONS":
          this.getMostTransactions();
          break;
        case "SORT_TRANSACTIONS":
          this.sortTransactions(args[0]);
          break;
        default:
          console.log(`Invalid Operation: ${opType}`);
          break;
      }
    });
  }
}

// --- Demonstration ---
const bank = new BankingSystem();

bank.processOperations([
  ["CREATE_ACCOUNT", "A1"],
  ["CREATE_ACCOUNT", "A2"],
  ["CREATE_ACCOUNT", "A3"],
  ["CREATE_ACCOUNT", "A1"], // Should return false
  ["DEPOSIT", "A1", "100"],
  ["DEPOSIT", "A2", "50"],
  ["DEPOSIT", "A3", "200"],
  ["DEPOSIT", "A1", "50"], // A1 balance becomes 150
  ["DEPOSIT", "A4", "100"], // Non-existent account
  ["CHECK_BALANCE", "A1"], // Expected: 150
  ["WITHDRAW", "A1", "75"], // A1 balance becomes 75
  ["WITHDRAW", "A2", "100"], // Insufficient funds
  ["CHECK_BALANCE", "A1"], // Expected: 75
  ["CHECK_BALANCE", "A4"], // Non-existent account
  ["TRANSFER", "A1", "A2", "25"], // A1: 50, A2: 75
  ["TRANSFER", "A2", "A3", "100"], // A2: -25 (Insufficient funds), should return -1
  ["TRANSFER", "A1", "A1", "10"], // Same account, should return -1
  ["CHECK_BALANCE", "A1"], // Expected: 50
  ["CHECK_BALANCE", "A2"], // Expected: 75
  ["CHECK_BALANCE", "A3"], // Expected: 200
  ["GET_MOST_TRANSACTIONS"], // Will reflect transaction counts
  ["SORT_TRANSACTIONS", "A1"], // Sorts A1's transactions
  ["CHECK_BALANCE", "A1"], // Should still be 50
  ["SORT_TRANSACTIONS", "A4"], // Non-existent account
]);

console.log("\n--- Final Account States (for verification) ---");
console.log("Account A1:", bank.accounts.get("A1"));
console.log("Account A2:", bank.accounts.get("A2"));
console.log("Account A3:", bank.accounts.get("A3"));
