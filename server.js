
const PORT = process.env.PORT || 3030

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(logger('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!!`)
})
