const db = require("../db");
require("dotenv").config();
const bcrypt = require("bcrypt");

const createProduct = async () => {
  const dropTableQuery = `DROP TABLE IF EXISTS product;`;
  const createUuid =`CREATE EXTENSION IF NOT EXISTS "uuid-ossp" `;

  const createProductQuery = `
    CREATE TABLE IF NOT EXISTS product (
      id uuid DEFAULT uuid_generate_v4(),
      productName VARCHAR(60) NOT NULL,
      avatar TEXT,
      merchantId uuid,
      price TEXT,
      PRIMARY KEY (id)
    );
  `;

  const insertProductDataQuery = `
    INSERT INTO product (
     productName, avatar,merchantId,price
    ) VALUES (
      $1, $2, $3, $4
    );
  `;
  
  const productData = {
    productName: "DATA",
    avatar: "https://media.giphy.com/media/X7s4uckfyihGJDrSpo/giphy.gif",
    merchantId: "57a26a6b-8d66-4890-b5fd-6964b5d8c997",
    price: ""
  };
  const values = [
    productData.productName,
    productData.avatar,
    productData.merchantId,
    productData.price
    
  ];

  try {
    // Drop the table if it exists
    //await db.query(dropTableQuery);
    // create uuid-ossp if it doesnt exist
    await db.query(createUuid);

    // Create the users table
    await db.query(createProductQuery);
    console.log("Product table created");

    // Insert dummy user data
    await db.query(insertProductDataQuery, values);
    console.log("Dummy Product data inserted");
  } catch (error) {
    console.error("Error:", error);
  }
};

// create user table for testing purposes
//createProduct();

module.exports = { createProduct };
