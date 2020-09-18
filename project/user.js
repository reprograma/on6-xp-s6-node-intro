const express = require('express')
const bodyParser = require('body-parser')
const {request, response} = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function(){
    console.log(`Servidor na porta ${PORT} funcionando`)
})

const usersData = [
    {
        name: 'phabliny',
        email: 'phablinymartins@gmail.com',
        password: 123456
    }
]

const login = (request, response) => {
    const userFromBody = request.body
    console.log('USER', userFromBody)

    console.log(userFromBody.email)

    if(userFromBody.email && userFromBody.password){
        console.log('Dados preenchidos corretamente!')
    }else{
        return response.status(400).send({ mensage: 'Falta criar o body corretamente' }) 
    }

    const foundUser = usersData.find(element => element.email === userFromBody.email)

    if(!foundUser){
        return response.status(400).send({ message: 'Email inválido! Tente novamente.'})
    }else{
        if(foundUser.password === userFromBody.password){
            return response.status(201).send({ message: 'Login realizado com sucesso!'}) 
        }else if(foundUser.password !== userFromBody.password) {
            return response.status(400).send({ message: 'Senha inválida! Tente novamente.'}) 
        }
    }
}

const createNewUser = (request, response) => {
    const newUser = request.body
    const checkingRegistration = usersData.find(element => element.email === newUser.email)
    if(newUser.name && newUser.email && newUser.password){
        console.log('Dados preenchidos corretamente!')
    }else{
        return response.status(400).send({ mensage: 'Falta criar o body corretamente' }) 
    }

    if (!checkingRegistration) {
        usersData.push(newUser)
        return response.status(201).send({ message: 'Usuario cadastrado com sucesso!'})
    }else{
        return response.status(400).send({ message: 'Email já cadastrado! Tente recuperar a sua senha.'}); 
    }
}


// Tela de login
app.post('/user', login)

// Tela de Cadastro
app.post('/registration', createNewUser)





