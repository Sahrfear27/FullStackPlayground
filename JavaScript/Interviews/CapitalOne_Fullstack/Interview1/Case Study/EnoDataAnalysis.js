/**
 
Question 1:
Is this data coming from the clickstream data store or the transaction data store?
Answer:
It depends on which datastore is passed to the DatastoreRetriever class when the class is instantiated
If you pass the clickstream store, it retrieves behavioral events (e.g., clicks, page views).
If you pass the transaction store, it retrieves financial transactions

This flexibility lets the same logic analyze different types of customer behavior.



Question 2:
Does the retrieve method always return data for each timestamp intervalOrObservation?
Answer:
No, the method may return null or undefined if:
There’s no observation recorded for that timestamp.
The customer ID does not exist in the data store.
The datastore doesn't cover that time range.
This means some time intervalOrObservations may not yield data, so the result list may have fewer than 5 observations.


Question 3:
Is the 5-minute interval range fixed, or can it be adjusted for different
use cases to improve recommendations?
Answer:
In the JavaScript improvement, you can set the default parameter to 5. making it more flexible

 * **/

// A class that retrieves recent observations for a customer.
class DatastoreRetriever {
  constructor(store) {
    this.store = store; // Store could be clickstream or transaction data store
  }

  // Retrieves observations for the past `intervalOrObservation` minutes (default = 5)
  retrieveRecent(customerId, currTime, intervalOrObservation = 5) {
    const result = [];

    for (let i = 0; i < intervalOrObservation; i++) {
      /**
       Target time is the specific past time point (e.g., minute) calculated in a loop to retrieve recent data.
       generate a series of recent timestamps that is the last 5 minutes before the current time.:  
       eg: currTime = 6000;
       const intervalOrObservation = 5
       So over 5 iterations, you're retrieving data for: [595, 596, 597, 598, 599] — i.e., the last 5 minutes before the current time.

      | i | Expression            |targetTime |
      |---|-----------------------|-----------|
      | 0 | 600 - 5 + 0 = 595     | 595       |
      | 1 | 600 - 5 + 1 = 596     | 596       |
      | 2 | 600 - 5 + 2 = 597     | 597       |
      | 3 | 600 - 5 + 3 = 598     | 598       |
      | 4 | 600 - 5 + 4 = 599     | 599       |

      **/
      const targetTime = currTime - intervalOrObservation + i;
      let val;

      try {
        val = this.store.retrieve(customerId, targetTime);
      } catch (err) {
        console.error(
          `Error retrieving data for customer ${customerId} at time ${targetTime}:`,
          err
        );
        continue;
      }

      if (val !== null && val !== undefined) {
        result.push(val);
      }
    }

    return result;
  }
}

// Utility function to aggregate observation count
function aggregate(recents) {
  return recents ? recents.length : 0;
}

// Joins clickstream and transaction data for each customer
function joinDataLeft(clkStore, trxStore) {
  const clkRetriever = new DatastoreRetriever(clkStore);
  const trxRetriever = new DatastoreRetriever(trxStore);
  const result = [];

  const currTime = Math.floor(Date.now() / 1000 / 60); // Current time in minutes
  const customerIds = clkStore.custIds(); // Assuming this returns an array

  for (const cid of customerIds) {
    const clkRecent = clkRetriever.retrieveRecent(cid, currTime);
    const trxRecent = trxRetriever.retrieveRecent(cid, currTime);
    result.push(new DataTuple(cid, aggregate(clkRecent), aggregate(trxRecent)));
  }
  return result;
}

// Mock classes and execution for demonstration purposes
class DataTuple {
  constructor(customerId, clkCount, trxCount) {
    this.customerId = customerId;
    this.clkCount = clkCount;
    this.trxCount = trxCount;
  }
}

class Datastore {
  constructor() {
    this.data = new Map(); // Map of customerId -> Map of timestamp -> observation
  }

  retrieve(customerId, timestamp) {
    const customerData = this.data.get(customerId);
    if (!customerData) return null;
    return customerData.get(timestamp) || null;
  }

  custIds() {
    return Array.from(this.data.keys());
  }

  // Method to insert mock data for testing
  insert(customerId, timestamp, observation) {
    if (!this.data.has(customerId)) {
      this.data.set(customerId, new Map());
    }
    this.data.get(customerId).set(timestamp, observation);
  }
}

// Main execution
function main() {
  const clkStore = new Datastore();
  const trxStore = new Datastore();

  // Optional: Insert mock data here for testing
  const now = Math.floor(Date.now() / 1000 / 60);
  clkStore.insert(1, now - 1, { event: "click" });
  trxStore.insert(1, now - 2, { event: "transaction" });

  const result = joinDataLeft(clkStore, trxStore);
  console.log(result);
}

main();
