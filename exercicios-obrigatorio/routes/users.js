//const { request } = require("express");

const users = []

const login = (request, response) => {
    const user = request.body
    let findUser = false
    let findPassword

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