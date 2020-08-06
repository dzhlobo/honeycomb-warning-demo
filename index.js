require("honeycomb-beeline")({
  writeKey: process.env.HONEYCOMB_API_KEY,
  dataset: "api",
  serviceName: "api"
})


process.on('SIGINT', function() {
  process.exit();
})

const express = require('express')
const app = express()

const customContext = require('./middleware')

app.use(customContext)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
