const express = require('express')
const app = express()
const port = 8000
const routers = require('./app/routers')

routers(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})