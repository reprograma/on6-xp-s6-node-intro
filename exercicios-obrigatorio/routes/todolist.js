const { request, response } = require("express");


const todos = [
    {
        id: 1,
        title: "Estudar",
        text: "- Fazer desafio de APIs\n- Fazer o pull request"
    },
    {
        id: 2,
        title: "Enviar currículo",
        text: "- Preparar currículo\n- Colocar no linkedin"
    }
]

//Lista Todos List
const listTodos = (request, response) => {
    return response.status(200).send(todos)
}


//Cria nova Todo List
const newTodo = (request, response) => {
    const todo = request.body
    todos.push(todo)

    if(!todo.title) {
        return response.status(400).send ({ message : 'Digite um título para sua Todo List'})
    } else if(!todo.text) {
        return response.status(400).send ({ message : 'Inclua uma tarefa em sua Todo List'})
    } else {
        return response.status(201).send({ message :  'Todo List criada!'})
    }
}


//Edita uma todo list
const updateTodo = (request, response) => {
    const id = request.params.id

    if(id){
        return response.status(201).send({ message : 'Todo List atualizada.'})
    }else{
        return response.status(400).send ({ message : 'Id não localizado.'})
    }
}



module.exports = {
    listTodos,
    newTodo,
    updateTodo
}