
const { request, response } = require('express');
// Criar as APIs necessárias para as seguintes telas
// Criar as chamadas das APis criadas no postman

const bodyParse = require('body-parser') // Utilitário q serve para receber dados de qq formulário dentro do express 
const express= require('express'); // auxilia na construção das nossas aplicações Web


const app = express();

app.use(bodyParse.json()) // o use ele fica entre as chamadas >> bodyparse serve para fazer o express entender o json (no postman)


const Port = 3001;

function listenFunction(){ // subindo o servidor >> o listen recebe dois parametros
    console.log('servidor funcionando')
}

app.listen(Port,listenFunction)


//tela de login

function loginUser(request,response){
    const login = [
        {
            email: 'naiarafx@gmail.com',
            password: 'ontheway2020'
        }
    ]
    return response.status(200).send(login) // dar uma resposta
}

// ** no postman colocar localhost:3001/login ** 
app.post("/login",loginUser)  // alterar aqui, precisa fazer como post 


//-------------------------------------------------------------
//tela de cadastro
const newRegister = [{ // coloquei isso no postman
    name: 'Tifany Lima',
    email: 'tocadatify@gmail.com',
    password: '666TapaNaPantera'
  }]


const UserRegister = (request,response) =>{
    const newUser = request.body
    console.log('USER', newUser)
    newRegister.push(newUser)
   if(newUser.name && newUser.email && newUser.password){
        return response.status(201).send({message : 'Cadastro feito com sucesso'})
    }else{
        return response.status(400).send({message: 'Erro no email ou senha inválida'})
    }
}

// ** no postman colocar localhost:3001/login ** 
app.post("/login",UserRegister) 


//-------------------------------------------------------------


