const express = require('express')
const bodyParser = require('body-parser')
const { request } = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

//Tela pra o cadastro

const registerName = (request, response) => {
    const idName = request.body
    console.log('NAME', name)
    names.push(idName)
    if (idName) {
        return response.status(201).send({ message: 'Nome cadastrado com sucesso!' })
    } else {
        return response.status(400).send({ mensage: 'Digite um nome válido' })
    };

}

const registerEmail = (request, response) => {
    const idEmail = request.body
    console.log('EMAIL', idEmail)
    books.push(email)
    if (idEmail) {
        return response.status(201).send({ message: 'Email cadastrado com sucesso!' })
    } else {
        return response.status(400).send({ mensage: 'Digite um email válido' })
    };

}

const registerPassword = (request, response) => {
    const password = request.body
    console.log('PASSWORD', password)
    passwords.push(password)
    if (password) {
        return response.status(201).send({ message: 'Senha cadastrado com sucesso!' })
    }

}

//Tela de Login

const loginEmail = (request, response) => {
    const enterEmail = request.Headers
    console.log('EMAIL', idEmail)
    emails.find(idEmail)
    if (idEmail) {
        return response.status(201).send({ message: 'Email válido!' })
    }

}

const loginPassword = (request, response) => {
    const enterPassword = request.Headers
    console.log('PASSWORD', password)
    password.find(password)
    if (password) {
        return response.status(201).send({ message: 'Senha válida!' })
    }

}

//Tela de Todo List

const listTodo = [
    {
        titulo: 'Tarefas dessa semana',
        texto: 'Tenho que levar minha gata na Segunda feira que vem no veterinário',
        
    }
]

const listTodo = (request, response) => {

    return response.status(200).send(todoList)
}

// Cadastrar novo título do Todo list
const newTitle = (request, response) => {
    const enterTitle = request.Headers
    console.log('TITLE', newTitle)
    titles.push(newTitle)
    if (newTitle) {
        return response.status(201).send({ message: 'Novo título cadastrado com sucesso!' })
    }

}

//Cadastrar novo texto no Todo list
const newText = (request, response) => {
    const enterText = request.Headers
    console.log('TEXT', newText)
    emails.push(newText)
    if (newText) {
        return response.status(201).send({ message: 'Novo texto cadastrado com sucesso!' })
    }

}

app.post('/name', registerName)

app.post('/email', registerEmail)

app.post('/password', registerPassword)

app.get('/email', loginEmail)

app.get('/password', loginEmail)

app.get('/todoList', listTodo)

app.get('/email', loginEmail)

app.post('/title', newTitle)

app.post('/text', newText)