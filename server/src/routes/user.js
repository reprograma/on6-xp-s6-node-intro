function login(request, response) {
    try {

        const user = request.headers.authorization
        console.log('HEADER',user)
    
        return response.status(201).send({msg:"Login Realizado com Sucesso"});
     }
     catch (e) {
        console.log(e)
        return response.status(500).send({error : 'Erro Interno'})
     }

}

module.exports = {
   login,
}

