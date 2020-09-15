
const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

const PORT = 5001

const listenFunction = () => console.log('Serve Listen in port:' + PORT)


app.listen(PORT, listenFunction)


// 1) tela de login: adicionar email e password

const entrandoLogin = (request, response)=>{
    const login = [
        {
            email: "fernandaoliveiraufpe@gmail.com",
            password: "fernanda123",
            id : 1 
        }
    ]
    return response.status(200).send(login)
}

app.get('/todolist', entrandoLogin)

// URL no postman na requisição get http://localhost:5001/todolist/


// 2) tela de cadastro : criar o cadastro com nome, email, senha
