import express from "express";

import {

  getAllFraudTransactionByMerchantId,
  getAllTransaction,
  getAllSuccessTransactionByMerchantId
  
} from "../controllers/transactionController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.get("/gettransactions", authGuard, getAllTransaction);
router.get("/gettransaction/fraud",authGuard, getAllFraudTransactionByMerchantId);
router.get("/gettransaction/success",authGuard, getAllSuccessTransactionByMerchantId);


module.exports = router;
