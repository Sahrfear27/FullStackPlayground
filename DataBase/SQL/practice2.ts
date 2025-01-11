import mysql from "mysql2/promise";

// Setp1: Establish a connection to the database

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Macarthy34175",
});

//Step2: Create a database
const createDatabase = "CREATE DATABASE IF NOT EXISTS Demo";

async function setupDatabase() {
  try {
    // Connect to the database
    const connect = await connection;
    console.log("Conneected Successfully");

    const result = await connect.query(createDatabase);
    console.log("Database exist :", result);

    await connect.query("USE Demo");
    return connect;
  } catch (error) {
    console.error(error);
  }
}
// setupDatabase();

// Create a tables to the database

async function createTables() {
  try {
    const connect = await setupDatabase();

    const demoTables = `
    CREATE TABLE IF NOT EXISTS Demo(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL
    )`;

    // Connect the table and the database
    const result = await connect?.query(demoTables);
    console.log("Table Created ", result);
    return connect;
  } catch (error) {
    console.error(error);
  }
}
// createTables();

// Add new Record
async function addnewrecord() {
  try {
    const connect = await createTables();
    await connect?.query("USE Demo");
    const newRecord = "INSERT INTO Demo (name, price) VALUES ('Iphone', '200')";
    const result = await connect?.query(newRecord);
    console.log("Record added", result);
  } catch (error) {
    console.error(error);
  }
}
// addnewrecord();

// Retrive Record
async function allrecord() {
  try {
    const connect = await createTables();
    const records = connect?.query("SELECT * FROM Demo");
    console.log("____Record____\n");
    const result = await records;
    console.log(result?.[0]);
  } catch (error) {
    console.error(error);
  }
}
// allrecord();

// Update record
async function updateRecord() {
  try {
    const connect = await createTables();
    const result = connect?.query(
      "update Demo set name = 'Gas', price='1500' where id=2"
    );
    result
      ?.then(() => console.log("Updated Successfully"))
      .catch((error) => console.log("Fail to update", error));
  } catch (error) {
    console.error(error);
  }
}
updateRecord();
