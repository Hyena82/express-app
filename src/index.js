const express = require('express')
const app = express()
const path = require('path')

const port = 8000
const routers = require('./app/routers')
const db = require('./app/configs/db')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

db.connect()

app.get('/ui', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

routers(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})