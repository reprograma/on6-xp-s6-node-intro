const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const teladelogin = [
    {
        email: '',
        password: '',
    }
]
const cadastro = [
    {
        nome: '',
        email: '',
        senha: '',
    }
]

const toDoList = [
    {
        titulo: '',
        texto: '',
    }
]
// criando login
const createlogin = (request, response) => {
    const login = request.body
    console.log('Login', login )
    teladelogin.push(login )
    if (login.email && login.passoword) {
        return response.status(201).send({ message: 'Informações informadas corretamente!' })
    } else {
        return response.status(400).send({ mensage: 'ERRO! Favor preencher as informações corretamente' })
    };
// criando cadastro 

const createCadastro = (request,response)=>{
    const cadastro = request.body
    console.log('Cadastro',cadastro)
    cadastros.push(cadastro) 
    if (cadastro.nome && cadastro.email && cadastro.senha){
        return response.status(201).send({ message :  ' Tudo certo! Seu cadastro foi realizado com sucesso!'})
    } else {
        return response.status(400).send({message: 'ERRO! Favor preencher as informações corretamente!'})
    }   
}

//Listagem TODO List
const listTodo = (request, response) => {

    return response.status(200).send(toDoList)
}


//ToDo List 
const inserindoTodo = (request,response) =>{
    const itensTodo = request.body
    console.log('Todo List', itensTodo)
    toDoList.push(itensTodo) 
    if (itensTodo.titulo && itensTodo.texto){
        return response.status(201).send({ message :  ' Cadastrado com sucesso!'})
    } else {
        return response.status(400).send({message: 'Erro! Favor preencher corretamente!'})
    }   
}

app.post('/teladelogin', createlogin)

app.post('/cadastro', createCadastro)

app.get('/lista/:id', listTodo)

app.put('/inserindo/:id', inserindoTodo)
}