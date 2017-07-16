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

/** API routes */
// Muestra todos los speakers.
app.get('/api/cities', (req, res) => {

  var city = req.query.city;
  locationUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d44a9a4bee745cb891f925b29dea38c0&format=json";


request(locationUrl, function (error, response, body) {
if (!error && response.statusCode == 200) {
  weatherObj=JSON.parse(body);
  weatherObj=weatherObj.main;
  res.json(weatherObj);
}
})
})

// Muestra info de un único speaker.


// envía el index.html para la SPA.
app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})

/** Inicia el servidor */
app.listen(3003, () => console.log('Express running on port 3003'))
