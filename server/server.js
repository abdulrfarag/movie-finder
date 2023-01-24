//how to start listening to the server
const cors = require ('cors')
const axios = require ('axios')
require('dotenv').config()

// routes


const express = require('express');
const db = require('./config/connection');
// Require model
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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





// app.get('/all-books', (req, res) => {
//   // Using model in route
//   Book.find({}, (err, result) => {
//     if (err) {
//       res.status(500).send({ message: 'Internal Server Error' });
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});




