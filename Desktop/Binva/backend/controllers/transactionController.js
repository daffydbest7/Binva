const db = require("../config/db/db");
require("dotenv").config();

// get all transaction by super admin
const getAllTransaction = async (req, res) => {
    const admin = req.user?.admin;
    //const merchant= req.user?.merchant;
    // Check if the authenticated user is an admin
    if ( !admin) {
      return res.status(403).json({
        status: "error",
        error: "Only admin  users can access this resource",
      });
    }
    try {
      const result = await db.query("SELECT * FROM transaction");
      return res.status(201).json({
        status: "success",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        error: "An error occurred while fetching products",
      });
    }
  };

// get all transaction by specific merchant
const getAllTransactionByMerchantId = async (req, res) => {
  const merchant = req.user?.merchant;
  const id= req.user?.id;
  // Check if the authenticated user is an merchant
  if ( !merchant) {
    return res.status(403).json({
      status: "error",
      error: "Only Merchants users can access this resource",
    });
  }
  try {
    const transactionQuery = `SELECT * FROM transaction WHERE merchant_id = $1`;
    const result = await db.query(transactionQuery, [id]);
    return res.status(201).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "An error occurred while fetching products",
    });
  }
};  

// get all transaction by Merchant that is fraud
const getAllFraudTransactionByMerchantId = async (req, res) => {
  const merchant = req.user?.merchant;
  const id= req.user?.id;
  // Check if the authenticated user is an merchant
  if ( !merchant) {
    return res.status(403).json({
      status: "error",
      error: "Only Merchants users can access this resource",
    });
  }
  try {
    const transactionQuery = `SELECT * FROM transaction WHERE merchant_id = $1 AND isfruad='TRUE'`;
    const result = await db.query(transactionQuery, [id]);
    return res.status(201).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "An error occurred while fetching fraudulent transactions",
    });
  }
};  

// get all transaction by Merchant that is NOT FRAUD
const getAllSuccessTransactionByMerchantId = async (req, res) => {
  const merchant = req.user?.merchant;
  const id= req.user?.id;
  // Check if the authenticated user is an merchant
  if ( !merchant) {
    return res.status(403).json({
      status: "error",
      error: "Only Merchants users can access this resource",
    });
  }
  try {
    const transactionQuery = `SELECT * FROM transaction WHERE merchant_id = $1 AND isfruad='FALSE'`;
    const result = await db.query(transactionQuery, [id]);
    return res.status(201).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "An error occurred while fetching success transactions",
    });
  }
};  




module.exports = { getAllTransaction,
  getAllTransactionByMerchantId,
  getAllFraudTransactionByMerchantId,
  getAllSuccessTransactionByMerchantId 
 };  