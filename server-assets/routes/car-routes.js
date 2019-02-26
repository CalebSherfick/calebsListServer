const router = require('express').Router()
let Car = require('../models/Car')

//LOGGER FOR CAR ROUTES
router.use('*', (req, res, next) => {
  console.log('A NEW CAR IN CAR ROUTES!!!')
  next()
})

//GET ALL
router.get('', (req, res, next) => {
  Car.find({})
    .then(cars => {
      res.status(200).send(cars)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//GET BY ID
router.get('/:id', (req, res, next) => {
  Car.findById(req.params.id)
    .then(car => {
      if (car) {
        return res.status(200).send(car)
      }
      res.status(400).send('No Car at this ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//CREATE
router.post('', (req, res, next) => {
  Car.create(req.body)
    .then(car => {
      res.status(201).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//UPDATE
router.put('/:id', (req, res, next) => {
  Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(car => {
      res.status(200).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//DELETE
router.delete('/:id', (req, res, next) => {
  Car.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully Deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router