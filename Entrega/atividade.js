const express = require('express')
const bodyParser = require('body-parser')
const { request } = require('express')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})


const telaLogin = (request, response) => {
    const login = request.body
    console.log('LOGIN', login)
    if(login.email === 'tainaramoreno@reprograma.com' && login.senha === 'tai123'){
        return response.status(201).send({ message : 'Login efetuado com sucesso'})
    }else{
        return response.status(401).send({ menssage : 'Email ou senha incorretos, tente novamente!'})
    }  
}


const telaCadastro = (request, response) => {
    const cadastro = request.body  
    console.log('CADASTRO', cadastro) 
    if(cadastro.nome && cadastro.email && cadastro.senha){
        return response.status(201).send({ message : 'Cadastrado com sucesso'})
    }else{
        return response.status(401).send({ menssage : 'Preencha corretamente seu cadastroS'})

    }
}

const todoList = [
    {
        titulo : 'Programação do Curso',
        segunda: 'Orientação Educacional',
        quarta: 'Aula Revisão',
        sexta: 'Entrega da Atividade',
        sabado: 'Aula Conteúdo'
    },

    {
        titulo : 'Cursos que quero fazer',
        primeiro: 'Finalizar o back-end',
        segundo: 'Robot',
        terceiro: 'Analisando'        
    }
]

 const listarTodo = (request, response) => {
    return response.status(200).send(todoList)
    
 }

const novoCadastro = (request, response) => {
    const cadastro2 = request.body
    console.log('NOVO CADASTRO', cadastro2)
    return response.status(201).send({ message : 'Cadastrado com sucesso'})
}

const updateTodo = (request, response) => {
    const terceiro = request.params.terceiro
    if(terceiro){
        return response.status(201).send({ menssage : "Atualizado com sucesso"})
    }else{
        return response.status(400).send({ menssage : "Tente novamente"})
    }

}

app.post('/atividade', telaLogin)

app.post('/atividade/cadastro', telaCadastro)

app.get('/atividade', listarTodo)

app.post('/atividade/todolist', novoCadastro)

app.put('/atividade/:terceiro', updateTodo)




