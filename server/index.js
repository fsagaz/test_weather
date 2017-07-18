// server/index.js
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

/** Express configuration */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))






app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})


app.listen(3003, () => console.log('Express running on port 3003'))
