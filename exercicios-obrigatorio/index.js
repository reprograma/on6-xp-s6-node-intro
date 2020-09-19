const { response } = require('express');
const express = require('express');
const { request } = require('http');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log(`servidor rodando na porta ${PORT}`)

app.listen(PORT, listenFunction)



const usuarios = [
    {
        "nome": "jose",
        "email": "jose@gmail.com",
        "senha": "batatinha123",
        "id": 1
    }
]

/* Tela de Login*/
const login = (request, response)=>{
    const dados = request.body

    let encontrado = false
    usuarios.forEach(usuario =>{
        if(usuario.email == dados.email && usuario.senha == dados.senha){
            encontrado = true
        }
    })

    if(!encontrado){
        return response.status(403).send({mensagem: 'email ou senha invalido'})
    }

    return response.status(200).send({mensagem: 'login efetuado com sucesso'})
}

/* Tela de Cadastro Usuarios*/

const criarUsuario = (request, response) =>{
    const user = request.body
    if(!user.nome || !user.email || !user.senha){
        return response.status(400).send({mensagem: 'Dados incompletos, é obrigatório o preenchimento de todos os campos'})
    }
    user.id = usuarios.length + 1
    console.log('Usuario cadastrado com sucesso', user);
    usuarios.push(user)

    return response.status(201).send(user)
}

/* Listar Usuarios*/

const listaUsuarios = (request, response)=>{

    return response.status(200).send(usuarios)
}

/*Buscar Usuario*/

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

/*Deletar Usuario*/

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

/*Atualizar Usuario*/

const atualizarUsuario = (request, response)=>{
    const id = request.params.id
    const dados = request.body

    let usuarioEncontrado
    usuarios.forEach(usuario =>{
        if(usuario.id == id){
            usuarioEncontrado = usuario
        }
    })

    if(!usuarioEncontrado){
        return response.status(404).send({mensagem: 'Usuario não encontrado'})
    }
    usuarioEncontrado.nome = dados.nome ? dados.nome : usuarioEncontrado.nome
    usuarioEncontrado.email = dados.email ? dados.email : usuarioEncontrado.email
    usuarioEncontrado.senha = dados.senha ? dados.senha : usuarioEncontrado.senha
    return response.status(200).send(usuarioEncontrado)
}



/*   TODO List    */ 

const tarefas = [
    {
        "titulo": "Filme para ver",
        "texto": "O Circulo",
        "concluido": true,
        "id": 1
    }
]

/* Tela de Cadastro Tarefas*/


const criarTarefa = (request, response) =>{
    const tarefa = request.body
    if(!tarefa.titulo || !tarefa.texto || tarefa.concluido == undefined){
        return response.status(400).send({mensagem: 'Dados incompletos, é obrigatório o preenchimento de todos os campos'})
    }
    tarefa.id = tarefas.length + 1
    console.log('Tarefa cadastrada com sucesso', tarefa);
    tarefas.push(tarefa)

    return response.status(201).send(tarefa)
}

/* Listar Tarefas*/

const listaTarefas = (request, response)=>{

    return response.status(200).send(tarefas)
}

/*Buscar Tarefa*/

const buscarTarefa = (request, response)=>{
    const id = request.params.id

    let tarefaEncontrada
    tarefas.forEach(tarefa =>{
        if(tarefa.id == id){
            tarefaEncontrada = tarefa
        }
    })

    if(!tarefaEncontrada){
        return response.status(404).send({mensagem: 'Tarefa não encontrada'})
    }

    return response.status(200).send(tarefaEncontrada)
}

/*Deletar Tarefa*/

const deletarTarefa = (request, response)=>{
    
    const id = request.params.id
    
    let encontrado = false;
    
    tarefas.forEach((element,index)=>{
        if(element.id == id){
            encontrado = true
            tarefas.splice(index)    
        }
    })

    if(encontrado){
        return response.status(204).send({ message: "Tarefa excluida com Sucesso"})        
    }else{
        return response.status(404).send ({ message : 'Tarefa não encontrada'})
    }    
}

/*Atualizar Tarefa*/

const atualizarTarefa = (request, response)=>{
    const id = request.params.id
    const dados = request.body

    let tarefaEncontrada
    tarefas.forEach(tarefa =>{
        if(tarefa.id == id){
            tarefaEncontrada = tarefa
        }
    })

    if(!tarefaEncontrada){
        return response.status(404).send({mensagem: 'Tarefa não encontrada'})
    }
    tarefaEncontrada.titulo = dados.titulo ? dados.titulo : tarefaEncontrada.titulo
    tarefaEncontrada.texto = dados.texto ? dados.texto : tarefaEncontrada.texto
    tarefaEncontrada.concluido = dados.concluido !== undefined ? dados.concluido : tarefaEncontrada.concluido
    return response.status(200).send(tarefaEncontrada)
}


app.post('/login', login)

app.post('/usuarios', criarUsuario)
app.get('/usuarios', listaUsuarios)
app.get('/usuarios/:id', buscarUsuario)
app.delete('/usuarios/:id', deletarUsuario)
app.put('/usuarios/:id', atualizarUsuario)


app.post('/todo', criarTarefa)
app.get('/todo', listaTarefas)
app.get('/todo/:id', buscarTarefa)
app.delete('/todo/:id', deletarTarefa)
app.put('/todo/:id', atualizarTarefa)
