import express from "express";

import {

  getAllProduct,
  getAllProductByMerchantsId,
  getSingleProduct
  
} from "../controllers/productController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.get("/getproducts", authGuard, getAllProduct);
router.get("/getproduct/:merchantId", getAllProductByMerchantsId);
router.get("/getproduct/:productId", getSingleProduct);


module.exports = router;

