const { response } = require("express")

const users = [
    {
        name : 'usuario1',
        email : 'usuario1@fake',
        id : 1,
        password : 'senha'
    },
]

const login = (request, response)=>{
    const userLogin = request.body
    console.log(login)
    if (userLogin.login==="lilian" && userLogin.senha==="senha"){
        return response.status(201).send({ message :  'Login efetuado com Sucesso!'})
    }else{
        return response.status(400).send ({ message : 'Falha no login'})
    }
}

const createUser = (request,response)=>{
    const user = request.body
    console.log('user',user)
    users.push(user)
    if(user.name && user.email && user.password){
        return response.status(201).send({ message :  'Usuário Cadastrado com Sucesso!'})
    }else{
        return response.status(400).send ({ message : 'Falta dados do usuário'})
    }
}

const updateUser = (request, response) =>{
    const id = request.params.id
    if(id){
        return response.status(201).send({ message : 'Usuário Atualizado com Sucesso'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar Id na url'})
    }
}

module.exports = {
    createUser,
    updateUser,
    login
}