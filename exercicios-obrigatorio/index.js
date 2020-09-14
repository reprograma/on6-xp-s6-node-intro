// Criar APIs para seguintes telas:
// 1. Tela de Login (email e password)
// 2. Tela de Cadastro (nome, email e senha)
// 3. Tela de Listagem de to do list (visualização da lista que já existe)
// 4. Cadastro de novo to do e atualização de um que já existia (título e texto)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 5000
const listenFunction = () => console.log('Servidor OK!')

app.listen(PORT,listenFunction)

// 1. Tela de Login (email e password)

const login = [
    {
        email: "mpinheiro@usp.br",
        password: "senhasecreta",
    }
]

const loginUser = (request, response)=>{
    return response.status(200).send(login)
}

app.get('/login',loginUser)

// 2. Tela de Cadastro (nome, email e senha)

const register = [
    {
        name: "Mariana Pinheiro",
        email: "mpinheiro@usp.br",
        password: "senhasecreta",
    }
]

const registerUser = (request,response)=>{
    const user = request.body
    console.log('User: ',user)
    register.push(user)
    if(user.name && user.email && user.password){
        return response.status(201).send({message: "Cadastro feito com sucesso! =)"})
    } else{
        return response.status(400).send({message: "Faltam dados para o envio. Tente novamente."})
    }
}

app.post('/register',registerUser)

// 3. Tela de Listagem de to do list (visualização da lista que já existe)

const listToDo = [
    {
        title: "Exercício semana 6 - {reprograma}",
        text: "Criar APIs telas 1, 2 e 4 & Chamadas no Postman",
        id: 1
    }
]

const viewToDo = (request, response)=>{
    return response.status(200).send(listToDo)
}

app.get('/todo',viewToDo)

// 4. Cadastro de novo to do e atualização de um que já existia (título e texto)
// 4.1 Cadastro

const newToDo = (request,response)=>{
    const toDo = request.body
    console.log('To Do: ',toDo)
    listToDo.push(toDo)
    if(toDo.title && toDo.text && toDo.id){
        return response.status(201).send({message: "Novo To Do incluído com sucesso! =)"})
    } else{
        return response.status(400).send({message: "Faltam dados para o cadastro. Tente novamente."})
    }
}

app.post('/todo',newToDo)

// 4.2 Atualização

const updateToDo = (request,response)=>{
    const id = request.params.id
    if(id){
        return response.status(201).send({message: "To Do atualizado."})
    } else{
        return response.status(400).send({message: "Faltou informar o id na URL para atualização."})
    }
}

app.put('/todo/:id',updateToDo)

// 4.3 Exclusão
const deleteToDo = (request,response)=>{
    const id = request.params.id
    console.log('Id: ',id)
    if(id){
        return response.status(201).send({message: "To Do excluído."})
    } else{
        return response.status(400).send({message: "To Do não encontrado."})
    }
}

app.delete('/todo/:id',deleteToDo)

// Criar chamadas das APis no postman
// 'NodeJS.postman_collection.json'