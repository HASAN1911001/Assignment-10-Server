const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const course1 = require('./data/courses/1.json')
const course2 = require('./data/courses/2.json')
const course3 = require('./data/courses/3.json')
const course4 = require('./data/courses/4.json')
const course5 = require('./data/courses/5.json')
const course6 = require('./data/courses/6.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course-categories', (req, res) => {
  res.send(categories)
})

app.get('/courses/1', (req, res) => {
  res.send(course1)
})

app.get('/courses/2', (req, res) => {
  res.send(course2)
})

app.get('/courses/3', (req, res) => {
  res.send(course3)
})

app.get('/courses/4', (req, res) => {
  res.send(course4)
})

app.get('/courses/5', (req, res) => {
  res.send(course5)
})

app.get('/courses/6', (req, res) => {
  res.send(course6)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})