let mongoose = require('mongoose')
let Schema = mongoose.Schema

//DEFINE THE SCHEMA
let car = new Schema({
  make: { type: String, required: true, minlength: 3, maxlength: 30 },
  model: { type: String, required: true, minlength: 3, maxlength: 30 },
  year: { type: Number, required: true, minLength: 4, maxlength: 4 },
  price: { type: Number, required: true, minlength: 3, maxlength: 6 },
  description: { type: String, maxlength: 300 }
})

//EXPORT SCHEMA
module.exports = mongoose.model('Car', car)