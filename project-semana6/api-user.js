
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

//exercício1
//1. Criar as APIs necessárias para as seguintes telas
//2. Criar as chamadas das APis criadas no postman
//Tela de login

const user = [
    {
        email: 'lenizelira@gmail.com',
        password: '123456',
       
    }
]

const userLogin = (request, response) => {
    
    return response.status(200).send(user)
}


app.post("/user", userLogin)
