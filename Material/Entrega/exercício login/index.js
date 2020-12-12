const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Server is running!')

app.listen(PORT, listenFunction)


const users = []

// informar usuário pelo Postman:


// {
//     "name": "Monaliza Vitor",
//     "email": "vitormonaliza@gmail.com",
//     "password": "qwE098"
// }

const signUp = (request, response) => {
    const createAccount = request.body

    console.log('Informações cadastradas!', createAccount)


    if (createAccount.name && createAccount.email && createAccount.password) {
        users.push(createAccount)
        return response.status(201).send({ message: "Conta criada com sucesso!" })
    } else {
        return response.status(400).send({ message: "Erro. Favor conferir os dados!" })
    }

}

const signIn = (request, response) => {
    const login = request.body

    let isFoundLogin = false


    isFoundLogin = users.find(element => {
        if (element.email == login.email && element.password == login.password) {
            return true
        }
    })

    if (isFoundLogin) {
        return response.status(200).send({ message: 'Login efetuado com sucesso!' })
    } else {
        return response.status(400).send({ message: 'Error. Verifique os dados!' })
    }
}


app.post('/signin', signIn)
app.post('/signup', signUp)