const express = require('express')
const bodyParser = require('body-parser')
const { request } = require('express')

const app = express()
app.use(bodyParser.json())

const PORT = 3002

const listenFunction = () => console.log('Servidor iniciado')
app.listen(PORT, listenFunction)

const users = []

const signUp = (request, response) => {
    const createAccount = request.body
    console.log('Informações cadastradas: ', createAccount)

    users.push(createAccount)

    if (createAccount.name && createAccount.email && createAccount.password) {
        return response.status(201).send({ message: 'Sua conta foi criada com sucesso.' })
    } else {
        return response.status(400).send({ message: 'Erro, tente novamente.' })
    }
}

const signIn = (request, response) => {
    const login = request.body

    let isFoundLogin = false
    let isFoundPassword = false

    users.find(element => {
        if (element.email === login.email) {
            isFoundLogin = true
            if (element.password === login.password) {
                isFoundPassword = true
            }
        }
    })

    if (isFoundLogin) {
        if (isFoundPassword) {
            return response.status(200).send({ message: 'Login realizado com sucesso. Seja bem vindo!' });
        } else {
            return response.status(400).send({ message: 'Senha incorreta. Tente novamente.' });
        }
    } else {
        return response.status(400).send({ message: 'Não foi possível encontrar sua conta.' })
    }
}

const myToDos = []

const createToDo = (request, response) => {
    const toDo = request.body
    console.log('To Do`s cadastrados: ', toDo)

    myToDos.push(toDo)

    if (toDo.title && toDo.text) {
        return response.status(201).send({ message: 'To Do cadastrado com sucesso.' })
    } else {
        return response.status(400).send({ message: 'Erro, tente novamente.' })
    }
}

const listToDos = (request, response) => {
    if (myToDos.length >= 0) {
        return response.status(200).send(myToDos)
    } else {
        return response.status(401).send({ message: 'Nenhum To Do cadastrado.' })
    }
}


const updateToDoList = (request, response) => {
    const title = request.params.title
    const updateMyToDo = request.body

    myToDos.find(element => {
        if (element.title === title) {
            element.title = updateMyToDo.title
            element.text = updateMyToDo.text
            return response.status(201).send({ message: 'To Do atualizado com sucesso' })
        } else {
            return response.status(400).send({ message: 'Erro ao atualizar' })
        }
    })
}


app.post('/signup', signUp)
app.post('/signin', signIn)
app.post('/createtodo', createToDo)
app.get('/mytodos', listToDos)
app.put('/todo/:title', updateToDoList)