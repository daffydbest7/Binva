const db = require("../db");
require("dotenv").config();


const createTransactionTable = async () => {
  const dropTableQuery = `DROP TABLE IF EXISTS transaction;`;
  const createUuid =`CREATE EXTENSION IF NOT EXISTS "uuid-ossp" `;

  const createTransactionTableQuery = `
    CREATE TABLE IF NOT EXISTS transaction (
      id uuid DEFAULT uuid_generate_v4(),
      amount INT NOT NULL,
      user_id uuid,
      merchant_id uuid,
      isfruad BOOLEAN,
      date TIMESTAMP DEFAULT NOW(),
      PRIMARY KEY (id)
    );
  `;

  const insertTransactionDataQuery = `
    INSERT INTO transaction (
      amount, user_id
    ) VALUES (
      $1, $2
    );
  `;
  
  const transactionData = {
    amount: 10000,
    user_id: `2dd1cc7c-ee59-466f-836f-7cda1489b7fa`,
    
  };
  const values = [
    transactionData.amount,
    transactionData.user_id
  ];

  try {
    // Drop the table if it exists
    await db.query(dropTableQuery);
    await db.query(createUuid);

    // Create the users table
    await db.query(createTransactionTableQuery);
    console.log("Article table created");

    // Insert dummy user data
    await db.query(insertTransactionDataQuery, values);
    console.log("Dummy Article data inserted");
  } catch (error) {
    console.error("Error:", error);
  }
};

// create Gif table for testing purposes
//createTransactionTable();

module.exports = { createTransactionTable };
