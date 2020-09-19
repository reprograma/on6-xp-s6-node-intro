const { response } = require("express")

const users = []

const signUp = (request, response) => {
    const user = request.body
    users.push(user)
}