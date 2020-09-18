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
        this.email = email
        this.password = password
    }
}

const users = []
const user = new User("Renata Abreu", "renata89abreu@gmail.com", "batatinha")
users.push(user)

function login(request, response) {
    const bodyUser = request.body

    const userExists = users.filter(user => user.email === bodyUser.email)

    if(userExists.length < 1)
        return response.status(401).send({message: "User doesn't exist."})

    if(userExists[0].password != bodyUser.password)
        return response.status(401).send({message: "User and password don't match."})

    console.log(bodyUser.email + " is logged.")
    return response.status(200).send({message: "You're logged in."})

}

function create_user(request, response) {
    const bodyUser = request.body

    if(!(bodyUser.name && bodyUser.email && bodyUser.password))
        return response.status(400).send({message: 'Missing body information.'})

    const userExists = users.filter(user => user.email === bodyUser.email)
    if(userExists.length > 0)
        return response.status(406).send({message: 'E-mail already exists in our database.'})

    const objUser = new User(bodyUser.name, bodyUser.email, bodyUser.password)
    users.push(objUser)
    console.table(users)
    return response.status(201).send({message: 'User created.'})
}

app.post("/login", login)
app.post("/create", create_user)