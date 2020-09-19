const { response } = require("express")

const users = []

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
    signUp
}