import express from "express";

import {
  createUser,
  loginUser,
  getAllUsers,
  getAllMerchants,
  getLoggedInUser,
  signUp
} from "../controllers/userController.js";
const router = express.Router();
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.post("/auth/create-user", authGuard, createUser );
router.post("/login", loginUser);
router.post("/signup", signUp);
router.get("/getusers", authGuard, getAllUsers);
router.get("/getmerchants", getAllMerchants);
router.get("/getloginuser", authGuard, getLoggedInUser);


module.exports = router;

