// Get the sql client
import mysql from "mysql2/promise";

/**
-- SELECT DATABASE(): display the name of the currently selected or active database in MySQL
-- SHOW TABLES :  list all tables in the currently selected database.
-- SHOW DATABASES: Shows all the databases that you have permission to access 
-- USE expenses : To use a specific database;  
-- TRUNCATE TABLE new_Expense;
 * */

// First estableish a connection with the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Macarthy34175",
});

// SQL Command to create a database
const createDatabase = "CREATE DATABASE IF NOT EXISTS Estate";
// Use async function to handle the connection and query execution
async function setupDatabase() {
  try {
    const connect = await connection;
    console.log("Connected Successifully");

    // Execute the database query
    const result = await connect.query(createDatabase);

    console.log("Database already exist:", result);

    // Use the Database
    await connect.query("USE Estate");
    return connect;
  } catch (error) {
    console.error("Error", error);
  }
}
// setupDatabase();

// Create a tables inside the database
async function createtables() {
  try {
    // Connect the table with the database
    const connect = await setupDatabase();

    // SQL Command to create the Hotel Tables
    const hoteltables = `
    CREATE TABLE IF NOT EXISTS Hotel(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL
    )`;

    // Connect the table with the database
    const result = await connect!.query(hoteltables);
    console.log("Table 'Hotel' already exist: ", result);
    return connect;
  } catch (error) {
    console.error("Error: ", error);
  }
}
// createtables();

// Add record to the database
async function addrecord() {
  try {
    const connect = await createtables();
    await connect?.query("USE Estate");
    const newrecord = await connect?.query(
      "insert into Hotel(name, price) values ('Computer','100')"
    );
    console.log("Record added sucessfully", newrecord);
    await connect?.end();
  } catch (error) {
    console.error(error);
  }
}
// addrecord();
