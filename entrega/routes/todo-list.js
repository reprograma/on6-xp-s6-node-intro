const toDos = [
    {
        "titulo": "fazer coisas",
        "texto": "coisas"
    }
]

const createTdList = (request,response)=>{
    const fazer = request.body
    console.log('TODO List',fazer)
    toDos.push(fazer)
    if(fazer.titulo && fazer.texto){
        return response.status(201).send({ message :  'TODO list criado com sucesso'})
    }
}

const updateTdList = (request, response)=>{
    const id = request.params.id
    if(id){
        return response.status(201).send({ message : 'TODO List atualizado com sucesso'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar Id na url'})
    }
}

module.exports = {
    createTdList,
    updateTdList
}