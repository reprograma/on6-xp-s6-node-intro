
const { request, response } = require('express');
// Criar as APIs necessárias para as seguintes telas
// Criar as chamadas das APis criadas no postman

const bodyParse = require('body-parser') // Utilitário q serve para receber dados de qq formulário dentro do express 
const express= require('express');


const app = express();

app.use(bodyParse.json())


const Port = 3001;

function listenFunction(){ // subindo o servidor >> o listen recebe dois parametros
    console.log('servidor funcionando')
}

app.listen(Port,listenFunction)


//tela de login

function loginUser(request,response){
    const login = [
        {
            name:'Naiara Lima',
            email: 'naiarafx@gmail.com',
            password: 'ontheway2020'
        }
    ]
    return response.status(200).send(login) // dar uma resposta
}

// ** no postman colocar localhost:3001/login ** 
app.get("/login",loginUser) 


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
        return response.status(201).send({messagem : 'Cadastro feito com sucesso'})
    }else{
        return response.status(400).send({ message: 'Erro no email ou senha inválida'})
    }
}

// ** no postman colocar localhost:3001/login ** 
app.post("/login",UserRegister) 


//-------------------------------------------------------------
// Tela de Listagem de TODO List

const listagem = [{
    title: 'livros pra ler',
    text:'O iluminado',
    id: 1,
    status: 'concluído'
},
{
    title:'filmes para assistir',
    text:'O mal de cada dia',
    id: 34,
    status: 'em espera'

}]

const toDoList = (request,response)=>response.status(200).send(listagem)
app.get("/login",toDoList) 


//-------------------------------------------------------------
//Cadastro de um novo TODO LIST

const newToDo = [{ // coloquei isso no postman 
    title: 'compras mercado',
    text: 'arroz, feijão, carne, salada, milho',
    id: 25,
    status: 'em espera'
}]

const toDoRegister = (resquest,response)=>{
    const newToDoRegister = request.body
    console.log('NewToDo', newToDoRegister)
    newToDo.push(newToDoRegister)
    if(newToDoRegister.title && newToDoRegister.text && newToDoRegister.id && newToDoRegister.status){
        return response.status(201).send({message: 'Cadastro feito com sucesso'})
    }else{
        return response.status(400).send({message: 'Faltou enviar um dado'})
    }
}

app.post("/login", toDoRegister) 

//-------------------------------------------------------------
// atualização de um ToDoList 

const upDateToDo = (request,response)=>{
    const id = request.params.id // como boa prática é bom colocar o id do produto 
    if(id){
        return response.status(201).send({message: 'lista apagada com sucesso!'})
    }else{
        return response.status(400).send({message: 'Faltou enviar um dado'})
    }
}
app.put("/login", upDateToDo)

