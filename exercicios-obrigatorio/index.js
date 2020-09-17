const express = require('express');
const bodyParser = require('body-parser');

const toDoLists = require('./routes/todolists');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());

const PORT = 3001;

app.listen(PORT, () => console.log(`Servidor na PORTA: ${PORT}`));

app.post('/todolist/login', users.loginUser);
app.post('/todolist/signUp', users.signUpUser);
app.get('/todolist/viewAll', toDoLists.showToDoLists);
app.post('/toDoList/new', toDoLists.createToDoList);
app.put('/toDoList/:title', toDoLists.editToDoList);