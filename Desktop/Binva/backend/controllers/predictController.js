const axios = require('axios/dist/node/axios.cjs');

const predict = async (req, res) =>{

    // get the users ip address and bank identification number
    const ip = req.ip;
    const {bin}= req.body;

    //check if 
    const options = {
        method: 'POST',
        url: 'https://bin-ip-checker.p.rapidapi.com/',
        params: {
          bin: bin,
          ip: ip
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e186c30e35mshb50fb6c7970a270p168c19jsne58c092fb603',
          'X-RapidAPI-Host': 'bin-ip-checker.p.rapidapi.com'
        },
        data: {
          bin: bin,
          ip: ip
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return res.status(201).json({
              status: "success",
              data: response.data,
            });
      } catch (error) {
          console.error(error);
          res.status(500).json({
              status: "error",
              error: "An error occurred with the prediction",
            });
      }
}

module.exports ={predict}