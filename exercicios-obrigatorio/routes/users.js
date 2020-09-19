const { request, response } = require("express");


//Lista de usuários
const users = [
    {
        email: 'lelus@lulu.com',
        password: 12345
    }
]


//Fazer login
const login = (request, response) => {
    const user = request.body
    let findUser = false
    let findPassword = false

    users.find(item => {
        if (item.email === user.email && item.password === user.password) {
            findUser = true
            findPassword = true
        }
    })

    if (findUser && findPassword) {
        return response.status(201).send({ message: 'Usuário logado!'})
    } else {
        return response.status(400).send({ message: 'Usuário e/ou senha incorretos.'})
    }
}



//Cria cadastro
const signUp = (request, response) => {
    const user = request.body
    users.push(user)

    if(!user.name) {
        return response.status(400).send ({ message : 'Digite um nome válido'})
    } else if(!user.email) {
        return response.status(400).send ({ message : 'Digite um e-mail válido'})
    } else if (!user.password) {
        return response.status(400).send ({ message : 'Digite uma senha válida'})
    } else {
        return response.status(201).send({ message :  'Usuário Cadastrado com sucesso!'})
    }
}


module.exports = {
    login,
    signUp
}