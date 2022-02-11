import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))) //criando rota para acessar as imagens da aplicação

app.listen(3333)

//============================================================================================================================
//                                                   ESTUDO
//============================================================================================================================
// Rota: Endereço completo da nossa requisição
// Recurso: Qual entidade que estamos acessando o sistema

//                          MÉTODOS HTTP
// POST: http://localhost:3333/users = Criar um usuário
// GET: http://localhost:3333/users = Listar todos os usuários
// GET: http://localhost:3333/users/5 = Buscar dados do usuário com id 5

// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação no back-end
// GET: Buscar uma ou mais informações do back-end 
// POST: Criar uma nova informação no back-end

// ==========================================================================================================================
//                          BANCO DE DADOS
// Escrita do banco de dados no formato sql = SELECT * FROM users WHERE name = 'Diego'
// Escrita do banco de dados no formato javascript = knex('user').where('name', 'Diego').select('*') => É adaptado a qualquer 
// banco de dados

//                          PARÂMETROS 

// const users = [
//     'Diego', //0
//     'Cleiton', //1
//     'Robson', //2
//     'Fernanda' //3
// ]

// // QUERY.PARAMS = são parâmetros que vem na própria rota, geralmente opcionais, para filtros/paginação

// app.get('/users', (request, response) => {
//     const search = String (request.query.search)

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users //search ? = if e o : é o else

//     return response.json(filteredUsers)
// })

// // REQUEST.PARAMS = Parâmetros que vem na própria rota que identificam um recurso - É utilizado quando se quer buscar apenas 1
// // único usuário ou atualizar um único usuário. É um parâmetro obrigatório.

// app.get('/users/:id', (request, response) =>{
//     const id = Number (request.params.id)

//     const user = users[id]

//     return response.json(user)
// })

// // REQUEST.BODY = Parâmetros para criação/atualização de informações

// app.post('/users', (request, response) => {
//     const data = request.body

//     console.log(data)

//     const user = {
//         name: data.name,
//         email: data.email,
//         idade: data.idade
//     }

//     return response.json(user)
// })