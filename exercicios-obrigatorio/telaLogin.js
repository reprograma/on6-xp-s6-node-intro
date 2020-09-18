const express = require('express')


const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())


const PORT = 8080

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "*");
    res.header("Acess-Control-Allow-Methods", "*");
    next();

});


const listenFunction = () => console.log('servidor funcionando')

app.listen(PORT,listenFunction)

//

const login = [
    {
        email:"login",
        senha: "password"
    }
]

    const fazerLogin = (request, response)=>{
    return response.status(200).send(login)
}

const fazerLogin = (request, response) =>{
    const login2 = request.body
    console.log('CADASTRO', login)
    login2.push(login)

    
    if(login.email && cadastro.senha){
        return response.status(201).send({message: 'Login realizado com sucesso'})
    }else{
        return response.status(400).send({message: 'Falta enviar o body corretamente'})
    } 
}


app.post('/login', fazerLogin)