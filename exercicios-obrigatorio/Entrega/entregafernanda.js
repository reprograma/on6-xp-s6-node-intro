
const express = require('express')
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express();
app.use(bodyParser.json())

const PORT = 8080

const listenFunction = () => console.log('Serve Listen in port:' + PORT)


app.listen(PORT, listenFunction)


// 1) tela de login: adicionar email e password POST

const login = [
    {
        nome: "Fernanda Oliveira",
        email: "fernandaoliveiraufpe@gmail.com",
        password: "fernanda123"

    }

]
const entrandoLogin = (request, response) => {
    return response.status(200).send(login)
}

app.post('/todolist', entrandoLogin)

// URL no postman na requisição get http://localhost:8080/todolist/


// 2) tela de cadastro : criar o cadastro com nome, email, senha

const criandoCadastro = (request, response) => {
    const cadastro = request.body
    console.log('Cadastro', cadastro)
    login.push(cadastro)
    if (cadastro.email && cadastro.password && cadastro.nome) {
        return response.status(201).send({ message: 'Cadastrado realizado com Sucesso!' })
    } else {
        return response.status(400).send({ message: 'Falta enviar o body corretamente' })
    }
}


app.post('/todolist', criandoCadastro)

// URL no postman na requisição post http://localhost:5001/todolist/
//resposta no postman : {
// "message": "Cadastro realizado com sucesso"
//}

// 3) visualização da lista de TO DO LIST

const todoList = [
    {
        titulo: 'Fazer',
        texto: 'estudar historia',
    }]

const listarTodo = (request, response) => {
    return response.status(200).send(todoList)
}

app.get('/todolist', listarTodo)

//4)cadastro de novo TODO LIST e atualização

const criandoTodo = (request, response) => {
    const newTodo = request.body
    console.log('New To do', newTodo)
    todoList.push(newTodo)
    if (newTodo.titulo && newTodo.texto) {
        return response.status(201).send({ message: 'To do cadastrado com Sucesso!' })
    } else {
        return response.status(400).send({ message: 'Falta enviar o body corretamente' })
    }
}

app.post('/todolist' , criandoTodo)