const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const login = [
   
    {
        name: "Lorenna",
        email: "leticiaLima@gmail.com",
        password: 123
    }
]

const listLogin = (resquest, response)=>{
    return response.status(200).send(login)
}

const createLogin = (request,response)=>{
    const newLogin = request.body
    console.log("New Login",newLogin)
    login.push(newLogin)

    if(login.name && login.email && login.password){
        return response.status(201).send({message: "iu"})
    }else{
        return response.status(400).send({message: "hu"})
    }
}







app.get('/login', listLogin)
app.post('/login', createLogin)