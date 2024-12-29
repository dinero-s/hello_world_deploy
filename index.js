const express = require('express')
const app = express()
const port = 2000

app.get('/helloWorld', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )

module.exports = app
