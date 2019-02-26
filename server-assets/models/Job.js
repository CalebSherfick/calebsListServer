let mongoose = require('mongoose')
let Schema = mongoose.Schema

//DEFINE THE SCHEMA
let job = new Schema({
  company: { type: String, required: true, minlength: 3, maxlength: 30 },
  jobTitle: { type: String, required: true, minlength: 3, maxlength: 40 },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String, maxlength: 300 }
})

//EXPORT SCHEMA
module.exports = mongoose.model('Job', job)