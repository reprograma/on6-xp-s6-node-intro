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
todoList.push(new Todo("Lista de compras", "Ovo; Cotonete;"))
todoList.push(new Todo("Livros pra ler", "Orlando; A Ignorância;"))
todoList.push(new Todo("Filmes pra assistir", "Biutiful; Suspiria;"))

function add(request, response) {
    const todoBody = request.body
    if(!(todoBody.title && todoBody.text))
        return response.status(400).send({message: 'Missing body information.'})

    const todoObj = new Todo(todoBody.title, todoBody.text)
    todoList.push(todoObj)
    console.table(todoObj)
    return response.status(201).send({message: 'TODO created.'})
}

function list(request, response) {
    console.table(todoList)
    return response.status(200).send(todoList)
}

function update(request, response) {
    const id = request.params.id
    const todoBody = request.body

    if(id < 0 || id > todoList.length-1 || todoList.length === 0) 
        return response.status(404).send("TODO not found.")

    if(!(todoBody.title && todoBody.text))
        return response.status(400).send({message: 'Missing body information.'})

    todoList[id].title = todoBody.title
    todoList[id].text = todoBody.text
    console.table(todoList[id])
    return response.status(200).send({message: 'TODO updated'})
}

app.post("/todo", add)
app.get("/todo", list)
app.put("/todo/:id", update)