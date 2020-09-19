const express = require('express')
const users = require('./routes/user')
const toDos = require('./routes/todo-list')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Serve Listen in port:'+PORT)

app.listen(PORT,listenFunction)

app.post('/login',users.login)

app.post('/user',users.createUser)

app.put('/user/:id',users.updateUser)

app.post('/todo',toDos.createTdList)

app.put('/todo/:id',toDos.updateTdList)
