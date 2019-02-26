const router = require('express').Router()
let Job = require('../models/Job')

//LOGGER FOR CAR ROUTES
router.use('*', (req, res, next) => {
  console.log('A NEW CAR IN CAR ROUTES!!!')
  next()
})

//GET ALL
router.get('', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.status(200).send(jobs)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//GET BY ID
router.get('/:id', (req, res, next) => {
  Job.findById(req.params.id)
    .then(job => {
      if (job) {
        return res.status(200).send(job)
      }
      res.status(400).send('No Job at this ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//CREATE
router.post('', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//UPDATE
router.put('/:id', (req, res, next) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(job => {
      res.status(200).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//DELETE
router.delete('/:id', (req, res, next) => {
  Job.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully Deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router