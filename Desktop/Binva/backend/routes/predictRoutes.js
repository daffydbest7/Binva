import express from "express";

import {

  predict
  
} from "../controllers/predictController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";


router.post("/predict",authGuard, predict);


module.exports = router;