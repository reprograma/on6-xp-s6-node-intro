const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const todoList = require('./routes/todolist')
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

app.post('/login', users.login)
app.post('/sign', users.signUp)
app.get('/todolist', todoList.listTodos)
app.post('/newTodo', todoList.newTodo)
app.put('/updatetodo:id', todoList.updateTodo)