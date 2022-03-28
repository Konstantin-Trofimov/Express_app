const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/add', (req, res) => {
 res.render('add', {
  title: 'Add courese',
  isAdd: true
 })
})

router.post('/add', async (req, res) => {
 const data = JSON.parse(JSON.stringify(req.body))
 const course = new Course(data.title, data.price, data.image)
 await course.save()

 res.redirect('/courses')
})

module.exports = router 