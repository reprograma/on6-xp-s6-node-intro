const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const register = [
    {
        name: 'Patricia',
        email: 'patricia@gmail.com',
        password: '123456',
    },
    {
        name: 'Jessica',
        email: 'jessica@gmail.com',
        password: '123456',
    }
]

const toDoList = [
    {
        title: 'Tarefas da Semana em casa',
        text: 'Varrer casa | Lavar louça | Estudar | Lavar banheiro',
    },
    {
        title: 'Tarefas do mês',
        text: 'Pagar contas | Pagar aluguel | Comprar comida pro gato | Comprar gás',
    }
]

// usar somente o GET para retornar mensagem de login e senha reconhecidos

const loginOK = (request, response) => {

    return response.status(200).send({ message: 'E-mail e senha reconhecidos com sucesso!' })
}


const createLogin = (request, response) => {
    const login = request.body
    console.log('Login', register)
    register.push(login)
    if (login.name && login.password && login.email) {
        return response.status(201).send({ message: 'Cadastro realizado com sucesso!' })
    } else {
        return response.status(400).send({ mensage: 'Faltou alguma informação para o cadastro' })
    };

}

const listToDo = (request, response) => {

    return response.status(200).send(toDoList)
}

const createToDo = (request, response) => {
    const list = request.body
    console.log('ToDo', toDoList)
    toDoList.push(list)
    if (list.title && list.text) {
        return response.status(201).send({ message: 'Nova tarefa adicionada com sucesso!' })
    } else {
        return response.status(400).send({ mensage: 'Faltou alguma informação para o cadastro' })
    };

}


const updateToDo = (request, response) => {
    const upList = request.params.title
    if (upList) {
        return response.status(201).send({ message: 'Tarefa atualizado com sucesso!' })
    } else {
        return response.status(400).send({ message: 'A tarefa precisa ter um título' })
    }
}


app.post('/login', loginOK)

app.post('/cadastro', createLogin)

app.get('/buscartarefas', listToDo)

app.post('/novatarefa', createToDo)

app.put('/atualizartarefas', updateToDo)
