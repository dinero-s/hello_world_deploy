const express = require('express')
const app = express()
const port = 2000

app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )
