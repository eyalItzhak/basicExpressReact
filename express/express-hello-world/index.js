var express = require('express')
var app = express()
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  console.log("Hello World from Server")
  res.send('Hello World sent to Client!')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
