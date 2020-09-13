const express = require('express')
const bodyParser = require('body-parser');
const { response, request } = require('express');

const app = express();

app.use(bodyParser.json());

const PORT = 3001;

app.listen(PORT, () => console.log(`Servidor na PORTA: ${PORT}`));

users = [
    {
        name: 'fulano',
        email: 'fulano@hotmail.com',
        password: 'senha1'
    },
    {
        name: 'beltrano',
        email: 'beltrano@hotmail.com',
        password: 'senha2'
    },
    {
        name: 'cicrano',
        email: 'cicrano@hotmail.com',
        password: 'senha3'
    }
]

const toDoLists = [
    {
        title: 'title1',
        text: 'text...'
    },
    {
        title: 'title2',
        text: 'text...'
    },
    {
        title: 'title3',
        text: 'text...'
    }
]

const loginUser = (request, response) => {
    const user = request.body;
    let isValidUser = false;
    let isPasswordCorrect = false;
    users.find(element => {
        if(element.email === user.email){
            isValidUser = true;
            if(element.password === user.password){
                isPasswordCorrect = true;
            }
        }
    });

    if (isValidUser) {
        if (isPasswordCorrect) {
            return response.status(201).send({ message :  'Login feito com sucesso!'});
        } else {
            return response.status(400).send({ message :  'Senha digitada incorreta!'});
        }           
    } else {
        return response.status(400).send({ message :  'Usuário inválido!'})
    }
    
}

const signUpUser = (request, response) => {
    const user = request.body;
    if(user.name && user.password && user.email){
        return response.status(201).send({ message :  'Cadastro feito com sucesso!'});
    } else {
        return response.status(400).send({ message :  'Alguma informação não foi preenchida!'});
    }

}

const showToDoLists = (request, response) => {
    return response.status(200).send(toDoLists);
}

const createToDoList = (request, response) => {
    const toDoList = request.body;
    if(toDoList.title){
        toDoLists.push(toDoList);
        return response.status(201).send({ message :  'To-Do List criada com sucesso!'});
    } else {
        return response.status(400).send ({ message : ' Esqueceu de criar um título!'});
    }
}

const editToDoList = (request, response) => {
    const title = request.params.title;
    const toDoList = request.body;
    isTitleValid = false;
    if(toDoLists.length > 0){
        toDoLists.find(element => {
           if (element.title === title){
               element.title = toDoList.title;
               element.text = toDoList.text;
               isTitleValid = true;
           }
        });
    }

    if(isTitleValid){
        return response.status(201).send({ message :  'To-Do List editada com sucesso!'});
    } else {
        return response.status(400).send({ message :  'To-Do List não existe!'})
    }
}

app.post('/todolist/login', loginUser);
app.post('/todolist/signUp', signUpUser);
app.get('/todolist/viewAll', showToDoLists);
app.post('/toDoList/new', createToDoList);
app.put('/toDoList/:title', editToDoList);