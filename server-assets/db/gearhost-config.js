//THIS FILE IS PRETTY MUCH ALWAYS THE SAME
let mongoose = require('mongoose')

//CHANGES FROM PROJECT TO PROJECT
//mongodb://<Username>:<password>@<database server>/<server name>
const connectionString = '//mongodb://calebslist:listy1$@den1.mongo1.gear.host:27001/calebslist'

let connection = mongoose.connection

//ESTABLISHES CONNECTION TO DATABASE
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//CONSOLE LOG ERRORS
connection.on('error', err => {
  console.log('[DATABASE ERROR]: ', err)
})

//CONFIRM CONNECTION
connection.once('open', () => {
  console.log('Successfully connected to database')
})