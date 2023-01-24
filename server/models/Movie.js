const { Schema, model } = require("mongoose");


const movieSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    genre:{
        type:[String],
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    synopsis:{
        type:String,
        required:true
    }
    
  });
  
  const Movie = model('Movie', movieSchema);
  
  module.exports = Movie;