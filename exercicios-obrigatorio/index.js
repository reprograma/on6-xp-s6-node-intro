// Criar APIs para seguintes telas:
// 1. Tela de Login (email e password)
// 2. Tela de Cadastro (nome, email e senha)
// 3. Tela de Listagem de to do list (visualização a lista que já existe)
// 4. Cadastro de novo to do e atualização de um que já existia (título e texto)

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 5000
const listenFunction = () => console.log('Servidor OK!')

app.listen(PORT,listenFunction)

const listToDo = [
    {
        title: "Exercício semana 6 - {reprograma}",
        text: "Criar APIs telas 1, 2 e 4 & Chamadas no Postman",
    }
]

const viewToDo = (request, response)=>{
    return response.status(200).send(listToDo)
}

app.get('/todo',viewToDo)

// Criar chamadas das APis no postman