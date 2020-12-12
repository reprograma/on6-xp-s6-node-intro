const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Server is running!')

app.listen(PORT, listenFunction)

const toDoList = [
    {
        title: "Livros para ler",
        description: ["Cosmo visão africana", "Pele negra máscaras brancas", "A era do capital improdutivo"],
        id: 1

    }
]

const listToDo = (request, response) => {
    return response.status(200).send(toDoList)
}


const createTask = (request, response) => {
    const tasks = request.body
    console.log('Tasks:', tasks)

    if (tasks.title && tasks.description && tasks.id) {
        toDoList.push(tasks)
        return response.status(201).send({ message: "Tarefa cadastrada com sucesso!" })
    } else {
        return response.status(400).send({ message: "Falta enviar o body corretamente" })
    }
}

const update = (request, response) => {
    const id = request.params.id
    const updateToDo = request.body
   
    toDoList.find(e => {

        if (e.id == id) {
            e.title = updateToDo.title
            e.description = updateToDo.description
            return response.status(201).send({ message: 'Tarefa atualizada com sucesso!' })
        } else {
            return response.status(400).send({ message: 'Falta enviar ID na URL.' })

        }
    })
}


app.get('/todolist', listToDo)
app.post('/todolist', createTask)
app.put('/todolist/:id', update)
