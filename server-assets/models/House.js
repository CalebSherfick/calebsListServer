let mongoose = require('mongoose')
let Schema = mongoose.Schema

//DEFINE THE SCHEMA
let house = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number, required: true },
  year: { type: Number, required: true, minLength: 2, maxlength: 4 },
  price: { type: Number, required: true, minlength: 3, maxlength: 10 },
  imgUrl: { type: String, required: true },
  description: { type: String, maxlength: 300 }
})

//EXPORT SCHEMA
module.exports = mongoose.model('House', house)