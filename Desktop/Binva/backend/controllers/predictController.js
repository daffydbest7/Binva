require("dotenv").config();
const axios = require('axios/dist/node/axios.cjs');

const predict = async (req, res) =>{

    // get the users ip address and bank identification number
    const ip = req.ip;
    const {bin}= req.body;

    

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
            console.log(response.data.IP.IP_BIN_match);
            console.log(ip)
            return res.status(201).json({
              status: "success",
              data: response.data,
            });
          }else{
            return res.status(201).json({
                status: "success",
                message: "Ip address doesn't match, possible fraud detected"
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