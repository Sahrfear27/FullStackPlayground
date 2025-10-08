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

//Function to get the N amount of the financial activty.
function TOP_ACTIVITY(n, account, transaction) {
  if (n <= 0) return [];

  //Use Map: activity indicator is defined as the sum of all successful
  let activityMap = new Map();

  //Add the account ID to the map
  account.forEach((element) => {
    activityMap.set(element.accountId, 0);
  });

  transaction.forEach((element) => {
    if (element.isSuccessful) {
      let previousActivityIndicatio = activityMap.get(element.accountId) || 0;
      let currentActivityIndicator = element.account;
      activityMap.set(
        element.accountId,
        previousActivityIndicatio + currentActivityIndicator
      );
    }
  });

  let activityIndicatorList = [];
  activityMap.forEach((activityIndicator, accountId) => {
    activityIndicatorList.push({ accountId, activityIndicator });
  });

  activityIndicatorList.forEach((a, b) => {
    if (a.activityIndicator !== b.activityIndicator) {
      return a.activityIndicator - b.activityIndicator;
    } else if (a.activityIndicator === b.activityIndicator) {
      a.activityIndicator.localeCompare(b.activityIndicator);
    }
  });

  let result = [];
  for (let i = 0; i < n; i++) {
    let account = activityIndicatorList[i];
    result.push(account);
  }
  return result;
}
