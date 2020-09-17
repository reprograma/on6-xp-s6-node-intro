const users_db = require('../database/users_db');
const { users } = users_db;

const loginUser = (request, response) => {
    const user = request.body;
    let isValidUser = false;
    let isPasswordCorrect = false;
    users.find(element => {
        if(element.email === user.email){
            isValidUser = true;
            if(element.password === user.password){
                isPasswordCorrect = true;
            }
        }
    });

    if (isValidUser) {
        if (isPasswordCorrect) {
            return response.status(201).send({ message :  'Login feito com sucesso!'});
        } else {
            return response.status(400).send({ message :  'Senha digitada incorreta!'});
        }           
    } else {
        return response.status(400).send({ message :  'Usuário inválido!'})
    }
    
}

const signUpUser = (request, response) => {
    const user = request.body;
    if(user.name && user.password && user.email){
        return response.status(201).send({ message :  'Cadastro feito com sucesso!'});
    } else {
        return response.status(400).send({ message :  'Alguma informação não foi preenchida!'});
    }

}

module.exports = {
    loginUser,
    signUpUser
}