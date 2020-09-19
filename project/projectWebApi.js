const express = require ('express')
const bodyParser = require ('body-parser')
const { response, request } = require('express')

const app = express()
app.use(bodyParser.json())
const PORT = 8080


app.listen(PORT, function(resquest, response){
    console.log('Servidor funcionando.')
})



//Dados de armazenamento usuário
const usuario = new Usuario();
usuario.nome = 'Laís Lopes';
usuario.email = 'lais@lopes.com';
usuario.senha = 'cript@xyz012'


//API para tela de cadastro
const createCadastro = (request, response) =>{
    const cadastro= request.body
    console.log('CADASTRO', cadastro)
   
    if(cadastro.nome && cadastro.email && cadastro.senha){
        return response.status(201).send({message: 'Cadastro realizado com sucesso!'})

    }else{
        return response.status(400).send({message: 'Falta dados ou dados são inválidos. Tente novamente'})
    }    
}


//API para acesso login
const login = (request, response) =>{
    const login = request.body
    console.log('LOGIN', login)

    if(login.email && login.senha === cadastro){
        return response.status(201).send({message: 'Livro cadastrado com sucesso!'})

    }else{
        return response.status(400).send({message: 'Email ou senha não conferem. Verifique os dados e tente novamente.'})

    }    
}



//Dados de armazenamento todoList
const todoList = new TodoList();
todoList.titulo = 'Cronograma de Estudos';
todoList.texto = 'Lógica de programação em 21/09/2020'


//Visualizando um TODOList
app.get('/todo', function listarTodos(request, response){ 
    const NovoTitulo = request.body
    
    if(NovoTitulo != listarTodos){
        if(todoList.titulo || todoList.texto){
            return response.status(200).send({message: 'Informe o título ou texto a ser cadastrado: '})
        }else{
            return response.status(200).send({message: 'Dados cadastrados com sucesso!'})
        }  
    }else{
        return response.status(400).send({message: 'Os dados informados já constam cadastrados em nossa base de dados.'})
    }   
})



//Novo cadastro
const novoCadastro = (request, response) =>{
    const cadastro = request.body
    console.log('CADASTRO', cadastro)
    if(login.nome && login.email && login.senha){
        return response.status(201).send({message: 'Dados cadastrados com sucesso!'})

    }else{
        return response.status(400).send({message: 'Preencha todos os ou insira dados válidos'})

    }    
}

//Operações de POST  e GET
app.post('/cadastro', createCadastro)
app.post('/login', login)
app.get('/book', listarTodos)
app.post('/book', novoCadastro)