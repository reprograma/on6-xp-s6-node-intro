/* 
1) Criar as APIs necessárias para as seguintes telas
2) Criar as chamadas das APis criadas no postman

-Tela de login
Nessa tela o usuário irá fazer o login com os seguintes dados: email​ e ​password 

-Tela de Cadastro
Nessa tela o usuário irá criar seu cadastro com os seguintesdados: ​nome, email e senha

-Tela de Listagem de TODO List
Nessa tela o usuário irá visualizar a ​lista​ de TODO LIST que ele possui

-Cadastro de um novo TODO LIST e atualização de um que já exista
O usuário poderá cadastrar um novo TODO LIST com osseguintes dados: ​título​ e ​texto
*/

const express = require('express')
const bodyParser = require('body-parser')
const { request, response, text } = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 5001

app.listen(PORT, () => console.log('Serve Listen in port:'+PORT))

// Tela de login
const user1 = [
    {
        email : "abobrinha@quando.nasce",
        password : "seesparramapelochao"
    }
]

const login = (request, response) => {
    const userBody = request.body
    
    if(!userBody.email && !userBody.password)
        console.log('Preencha todos os campos corretamente')

    const findUserEmail = user1.find( el => el.email === userBody.email)
    const findUserPassword = user1.find(el => el.password === userBody.password)
    
    if(!findUserEmail)
        return response.status(400).send({message: 'Esse e-mail não existe. Digite um e-mail válido'})
    
    if(!findUserPassword)
        return response.status(400).send({message: 'Você digitou a senha incorretamente.'})

    if(findUserEmail && findUserPassword) 
        return response.status(201).send({message: 'Você está logado!'})

}

app.post('/login', login)

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
    if(user.name && user.email && user.password){
        return response.status(201).send({ message :  'Usuário cadastrado com sucesso!'})
     }else{
        return response.status(400).send ({ message : 'Falta enviar o body corretamente'})
     }
}

app.post('/register', userRegister) //está retornando só a mensagem "falta enviar o body corretamente mas no teminal volta com o texto certinho ??"

// Tela de Listagem de TODO List

const toDoList = [
    {
        title : 'Exercício semana 6',
        text : 'Tela de listagem de TODO List',
        status: 'Concluido',
        id: 1
    },
    {
        title : 'Exercício semana 7',
        text : 'Será programado',
        status : 'Em aberto',
        id: 2
    }
]

const showToDo = (request, response) => response.status(200).send(toDoList)

app.post('/toDo', showToDo)

// Cadastro de um novo TODO LIST 

const newToDo = (request, response) => {
    const toDo = request.body
    console.log("To Do: ", toDo)
    toDoList.push(toDo)
    if(toDo.title && toDo.text){
        return response.status(201).send({message : 'Todo cadastrado com sucesso.'})
    } else response.status(400).send({message : 'Favor preencher o toDo corretamente.'})
}
app.post('/todo', newToDo)

// Atualização de um que já exista

const updateTodo = (request, response) => {
    const id = request.params.id
    if (id) {
        return response.status(201).send({ message: 'Sua tarefa foi atualizada!' })
    } else {
        return response.status(400).send({ message: 'Falta informar o ID na URL.' })
    }
}

app.put('/toDo/:id', updateTodo)