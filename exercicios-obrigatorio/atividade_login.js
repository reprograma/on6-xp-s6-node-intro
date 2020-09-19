const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express(); //iniciar o servidor

app.use(bodyParser.json())
const PORT = 3002 // porta do servidor para subir

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const read = require("readline-sync")

const login = [
    {
        email: "luanet@gmail.com",
        senha: 11111
    },

    {
        email: "vivian@gmail.com",
        senha: 555555
    }
]

const listarLogin = (request, response) => {
    return response.status(200).send(login) //livro cadastrado
}

console.table(login)

const criarLogin = (request, response) => {
    let usuarioCriado = request.body // corpo da requisição no postman
    console.log("usuario", usuarioCriado)
    login.push(usuarioCriado)
    if (usuarioCriado.email && usuarioCriado.senha) {
        return response.status(201).send({ message: "Usuário cadastrado com sucesso!" })
    } else {
        return response.status(400).send({ message: "Usuário sem cadastro" }) // mensagem sempre em formato json {dentro das chaves}
    }
}

const deleteLogin = (request, response) => {
    const email = request.params.email //dados do livro: id
    console.log("email", email)
    let isFoundLogin = false;
    if (login.length > 0) {
        login.find((element, index) => { // nome autor e id(array) e posição no array
            if (element.email == email) {
                isFoundLogin = true
                login.splice(index, 0) // exclui o livro dentro do array na posição indicada
            }

        })
    }
    if (isFoundLogin) {
        return response.status(201).send({ message: "Cadastro excluído com sucesso!" })
    } else {
        return response.status(400).send({ message: "Preencha as informações necessárias" })
    }
}

const updateLogin = (request, response) => {
    const email = request.params.email
    if (email) {
        return response.status(201).send({ message: "Cadastro alterado!" })
    } else {
        return response.status(400).send({ message: "Não foi possível alterar!" })
    }
}




app.post("/login", listarLogin) //parâmetro url e função (lista)
app.post("/login", criarLogin) //(cadastra)
app.delete("/login/:email", deleteLogin)// deletar o registro
app.put("/login/:email", updateLogin)// alterar o registro


