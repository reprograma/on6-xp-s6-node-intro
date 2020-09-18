const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const PORT = 5001

app.listen(PORT,function () {
    console.log('Servidor disponivel.')
})

const usuario =[
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

const FazerLogin = (request,response)=> {
    const usuario = request.body;
    let validoUsuario = false;
    let senhaCorreta = false;
    usuario.find(element => {
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

app.post('/login', FazerLogin)




