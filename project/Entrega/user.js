const express = require('express')
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express();

app.use(bodyParser.json())

const PORT = 8080

const listenFunction = () => console.log('Serve Listen in port:'+PORT)


app.listen(PORT,listenFunction)

const users = [
    {
        nome: "Camila",
        email: "camila_bulcao@hotmail.com",
        password: 123456
    }
 ]
const login = (request,response) =>{
    const realizarLogin = request.body
    
    if(realizarLogin.email && realizarLogin.password){
       // users.push(realizarLogin)
        //console.log(users)
        console.log("Escreveu o body corretamente")
    }else{
        return response.status(400).send({message: "falta criar o body corretamente"})
    }
    const encontrar = (element) => element.email === realizarLogin.email
    const loginBusca = users.find(encontrar) 
    //console.log(loginBusca)
    

    if(!loginBusca){
        return response.status(400).send({message:"email não encontrado"})
    }else{
        return response.status(200).send({message: "login realizado"})
    }
}
app.post('/user',login)

const cadastro = (request, response) =>{ 
    const realizarCadastro = request.body

    if(realizarCadastro.nome && realizarCadastro.email && realizarCadastro.password){
        console.log("Body escrito corretamente")
        
    }else{
        return response.status(400).send({message: "falta criar o body corretamente"})
    }
    const achar = (element) => element.email === realizarCadastro.email
    const cadastroBusca = users.find(achar)
    //console.log(cadastroBusca)

    if(!cadastroBusca){
        return response.status(200).send({message: "cadastro realizado"})
    }else{
        return response.status(400).send({message:"cadastro não encontrado"})
    }
}
app.post('/cadastro',cadastro)