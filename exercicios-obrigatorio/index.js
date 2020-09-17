const express = require('express');
const apis = require('./apis')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 5000
const listenFunction = () => console.log('Serve Listen in port: '+PORT)

app.listen(PORT,listenFunction)

app.get('/login',loginUser)

app.post('/register',registerUser)

app.get('/todo',viewToDo)

app.post('/todo',newToDo)

app.put('/todo/:id',updateToDo)

app.delete('/todo/:id',deleteToDo)