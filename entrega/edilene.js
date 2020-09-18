const express = require('express')  //para obtenção de dados a partir do servidor
const bodyParser = require('body-parser')  //converter o body da requisição em outro formato
const { request, response } = require('express')

const app = express() //criando a função 

app.use(bodyParser.json()) //mostrando que vai transformar em json o body

const PORT = 3001 //definindo a porta local do servidor

//testando essa porta
app.listen(PORT, function () {
    console.log('Servidor funcionando!!')
})


//criando array dos logins
const logins = [
    {
        name : 'Alguém',
        email : 'guem@email.com',
    },

    {
        name : 'Ninguém',
        autor : 'teste@email.com',
    }

] 

//criando array das tarefas
const list = [
    {
        titulo: 'tarefa1',
        texto: 'fazer tal e tal...'
    },

    {
        titulo: 'tarefa 2',
        texto: 'estudar'

    }
]


//função que traz a lista de logins no postman
const listLogins = (request, response) => {
    return response.status(201).send(logins)
}


//função que cria uma conta e testa se todos os parâmetros foram preenchidos
const createConta = (request, response) => {
    const conta = request.body
    console.log('Nova conta: ', conta)
    if (conta.name && conta.email && conta.password) {
        logins.push(conta)
        return response.status(201).send({ message: 'Conta Cadastrada com Sucesso!' })
    } else {
        return response.status(400).send({ message: 'Faltando dados' })
    }
} 


//traz a lista das tarefas no postman
const listToDo = (request, response) => {
    return response.status(200).send(list)
}

//função para criar uma nova tarefa, precisa de 2 parâmetros para funcionar
const createTarefa = (request, response) => {
    const novaTarefa = request.body
    console.log('Tarefa é : ', novaTarefa)
    if (novaTarefa.titulo && novaTarefa.texto) {
        list.push(novaTarefa)
        return response.status(201).send({ message: 'Tarefa criada com sucesso!' })
    } else {
        return response.status(400).send({ message: 'Faltando dados' })
    }
}


//função para atualizar a tarefa existente
const updateTarefa = (request, response) => {
    const titulo = request.params.titulo
    console.log('Tarefa alterada ...', titulo);
    if (titulo) {
        return response.status(201).send({ message: 'Tarefa alterada com sucesso' })
    } else {
        return response.status(400).send({ message: 'Falta enviar Título na url' })
    }

}




app.post('/login', createConta)

app.post('/login2', listLogins)//alterei para post por ser dados sensíveis

app.get('/lista', listToDo)

app.post('/lista', createTarefa)

app.put('/lista/:titulo', updateTarefa)

