const { response } = require('express');
const express = require('express');
const bodyParser = require(`body-parser`)

const app = express();

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})


//Array de objetos

const logins = [
    {

        "email": "" ,
        "password": ""

    }
]

const cadastros = [
    {
        "nome": "" ,
        "email": "" ,
        "senha": ""

    }
]

const toDoList = [
    {
        "titulo": "",
        "texto": ""
    }

]

//Login
const createLogin = (request,response)=>{
    const login = request.body
    console.log('Login',login)
    logins.push(login) //adicionando login
    if (login.email && login.password){
        return response.status(201).send({ message :  ' Sucesso!'})
    } else {
        return response.status(400).send({message: 'Erro, não foi preenchido corretamente!'})
    }   
}

//Cadastro
const createCadastro = (request,response)=>{
    const cadastro = request.body
    console.log('Cadastro',cadastro)
    cadastros.push(cadastro) //adicionando login
    if (cadastro.nome && cadastro.email && cadastro.senha){
        return response.status(201).send({ message :  ' Cadastro realizado com sucesso!'})
    } else {
        return response.status(400).send({message: 'Erro, não foi preenchido corretamente!'})
    }   
}

//Listagem TODO List
const listTodo = (request, response) => {
    
    return response.status(200).send(toDoList)
}

//Todo List e Texto
const inserindoTodo = (request,response) =>{
    const itensTodo = request.body
    console.log('Todo List', itensTodo)
    toDoList.push(itensTodo) //adicionando login
    if (itensTodo.titulo && itensTodo.texto){
        return response.status(201).send({ message :  ' Todo List cadastrado com sucesso!'})
    } else {
        return response.status(400).send({message: 'Erro, não foi preenchido corretamente!'})
    }   
}


app.post('/logins',createLogin)
app.post('/cadastro',createCadastro)
app.get('/lista',listTodo)
app.post('/inserindo',inserindoTodo)
