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

//exercício2
//Nessa tela o usuário irá criar seu cadastro com os seguintes dados: nome,email e senha
//Tela de Cadastro


const register = [
    {   
        name : 'Lenize Lira',
        email : 'lenizelira@gmail.com',
        password : '123456'
       
    }
]

const userRegister = (request, response) => {
    const userReg = request.body
    console.log('REGISTER', userReg)
    register.push(userReg)
    if(userReg.name && userReg.email && userReg.password){
        
        return response.status(201).send({ message : 'Usuário cadastrado com Sucesso!'})//mensagem sempre como json{}
    }else{
        return response.status(400).send ({message: 'Preencha todos os campos'})
    }

}



app.post("/register", userRegister)