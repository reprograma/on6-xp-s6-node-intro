const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Listening on port ' + PORT)

app.listen(PORT,listenFunction)


class User {
    constructor(name, email, password) {
        this.name = name
        this.email = new String(email).toLowerCase()
        this.password = password
    }
}

const users = []
const user = new User("Renata Abreu", "renata89abreu@gmail.com", "batatinha")
users.push(user)

function login(request, response) {
    const userBody = request.body
    userBody.email = userBody.email.toLowerCase()

    const userExists = users.filter(user => user.email === userBody.email)

    if(userExists.length < 1)
        return response.status(401).send({message: "User doesn't exist."})

    if(userExists[0].password != userBody.password)
        return response.status(401).send({message: "User and password don't match."})

    console.log(userBody.email + " is logged.")
    return response.status(200).send({message: "You're logged in."})

}

function create_user(request, response) {
    const userBody = request.body

    if(!(userBody.name && userBody.email && userBody.password))
        return response.status(400).send({message: 'Missing body information.'})

    const userExists = users.filter(user => user.email === userBody.email)
    if(userExists.length > 0)
        return response.status(406).send({message: 'E-mail already exists in our database.'})

    const userObj = new User(userBody.name, userBody.email, userBody.password)
    users.push(userObj)
    console.table(users)
    return response.status(201).send({message: 'User created.'})
}

app.post("/login", login)
app.post("/create", create_user)