const { request, response } = require('express');

const express = require('express');

const bodyParse = require('body-parser')

const app = express();

const port = 3001

app.use(bodyParse.json())

//tela de login

function listenFunction() {
    console.log('Servidor funcionando')
}

app.listen(port, listenFunction) //comando do express listen

const listUsuario = (request, response) => {
    const usuario = [{
        nome: 'Graciela',
        email: 'graciela.gln @gmail.com ',
        senha: '1234'
    }]
    return response.status(200).send(usuario)
}

app.get("/usuario", listUsuario)

//Tela de cadastro do usuario

/*{ cadastro feito no Postman
    "nome":"graciela",
    "email":"lopesnonato@gmail.com",
    "senha":"561"
}*/


const createCad = (request, response) => {
    const usuario = request.body
    console.log('USUARIO', usuario)
    if (usuario.nome && usuario.email && usuario.senha) {
        return response.status(201).send({ message: 'Usuario cadastrado com sucesso!' })
    } else {
        return response.status(400).send({ message: 'Email ou senha não encontrado' })
    }
}

app.post("/user", createCad)

//todo List

const toDoList = (request, response) => {

    const listagemFilmes = [{
            local: 'Prime Video',
            filme: 'Maravilhosa Sra Maisel',
            visto: 'sim'
        },
        {
            local: 'Netflix',
            filme: 'O menino do Pijama Listrado',
            visto: 'nao'

        }
    ]
    return response.status(200).send(listagemFilmes)
}

app.get("/filmes", toDoList)