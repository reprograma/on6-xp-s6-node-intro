
// Criação de APIs
// Chamadas das APIs no postman
// 1- Tela login - Email e Password
// 2- Tela de Cadastro - Nome, email e senha
// 3- Lista de TODO LIST - Visualização de lista
// 4- Cadastro de TODO LIST - Cadastrar TODO LIST contendo os espaços: título e texto

const express = require('express')
const bodyParser = require('body-parser')
const {request, response} = require('express'); //alguem me explicaa por favor!

const app = express()
app.use(bodyParser.json()) //vinculando o body com express

const PORT = 8080

app.listen(PORT, function(){
    console.log('Servidor funcionando!');
})

// 1- Tela login - Email e Password

const userRegistered = [ // colchetes? === criando lista (array) e as {} === dizendo que é um objeto
    {
        name : 'FULANO',
        email : 'fulanodetal@gmail.com',
        senha : 123
    }
]



const accessUser = (request, response) =>{
    const validarLogin = request.body
    console.log('Aquuiii pode avançar');
    
    function searchemail(userRegistered) {
        return userRegistered.email === validarLogin.email //verificando se email existe 
    } 
    
    function searchsenha(userRegistered) {
        return userRegistered.senha === validarLogin.senha //verificando senha é correta
    }
   
    const userFound = userRegistered.find(searchemail) //encontro usuario e o find é o que mesmo? pesquise no google pois você já aprendeu
    //var isFoundemail = false;

    const passwordFound = userRegistered.find(searchsenha) //encontrando senha
    //var isFoundsenha = false;


    if (!userFound) { //se o email não existir
        return response.status(400).send({ message: 'Email não cadastrado!'});
    }else if (!passwordFound) { //verificando senha
        return response.status(400).send({ message: 'Senha incorreta!'});
    }else{ 
        return response.status(201).send({ message: 'Acesso Permitido'});
    } 
}


app.post("/login", accessUser) //retornando um login (não sei de q forma) p/ validar


// 2- Tela de Cadastro - Nome, email e senha

const newUser = (request, response) => {
    const registerUser = request.body
    console.log('Vai garota, esse é o caminho!');

    const newEmail = userRegistered.find(element => element.email === registerUser.email)
    if (registerUser.name && registerUser.email && registerUser.senha) {
        console.log('Todos os dados foram preenchidos corretamente!')
    } else {
        return response.status(400).send({ message: '*Name *Email *Senha - Complete todos os dados para finalizar!' })
    }
    
    if (!newEmail) {
        userRegistered.push(registerUser)
        return response.status(201).send({ message: 'Usuario cadastrado com sucesso!'})
    }else{
        return response.status(400).send({ message: 'Email já cadastrado!'}); 
    }
        
}


app.post("/login/register", newUser) //criando um login, estou em duvida se crio uma nova ''/register'' ou utilizo o mesmo q login



const todoListData = [
    {
        titulo : "Filmes",
        texto : "Pantera Negra, A vida de Madame Cj Walker"
    },

    {
        titulo : "Viagens",
        texto : "Nordeste"
    }
]

const searchTodo = (request, response) => {
   // const titulo = request.params.titulo
   const searchTitulo = request.body
    // return response.status(200).send(todoListDate)

    const tituloList = todoListData.find(element => element.titulo === searchTitulo.titulo)

    if (!tituloList) {
        if (!searchTitulo.titulo) {
            return response.status(400).send(todoListData) // se nada for digitado retornar toda a lista
        } else {
            return response.status(400).send({message: 'Título não encontrado, digite um título existente!', todoListData}) //se um titulo não for existente retorna a msg
        }
        
    } else {
        return response.status(201).send(tituloList) // retorna a o titulo procurado
    }
}

app.get("/todo", searchTodo)  //retornando todo

// message: 'Título não encontrado, digite um título existente!' 

// 4- Cadastro de TODO LIST - Cadastrar TODO LIST contendo os espaços: título e texto

const creatTodoList = (request, response) => {
    const newTodo = request.body
    console.log('Agora só vai, finalizando!.')

    const newTitulo = todoListData.find(element => element.titulo === newTodo.titulo)
    

    if (!newTitulo) {
        if (!newTodo.titulo || !newTodo.texto) {
            return response.status(400).send({message: 'Insira o Título e Texto para salvar corretamente.'})
        } else {
            todoListData.push(newTodo)
            return response.status(200).send({message: 'Seu TODO foi incluido', newTodo})
        }
    } else {
        return response.status(400).send({message: 'Título já cadastrado! Insira um título diferente.', todoListData})
    }
}



app.post("/todo", creatTodoList)