const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Listening on port ' + PORT)

app.listen(PORT,listenFunction)

class Todo {
    constructor(title, text) {
        this.title = title
        this.text = text
    }
}

const todoList = []

function add(request, response) {
    const todoBody = request.body
    if(!(todoBody.title && todoBody.text))
        return response.status(400).send({message: 'Missing information.'})

    const todo = new Todo(todoBody.title, todoBody.text)
    todoList.push(todo)
    return response.status(201).send({message: 'TODO created.'})
}

function list(request, response) {
    console.table(todoList)
    return response.status(200).send(todoList)
}

app.post("/add", add)
app.get("/list", list)