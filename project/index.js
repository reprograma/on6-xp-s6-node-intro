//lib que facilita a abstração de rota, gerencia requisições http
const express = require('express')

const bodyParser = require('body-parser');

//variável para usar o express
const app = express();

//para o express entender que é no formato json
app.use(bodyParser.json())

//porta que será usada
const PORT = 3001

const listenFunction = () => console.log('Serve Listen in port:'+PORT)

//ligando o servidor
app.listen(PORT,listenFunction)

const books = [
    {
        name : 'Harry Potter',
        autor : 'JK',
        id : 1
    }
]


//sempre dois parâmetros. 
const listBooks = (request, response)=>{
    return response.status(200).send(books)
}
const createBook = (request,response)=>{
    const book = request.body //para conseguir mandar dados
    console.log('BOOK',book)
    books.push(book)
    if(book.name && book.autor && book.id){
        return response.status(201).send({ message :  'Livro Cadastrado com Sucesso!'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar o body corretamente'})
    }
}

const deleteBook = (request, response)=>{
    const id = request.params.id //enviar o id pela url
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
    console.log(id)
    if(id){
        return response.status(201).send({ message : 'Livro alterado com Sucesso'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar Id na url'})
    }
}

app.get('/book',listBooks)

app.post('/book',createBook)

app.delete('/book/:id',deleteBook)

app.put('/book/:id',updateBook)



