
const express = require('express');
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express();

app.use(bodyParser.json())//puxa a requisição feita no json pelo postman

const PORT = 8080


const listenFunction = () => console.log('Servidor funcionando')



app.listen(PORT, function () {
    console.log('Servidor funcionando: Hello Word!')
})


//exercício3
//Tela de Listagem de TODO List

const todos = [
    {
        activity1: 'Ligar para operadora de internet',
        activity2: 'Comprar verduras',
        activity3: 'Mandar c.v',
        id: 1
    }
]

const todoList = (request, response) => {
    
    return response.status(200).send(todos)
}


//exercício4
//Cadastro de um novo TODO LIST e atualização de um que já exista

const createList = (request, response) => {
    const todo = request.body
    console.log('TODOS', todo)
    todos.push(todo)
    if(todo.activity1 && todo.activity2 && todo.activity3){
        
        return response.status(201).send({ message : 'Novo lembrete criado com sucesso'})//mensagem sempre como json{}
    }else{
        return response.status(400).send ({message: 'Falta enviar o body corretamente!'})
    }

}

app.get("/todos", todoList)
app.post("/todos", createList)

