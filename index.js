const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the root route!' });
})

app.get('/helloWorld', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' })
})

app.get('/byebyeWorld', (req, res) => {
  res.status(200).json({ message: 'Bye Bye, World!' })
})

app.get('/dinero', (req, res) => {
  res.status(200).json({ message: 'Hi, Dinero!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )

module.exports = app
