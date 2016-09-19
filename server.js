
const PORT = process.env.PORT || 3030

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(logger('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/dist'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  console.log('hello headers')
  next();
})

app.get('/getInfo/:summonerId', (req, res) => {
  const summonerId = req.params.summonerId
  const apiKey = 'a85d0753-6824-4725-a76f-23be84110e08'
  axios.get(`https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/${summonerId}?api_key=${apiKey}`)
    .then((response) => {
      console.log('success from server!!!', response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.log('error from server!!!')
      res.status(404).send('error from server~*~**~')
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!!`)
})
