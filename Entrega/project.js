//cria API que retorna dados
const logins = [
    {
        email: "teste@gmail.com",
        password: "teste12345"
    },
    {
        email: "teste1@gmail.com",
        password: "teste54321"
    }
];

const telaDeLogin = (request, response) => {
    const login = request.body;
    console.log("LOGIN", login);
    
    logins.push(login);

    //validando as informações recebidas 
    if(login.email && login.password){
        return response.status(201).send({message: "Login feito com sucesso!"});
    }else{
        return response.status(400).send({message: "Falta enviar o body corretamente!"});
    }

}

const cadastros = [
    {
        nome: "Teste",
        email: "teste@gmail.com",
        password: "teste12345"
    },
    {
        nome: "Teste 1",
        email: "teste1@gmail.com",
        password: "teste54321"
    }
];

const telaDeCadastro = (request, response) => {
    const cadastro = request.body;
    console.log("CADASTRO", cadastro);
    
    cadastros.push(cadastro);

    //validando as informações recebidas 
    if(cadastro.nome && cadastro.email && cadastro.password){
        return response.status(201).send({message: "Cadastro feito com sucesso!"});
    }else{
        return response.status(400).send({message: "Falta enviar o body corretamente!"});
    }

}

const listTODO = [
    {
        titulo: "Aula Reprograma - Sábado",
        texto: "Aula do curso de backend da {Reprograma}, no sábado das 09:00 às 17:00 horas."
    },
    {
        titulo: "Aula Reprograma - Quarta",
        texto: "Aula do curso de backend da {Reprograma}, na quarta das 20:00 às 22:00 horas."
    }
];

const cadastroTODOList = (request, response) => {
    const cadastroTODO = request.body;
    console.log("CADASTRO TODO LIST", cadastroTODO);
    
    listTODO.push(cadastroTODO);

    //validando as informações recebidas 
    if(cadastroTODO.titulo && cadastroTODO.texto){
        return response.status(201).send({message: "TODO cadastrada com sucesso!"});
    }else{
        return response.status(400).send({message: "Falta enviar o body corretamente!"});
    }

}

const TODOlist = (request, response) => {
    
    //retorna a lista de TODO'S
    return response.status(200).send(listTODO);
};

module.exports = {
    telaDeLogin,
    telaDeCadastro,
    cadastroTODOList,
    TODOlist
};
