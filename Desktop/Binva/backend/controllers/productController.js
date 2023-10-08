const db = require("../config/db/db");
require("dotenv").config();









// get all Products
const getAllProduct = async (req, res) => {
    const admin = req.user?.admin;
  
    // Check if the authenticated user is an admin
    if ( !admin ) {
      return res.status(403).json({
        status: "error",
        error: "Only admin users can access this resource",
      });
    }
    try {
      const result = await db.query("SELECT * FROM product");
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

// get all Products by Merchants Id
const getAllProductByMerchantsId = async (req, res) => {
  const merchantId = req.params?.merchantId;
  
  try {

    const productquery = "SELECT * FROM product WHERE merchantId = $1";
    const id = [merchantId];
    const result = await db.query(productquery, id);
    return res.status(201).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "An error occurred while fetching users",
    });
  }
};  

// get Single Products by Id
const getSingleProduct = async (req, res) => {
  const productId = req.params?.productId;
  
  try {

    const productquery = "SELECT * FROM product WHERE id = $1";
    const id = [productId];
    const result = await db.query(productquery, id);
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





module.exports = { getAllProduct,getAllProductByMerchantsId, getSingleProduct};  