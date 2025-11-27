const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

//habilita cors para todas as origens
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  //  res.send('Hello Ninja do Cypress!!')
  res.json({ message: 'API do Curso Ninja do Cypress!!!' })
})

app.post('/api/users/register', (req, res) => {
  const { name, email, password } = req.body

  if (!name) {
    return res.status(400).json({ Erro: 'O campo name é obrigatório!' })
  }

  if (!email) {
    return res.status(400).json({ Erro: 'O campo email é obrigatório!' })
  }

  if (!password) {
    return res.status(400).json({ Erro: 'O campo password é obrigatório!' })
  }

  console.log(req.body)
  return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})