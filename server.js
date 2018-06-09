const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  console.log(req.body)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Everything's good on port: ${PORT}`)
})
