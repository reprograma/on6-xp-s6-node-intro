const express = require('express');
const bodyParser = require('body-parser');

const register = express();

register.use(bodyParser.json()) // pro express entender que eu amandei um json

const PORT = 3000

const listenFunction = () => console.log('Serve Listen in port:' +PORT)

register.listen(PORT, listenFunction)

const login = [
   
    {

        name: "Lorenna",
        email: "leticiaLima@gmail.com",
        password: 123

    }
]

const listLogin = (resquest, response)=>{
    return response.status(200).send(login)
}

const registerLogin = (request, response) =>{
    const newLogin = request.body
    console.log('New register', newLogin)
    login.push(newLogin)

if(newLogin.name && newLogin.email && newLogin.password){
    return response.status(201).send({message: "New register was created!"})
}else{
    return response.status(400).send({message: "New register wasn't created!"})
}

}








register.post('/site', listLogin)

register.post('/site', registerLogin)