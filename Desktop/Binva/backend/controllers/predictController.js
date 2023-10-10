const db = require("../config/db/db");
require("dotenv").config();
const axios = require('axios/dist/node/axios.cjs');

const predict = async (req, res) =>{

    // get the users ip address and bank identification number
    const ip = req.ip;
    const user = req.user;
    const productId = req.params.productId;
    const {bin}= req.body;

    //query to insert into the transaction
    const transactionQuery = ` INSERT INTO transaction (
        amount, user_id, merchant_id, isfruad
      ) VALUES (
        $1, $2, $3, $4
      ) RETURNING *; `
    
    // values
    //const isfraud = false;
    //const values = [1000, user.id, "145", isfraud ];
    
    const options = {
        method: 'POST',
        url: 'https://bin-ip-checker.p.rapidapi.com/',
        params: {
          bin: bin,
          ip: ip
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST,
        },
        data: {
          bin: bin,
          ip: ip
        }
      };
      
      try {
          const response = await axios.request(options);
          //check if ip and bin matches same country
        
          if(response.data.IP.IP_BIN_match){
            const result = await db.query(transactionQuery, [1000, user.id, "947bb872-7358-405f-b980-de42b4e31bb5" , 'FALSE'])
            return res.status(201).json({
              status: "success",
              data: response.data,
              transaction: result.rows[0]
            });
          }else{
            const result = await db.query(transactionQuery, [1000, user.id, "947bb872-7358-405f-b980-de42b4e31bb5" , 'TRUE'])
            return res.status(201).json({
                status: "success",
                message: "Ip address doesn't match, possible fraud detected",
                ip: response.data.IP
              });
          }
          
      } catch (error) {
          console.error(error);
          res.status(500).json({
              status: "error",
              error: "An error occurred with the prediction",
            });
      }
}

module.exports ={predict}