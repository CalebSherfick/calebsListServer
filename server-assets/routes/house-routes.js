const router = require('express').Router()
let House = require('../models/House')

//LOGGER FOR CAR ROUTES
router.use('*', (req, res, next) => {
  console.log('A NEW CAR IN CAR ROUTES!!!')
  next()
})

//GET ALL
router.get('', (req, res, next) => {
  House.find({})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//GET BY ID
router.get('/:id', (req, res, next) => {
  House.findById(req.params.id)
    .then(house => {
      if (house) {
        return res.status(200).send(house)
      }
      res.status(400).send('No House at this ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//CREATE
router.post('', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.status(201).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//UPDATE
router.put('/:id', (req, res, next) => {
  House.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(house => {
      res.status(200).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//DELETE
router.delete('/:id', (req, res, next) => {
  House.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully Deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router