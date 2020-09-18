const express = require('express')
const bodyParser = require('body-parser')
const {request, response} = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function() {
    console.log(`Servidor funcionando na porta ${PORT}!`)
})

const toDoList = [
    {
        title: 'today',
        text: 'Today I will ...'
    }
]
 
const seeToDo = (request, response) => response.status(200).send(toDoList)

const crateNewToDo = (request, response) => {
    const newToDo = request.body
    const checkingToDo = toDoList.find(element => element.title === newToDo.title)
    if (newToDo.title && newToDo.text){
        console.log('Dados cadastrados corretamente!')
    }else{
        return response.status(400).send({ mensage: 'Falta criar o body corretamente' }) 
    }

    if(!checkingToDo){
        toDoList.push(newToDo)
        console.log(toDoList)
        return response.status(200).send({ message: 'Novo To Do List criado com sucesso!'})
    }else{
        return response.status(400).send({ mensage: 'Você já tem um To Do list com esse nome' }) 
    }
}

const updateToDoList = (request, response) => {
    const checkingTitle = request.params.title

    const foundTitle = toDoList.find(element => element.title === checkingTitle)
    console.log(checkingTitle)

    //console.log(foundTitle)

    if (!foundTitle){
        return response.status(400).send({ message: 'To Do List não encontrada!' })
    }else{
        const updateTitle = request.body 
        foundTitle.title = updateTitle.title
        console.log(toDoList)
        return response.status(201).send({ message: 'Título atualizado com sucesso!' })
    }
}

// Tela de Listagem de TODO List (mostra todos os To Do List)
app.get('/todo', seeToDo)

// Cadastro de um novo TODO LIST e atualização de um que já exista (atualizando o título)
app.post('/todo', crateNewToDo)
app.put('/todo/:title', updateToDoList)
