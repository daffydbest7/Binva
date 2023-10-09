import express from "express";
const bodyParser = require("body-parser");
import cors from "cors";
import dotenv from "dotenv";
const { createUsersAccount } = require("./config/db/queries/initialize-user-table");
const { createTransactionTable} = require("./config/db/queries/initialize-transaction-table");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const predictRoutes = require("./routes/predictRoutes");



//instantiate app and pass middlewares
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//get request to test
app.get("/", (req,res)=>{
    res.send("Server is running now...");
  });
   
//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", predictRoutes);

//tell if the server is running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running now on port ${PORT}`));