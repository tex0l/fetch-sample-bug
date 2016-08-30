const express = require('express')

const app = express()

app.get('/', (request, response, next) => {
  response.sendStatus(200)
})

app.listen(8000, 'localhost')
