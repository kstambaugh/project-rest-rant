require('dotenv').config()

const { application } = require('express');
const express = require('express');

const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.send('hello world')
})
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)