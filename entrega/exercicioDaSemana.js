const express = require('express')
const bodyParser = require('body-parser')
const { response, request } = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 5001

app.listen(PORT,function () {
    console.log('Servidor disponivel.')
})

const usuariCadastrado =[
    {
        name: 'Jessyca Pascoa',
        email: 'jessyca_pascoa@hotmail.com',
        senha: '12345678'
    },
    {
        name: 'Julio Pascoa',
        email: 'jp@hotmail.com',
        senha: '12345678'
    },
    {

    name: 'Frida Kahlo',
    email: 'frida_kahlo@hotmail.com',
    senha: '12345678',
    },
    {
        name: 'Marie Curie',
        email: 'marieCurie_quimica@hotmail.com',
        senha: '12345678'
    }
]

const listaTarefa =[
    {
        title: 'Atividade para fazer até sexta',
        description: 'Fazer as atividades da reprograma',
        Local: 'em casa'

    },
    {
        title: 'Médico',
        description: 'Consulto com o médice',
        Local: 'Boa Viagem'
    }
]

const FazerLogin = (request,response)=> {
    const usuario = request.body;
    let validoUsuario = false;
    let senhaCorreta = false;
    usuariCadastrado.find(element => {
        if(element.email === usuario.email && element.senha === usuario.senha){
            validoUsuario = true;
            senhaCorreta = true
        }
        if(validoUsuario){
            if(senhaCorreta){
                return response.status(201).send({message: 'Login realizado com sucesso'})
            } else{
                return response.status(400).senha({message: 'Senha inválida'})
            }
        }else {
            return response.status(400).send({message:"Usuário incorreto."})

        }
    })
}
const novaTarefa = (request,response)=>{
    const tarefa = request.body
    listaTarefa.push(tarefa)
    if (listaTarefa.title) {
        return response.status(201).send({message : 'Atividade cadastrada com Sucesso!'})        
    } else {
        return response.status(400).send({message : 'Faltou titulo da tarefa.' })
    }
}
const visualizarLista = (request,response) =>{
    return response.status(200).send(listaTarefa)
}

const editarAtividade = (request, response) => {
    const title = request.params.title;
    const ListTarefa = request.body;
    tituloValido = false;
    if(listaTarefa.length > 0){
        listaTarefa.find(element => {
           if (element.title === title){
               element.title = ListTarefa.title;
               element.description = ListTarefa.text;
               element.Local = ListTarefa.Local;
               tituloValido = true;
           }
        });
    }

    if(tituloValido){
        return response.status(201).send({ message :  'Lista de tarefas editada com sucesso!'});
    } else {
        return response.status(400).send({ message :  'Atividade não cadastrada!'})
    }
}

app.post('/entrega/login', FazerLogin)
app.get('/entrega/todas', visualizarLista);
app.post('/entrega/nova', novaTarefa);
app.put('/entrega/edit',editarAtividade)





