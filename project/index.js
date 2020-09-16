const express = require('express') // O express facilita a criação de APis com o Nodejs
const bodyParser = require('body-parser'); // BodyPArser é uma peça de middleware expresso que 
                                          //lê a entrada de um formulário e armazena-o como um objecto javascript 

const app = express(); // iniciar o nosso servidor

app.use(bodyParser.json())

const PORT = 3001 // escolher uma porta do servidor

const listenFunction = () => console.log('Serve Listen in port:'+PORT) 


app.listen(PORT,listenFunction) // aqui a gente vai subir o nosso servidor

const books = [
    {
        name : 'Harry Potter',
        autor : 'JK',
        id : 1
    }
]


const listBooks = (request, response)=>{
    return response.status(200).send(books) // response retorna o status do que ele solicitou 
}                                          // ele retorna um código de erro ou sucesso
const createBook = (request,response)=>{
    const book = request.body
    console.log('BOOK',book)
    books.push(book)
    if(book.name && book.autor && book.id){
        return response.status(201).send({ message :  'Livro Cadastrado com Sucesso!'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar o body corretamente'})
    }
}

const deleteBook = (request, response)=>{
    const id = request.params.id
    console.log('id',id)
    var isFoundBook = false;
    if(books.length > 0){
        books.find((element,index)=>{
            if(element.id == id){
                isFoundBook = true
                books.splice(index,1)
            }
        })
    }

    if(isFoundBook){
        return response.status(201).send({ message: "Livro excluido com Sucesso"})
    }else{
        return response.status(400).send ({ message : 'Livro não encontrado'})
    }
}

const updateBook = (request, response) =>{
    const id = request.params.id
    if(id){
        return response.status(201).send({ message : 'Livro excluido com Sucesso'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar Id na url'})
    }
}

app.get('/book',listBooks)

app.post('/book',createBook)

app.delete('/book/:id',deleteBook)

app.put('/book/:id',updateBook)



