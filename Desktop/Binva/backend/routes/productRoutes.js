import express from "express";

import {

  getAllProducts,
  getAllProductByMerchantsId,
  
} from "../controllers/userController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.get("/getproducts", authGuard, getAllProducts);
router.get("/getproduct/:merchantId", getAllProductByMerchantsId);



module.exports = router;

