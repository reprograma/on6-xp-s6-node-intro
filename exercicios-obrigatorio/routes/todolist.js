const { request, response } = require("express");


const todos = [
    {
        title: "Estudar",
        text: "Fazer desafio de APIs"
    },
    {
        title: "Enviar currículo",
        text: "Preparar currículo e colocar no linkedin"
    }
]

const listTodos = (request, response) => {
    return response.status(200).send(todos)
}