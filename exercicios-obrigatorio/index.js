const express = require('express')
const bodyParser = require('body-parser')
const login = require('./routes/login')
const signUp = require('./routes/signup')
const todoList = require('./routes/todolist')
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

app.post('/login', login.login)
app.post('/sign', signUp.signUp)
app.get('/todolist', todoList.listTodos)
app.post('/newTodo', todoList.newTodo)
app.put('/edittodo', todoList.updateTodo)