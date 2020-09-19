const { response } = require('express');
const express = require('express');
const { request } = require('http');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log(`servidor rodando na porta ${PORT}`)

app.listen(PORT, listenFunction)




/* Tela de Cadastro Usuarios*/

const usuarios = [
    {
        "nome": "jose",
        "email": "jose@gmail.com",
        "senha": "batatinha123",
        "id": 1
    },
    {
        "nome": "jose",
        "email": "jose@gmail.com",
        "senha": "batatinha123",
        "id": 2
    },
    {
        "nome": "jose",
        "email": "jose@gmail.com",
        "senha": "batatinha123",
        "id": 3
    }
]

const criarUsuarios = (request, response) =>{
    const user = request.body
    user.id = usuarios.length + 1
    console.log('Usuario cadastrado com sucesso', user);
    usuarios.push(user)

    return response.status(201).send(user)
}

/* Listar Usuarios*/

const listaUsuarios = (request, response)=>{

    return response.status(200).send(usuarios)
}

/*Buscar Usuarios*/

const buscarUsuario = (request, response)=>{
    const id = request.params.id

    let usuarioEncontrado
    usuarios.forEach(usuario =>{
        if(usuario.id == id){
            usuarioEncontrado = usuario
        }
    })

    if(!usuarioEncontrado){
        return response.status(404).send({mensagem: 'Usuario não encontrado'})
    }

    return response.status(200).send(usuarioEncontrado)
}

/*Deletar Usuarios*/

const deletarUsuario = (request, response)=>{
    
    const id = request.params.id
    
    let encontrado = false;
    
    usuarios.forEach((element,index)=>{
        if(element.id == id){
            encontrado = true
            usuarios.splice(index)    
        }
    })
    
    if(encontrado){
        return response.status(204).send({ message: "Usuario excluido com Sucesso"})        
    }else{
        return response.status(404).send ({ message : 'Usuario não encontrado'})
    }    
}


/* Tela de Login*/
const login = (request, response)=>{
    const login = request.body
    console.log('O seu usuario esta correto', login);

    if(login.email)

    return response.status(200).send({message: 'email e password correto'})
}


/*   TODO    */ 

const todoList = (request, response)=>{
    const list = [
        {
            titulo: 'Livros para ler',
            item1: 'Insonia',
            item2: 'Dark Tower',
            status: 'Concluido'

        },
        {
            titulo: 'Titulo',
            item1: 'Digite texto...',
            item2: '',
            status: ''
        }
    ]

    return response.status(200).send(list)

}

app.post('/usuarios', criarUsuarios)
app.get('/usuarios', listaUsuarios)
app.get('/usuarios/:id', buscarUsuario)
app.delete('/usuarios/:id', deletarUsuario)
/*app.put('/usuarios/:id', atualizarUsuario)*/



app.post('/login', login)
app.get('/cadastro', todoList)