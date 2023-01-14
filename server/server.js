const PORT = 8000
const express = require ('express')
const cors = require ('cors')
const axios = require ('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/movie', (req,res) => {

    const options = {
      method: 'GET',
      url: 'https://ott-details.p.rapidapi.com/advancedsearch',
      params: {page: '1'},
      headers: {
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        
      }
    };
    
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(8000, () => console.log(`server is running on port ${PORT}`))

