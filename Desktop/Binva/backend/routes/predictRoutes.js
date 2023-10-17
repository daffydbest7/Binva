import express from "express";

import {

  predict,
  predictByIp
  
} from "../controllers/predictController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";


router.post("/predict",authGuard, predict);
router.get("/detect",authGuard, predictByIp);


module.exports = router;