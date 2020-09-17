// 1. Tela de Login (email e password)

const login = [
    {
        email: "mpinheiro@usp.br",
        password: "senhasecreta",
    }
]

const loginUser = (request, response)=>{
    const login = request.body

    var isFoundEmail = false;
    var isFoundPassword = false;

    if (element.email == login.email) {
            isFoundEmail = true
    }
    if (element.password == login.password) {
            isFoundPassword = true
    }
    
    if(isFoundEmail && isFoundPassword){
        return response.status(200).send({message: "Login realizado com sucesso!"})
    } else{
        return response.status(400).send ({message: "Tente novamente."})
    }
}

// 2. Tela de Cadastro (nome, email e senha)

const register = [
    {
        name: "Mariana Pinheiro",
        email: "mpinheiro@usp.br",
        password: "senhasecreta",
    }
]

const registerUser = (request,response)=>{
    const user = request.body
    console.log('User: ',user)
    register.push(user)
    if(user.name && user.email && user.password){
        return response.status(201).send({message: "Cadastro feito com sucesso! =)"})
    } else{
        return response.status(400).send({message: "Faltam dados para o envio. Tente novamente."})
    }
}

// 3. Tela de Listagem de to do list (visualização da lista que já existe)

const listToDo = [
    {
        title: "Exercício semana 6 - {reprograma}",
        text: "Criar APIs telas 1, 2 e 4 & Chamadas no Postman",
        id: 1
    }
]

const viewToDo = (request, response)=>{
    return response.status(200).send(listToDo)
}

// 4. Cadastro de novo to do e atualização de um que já existia (título e texto)
// 4.1 Cadastro

const newToDo = (request,response)=>{
    const toDo = request.body
    console.log('To Do: ',toDo)
    listToDo.push(toDo)
    if(toDo.title && toDo.text && toDo.id){
        return response.status(201).send({message: "Novo To Do incluído com sucesso! =)"})
    } else{
        return response.status(400).send({message: "Faltam dados para o cadastro. Tente novamente."})
    }
}

// 4.2 Atualização

const updateToDo = (request,response)=>{
    const id = request.params.id
    if(id){
        return response.status(201).send({message: "To Do atualizado."})
    } else{
        return response.status(400).send({message: "Faltou informar o id na URL para atualização."})
    }
}

// 4.3 Exclusão
const deleteToDo = (request,response)=>{
    const id = request.params.id
    console.log('Id: ',id)
    if(id){
        return response.status(201).send({message: "To Do excluído."})
    } else{
        return response.status(400).send({message: "To Do não encontrado."})
    }
}