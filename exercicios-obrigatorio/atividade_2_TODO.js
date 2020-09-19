const express= require("express");
const bodyParser=require("body-parser");
const {response}=require("express");

const app = express(); //iniciar o servidor

app.use(bodyParser.json())
const PORT = 3001 // porta do servidor para subir

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const listas = [
    {
        lista: "casa",
        texto:"Lavar louça"
    },
    {
        lista: "facu",
        texto:"Ler um livro"
    },
    {
        lista: "trabalho",
        texto:"Ler os e-mails"
    }
]

const mostrarLista = (request, response) => {
    return response.status(200).send(listas) //livro cadastrado
}

const criarLista = (request, response) => {
    let listaCriada = request.body // corpo da requisição no postman
    console.log("lista", listaCriada)
    listas.push(listaCriada)
    if (!listaCriada.lista) {
        return response.status(201).send({ message: "Listas Cadastradas!" })
    } else {
        return response.status(400).send({ message: "Listas não criadas!" }) // mensagem sempre em formato json {dentro das chaves}
    }
}

const updateLista = (request, response) => {
    const lista = request.params.lista
    if (lista) {
        return response.status(201).send({ message: "Lista alterada!" })
    } else {
        return response.status(400).send({ message: "Não foi possível alterar!" })
    }
}

const deleteLista = (request, response) => {
    const lista = request.params.lista //dados do livro: id
    console.log("lista", lista)
    let isFoundListas = false;
    if (listas.length > 0) {
        listas.find((element, index) => { // nome autor e id(array) e posição no array
            if (element.lista == lista) {
                isFoundListas = true
                listas.splice(index, 0) // exclui o livro dentro do array na posição indicada
            }

        })
    }
    if (isFoundListas) {
        return response.status(201).send({ message: "Lista excluída com sucesso!" })
    } else {
        return response.status(400).send({ message: "Lista não excluída." })
    }
}

//console.table(lista)
app.get("/listas", mostrarLista) //parâmetro url e função (lista)
app.post("/listas", criarLista) //(cadastra)
app.put("/listas/:lista", updateLista)// alterar o registro
app.delete("/listas/:lista", deleteLista)// deletar o registro
