const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
//  res.send('Hello Ninja do Cypress!!!')
  res.json({message:'API do Curso Ninja do Cypress!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})