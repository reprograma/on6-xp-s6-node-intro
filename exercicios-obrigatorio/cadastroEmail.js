//importar o express
const express = require('express')

//"pegar o body e dar um PArse para JSON"
const bodyParser = require('body-parser')

//criar a variável APP que usa Express para iniciar nosso servidor
const app = express();

app.use(bodyParser.json())

//subindo nosso servidor
//definindo uma porta
//PORT é uma variável para definir uma porta para subir a aplicação
const PORT = 8080

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "*");
    res.header("Acess-Control-Allow-Methods", "*");
    next();

});

//pegar o app com o comando .listen e subir o servidor
//o listen recebe dois parametros
const listenFunction = () => console.log('servidor funcionando')

app.listen(PORT,listenFunction)


//criando a primeira API que vai retornar dados = GET
//URL com cadastro de livreos
 const cadastros = [
        {
            nome: "Camila",
            email:"camila1@gmail.com",
            senha: "12345",
            id:"1"
        }
    ]

        const listarCadastro = (request, response)=>{
        return response.status(200).send(cadastros)
    }
//quando a gente manda um POST, a gente manda o que a gente quer salvar
const criarCadastros = (request, response) =>{
    const cadastro = request.body
    console.log('CADASTRO', cadastro)
    cadastros.push(cadastro)

    //validação nome do livro (Sempre mandar o nome do livro)
    if(cadastro.nome && cadastro.email && cadastro.senha && cadastro.id){
        return response.status(201).send({message: 'Login realizado com sucesso'})
    }else{
        return response.status(400).send({message: 'Falta enviar o body corretamente'})
    } 
}


const deletarCadastro = (request, response) =>{
    const id = request.params.id
    console.log('id', id)
    const isFoundCadastro = false
    cadastros.find((element, index)=>{
          if(element.id == id){
            isFoundcadastro = true
            cadastros.splice(index, 1)

            if (id) {
                return response.status(201).send({message: 'Cadastro excluído com sucesso'})
            }else{
                return response.status(400).send({message: 'Cadastro não encontrado'})
            }
        }
    })
}


     

const updateCadastro = (request, response) =>{
    const id = request.params.id
    if(id){
        return response.status(201).send({message: 'Cadastro excluido com sucesso'})
    }else{
        return response.status(400).send({message: 'Falta enviar o id na url'})
    }
}
//pegar o dado
app.get("/cadastro", listarCadastro)

// POST para mandar dados para o servidor
app.post('/cadastro', criarCadastros)

//API de deletar 
app.delete('/cadastro/:id', deletarCadastro)


//atualizar um dado
app.put('/cadastro/:id', updateCadastro)
