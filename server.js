const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const keys = require('./keys')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: keys.gmail.email,
        pass: keys.gmail.password
      }
    })

    let mailOptions = {
      from: 'test@testaccount.com',
      to: keys.gmail.email,
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err)

      console.log(`Message sent: %s`, info.message)
      console.log(`Message URL: %s`, nodemailer.getTestMessageUrl(info))
    })
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Everything's good on port: ${PORT}`)
})
