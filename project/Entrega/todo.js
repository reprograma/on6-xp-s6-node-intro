const express = require('express')
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express();

app.use(bodyParser.json())

const PORT = 8080

const listenFunction = () => console.log('Serve Listen in port:'+PORT)


app.listen(PORT,listenFunction)

const todo =[
    {
        titulo: "estudar",
        texto: "hoje vou estudar intro node"
}]
const listarTodo = (request, response) => response.status(200).send(todo)
    
app.get('/todo',listarTodo)

const cadastro = (request, response) => {
    const realizarCadastro = request.body
    
    if(realizarCadastro.titulo && realizarCadastro.texto){
        console.log("Body escrito corretamente")
        return response.status(200).send({message: "tudo certo na Bahia"})
    }else{
        return response.status(400).send({message: "falta criar o body corretamente"})
    }

}
app.post('/todo', cadastro)

const atualizar = (request, response) =>{
    const titulo = request.params.titulo
        if(titulo){
            return response.status(201).send({ message : 'Todo atualizado com Sucesso'})
        }else{
            return response.status(400).send ({ message : 'Não foi possível atualizar'})
        }
}
app.put('/todo/:titulo',atualizar)