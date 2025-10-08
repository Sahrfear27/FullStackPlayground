/**
 Implement a function, TOP_ACTIVITY(n, accounts, transaction), that returns the identifiers of the n most active accounts in descending order of their financial 
 activity indicator. 
 In case of a tie in the financial activity indicator, accounts should be sorted alphabetically by accountid in ascending order.

The returned value should be an array of strings, with each string formatted as <accountid> (<activity_indicator>).

The financial activity indicator is defined as the sum of all successful transactions for an account,
 including money deposited and/or successfully transferred. Unsuccessful transactions are not to be included.

If fewer than n accounts exist in the system, then return all their identifiers in the described format.
 * 
 * **/

// Sample data (you would typically fetch this from a database or API)
// Sample list of accounts
const accounts = [
  { accountId: "A001" },
  { accountId: "B002" },
  { accountId: "C003" },
  { accountId: "D004" },
  { accountId: "E005" },
];

// Sample list of transactions
const transactions = [
  { accountId: "A001", amount: 100, isSuccessful: true },
  { accountId: "B002", amount: 50, isSuccessful: true },
  { accountId: "A001", amount: 200, isSuccessful: true },
  { accountId: "C003", amount: 75, isSuccessful: false }, // Unsuccessful
  { accountId: "B002", amount: 10, isSuccessful: true },
  { accountId: "D004", amount: 150, isSuccessful: true },
  { accountId: "A001", amount: 50, isSuccessful: true },
  { accountId: "E005", amount: 20, isSuccessful: true },
  { accountId: "C003", amount: 100, isSuccessful: true },
  { accountId: "B002", amount: 30, isSuccessful: false },

  // Extra accounts not included in the original `accounts` array
  { accountId: "E004", amount: 350, isSuccessful: true },
  { accountId: "F004", amount: 300, isSuccessful: true },
  { accountId: "Z004", amount: 300, isSuccessful: true },
];

// Function to get top N accounts by financial activity
function TOP_ACTIVITY(n, accounts, transactions) {
  // 🛑 Edge case: If n is less than or equal to 0, return empty result. there's no "top 0" result to return.
  if (n <= 0) {
    return [];
  }

  // 📊 Step 1: Initialize a Map to track financial activity per account
  const activityMap = new Map(); // Key: accountId, Value: sum of successful transaction amounts

  // 🧾 Step 2: Add all given accountIds to the map with 0 initial activity
  accounts.forEach((account) => {
    activityMap.set(account.accountId, 0);
  });

  // 💰 Step 3: Process transactions and update activityMap for successful ones
  transactions.forEach((transaction) => {
    if (transaction.isSuccessful) {
      // Get current activity value or use 0 if the accountId is not yet in map
      const currentActivity = activityMap.get(transaction.accountId) || 0;

      // Update the total activity amount for that accountId
      activityMap.set(
        transaction.accountId,
        currentActivity + transaction.amount
      );
    }
  });

  // 📋 Step 4: Convert the activityMap into a list of objects for sorting
  const accountActivityList = [];
  activityMap.forEach((activity_indicatior, accountId) => {
    accountActivityList.push({ accountId, activity_indicatior });
  });

  // 🔢 Step 5: Sort the accounts based on:
  accountActivityList.sort((a, b) => {
    // Primary: Descending by activity value
    if (a.activity_indicatior !== b.activity_indicatior) {
      return b.activity_indicatior - a.activity_indicatior;
    }
    // Secondary: Ascending lexicographical order of accountId in case of tie
    return a.accountId.localeCompare(b.accountId);
  });

  // 🏆 Step 6: Prepare the final top `n` result list, formatted as "ID (value)": ensures that you don’t try to loop more times than there are accounts.
  const result = [];
  for (let i = 0; i < Math.min(n, accountActivityList.length); i++) {
    const account = accountActivityList[i];
    result.push(`${account.accountId} (${account.activity_indicatior})`);
  }

  // ✅ Return the top `n` active accounts
  return result;
}

console.log("Top 3 Active Accounts");
console.log(TOP_ACTIVITY(3, accounts, transactions));

console.log("\nTop 5 Active Accounts");
console.log(TOP_ACTIVITY(5, accounts, transactions));

// Test for Ties
