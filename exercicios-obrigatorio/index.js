/* 
1) Criar as APIs necessárias para as seguintes telas
2) Criar as chamadas das APis criadas no postman

-Tela de login
Nessa tela o usuário irá fazer o login com os seguintes dados:email​ e ​password 

-Tela de Cadastro
Nessa tela o usuário irá criar seu cadastro com os seguintesdados: ​nome,email e senha

-Tela de Listagem de TODO List
Nessa tela o usuário irá visualizar a ​lista​ de TODO LIST que elepossui

-Cadastro de um novo TODO LIST e atualização deum que já exista
O usuário poderá cadastrar um novo TODO LIST com osseguintes dados: ​título​ e ​texto*/

const express = require('express')
const bodyParser = require('body-parser')
const { request, response } = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 5001

app.listen(PORT, function () {
    console.log('Servidor funcionando!')
})
// Tela de login
const login = [
    {
        email : 'abobrinha@quando.nasce',
        password : 'seesparramapelochão'
    }
]

const userLogin = (request, response) =>{
    return response.status(200).send(login)
}

app.get('/login', userLogin)

// Tela de cadastro 

const register = [
    {
        name : 'Maria João',
        email : 'maria@joao.com',
        password : 'senhamariajoao'
    }
]

const userRegister = (request, response) => {
    const user = request.body
    console.log('Usuário', user)
    register.push(user)
    if(register.name && register.email && register.password){
        return response.status(201).send({ message :  'Usuário cadastrado com sucesso!'})
     }else{
        return response.status(400).send ({ message : 'Falta enviar o body corretamente'})
     }
}

app.post('/register', userRegister)

// 