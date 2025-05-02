const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const db = require('./config/mongoDB')
const dotenv = require('dotenv')
require('dotenv').config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/',require('./routes/contactUs'))
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }
  console.log(`Server is listening on http://localhost:${PORT}`)
}
)