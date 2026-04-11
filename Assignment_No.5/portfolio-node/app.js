const express = require('express')
const mongoose = require('mongoose')
const open = require('open').default

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  message: String
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/contact', async (req, res) => {
  await Contact.create(req.body)
  res.redirect('/')
})

app.listen(3000, async () => {
  console.log('Server running at http://localhost:3000')
  await open('http://localhost:3000')
})