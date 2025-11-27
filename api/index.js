const express = require('express')
const cors = require('cors')
const prisma = require('./prismaCli')   // <-- IMPORTANTE

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API do Curso Ninja do Cypress!' })
})

app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body

  if (!name){
    return res.status(400).json({ Error: 'Name is required!' })
  }
  if (!email){
    return res.status(400).json({ Error: 'Email is required!' })
  }
  if (!password){
    return res.status(400).json({ Error: 'Password is required!' })
  }

  try {
    // Verificar se email já existe
    const userExists = await prisma.user.findUnique({
      where: { email }
    })

    if (userExists) {
      return res.status(400).json({ Error: 'Email já registrado!' })
    }

    // Criar usuário no banco
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password   // Em produção, use hash!
      }
    })

    return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      user
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({ Error: 'Erro no servidor!' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
