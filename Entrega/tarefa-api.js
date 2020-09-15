const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3001

app.listen(PORT, function () {
    console.log('Servidor funcionando')
})

const login = [
    {
        email: 'abcd@gmail.com',
        password: '123456',
    },
    {
        email: 'efgh@gmail.com',
        password: '123456',
    }
]

// usar somente o GET para retornar mensagem de login e senha reconhecidos

const listBooks = (request, response) => {

    return response.status(200).send(books)
}

const createBook = (request, response) => {
    const book = request.body
    console.log('BOOK', book)
    books.push(book)
    if (book.name && book.autor && book.id) {
        return response.status(201).send({ message: 'Livro cadastrado com sucesso!' })
    } else {
        return response.status(400).send({ mensage: 'Falta criar o body corretamente' })
    };

}

const deleteBook = (request, response) => {
    const id = request.params.id
    console.log('id', id)
    var isFoundBook = false;

    if (books.length > 0) {
        books.find((element, index) => {
            if (element.id == id) {
                isFoundBook = true
                books.splice(index, 1)
            }
        })
    }

    if (isFoundBook) {
        return response.status(201).send({ message: 'Livro deletado com sucesso!' })
    } else {
        return response.status(400).send({ message: 'Livro não encontrado' })
    }

}

const updateBook = (request, response) => {
    const id = request.params.id
    if (id) {
        return response.status(201).send({ message: 'Livro atualizado com sucesso!' })
    } else {
        return response.status(400).send({ message: 'Falta enviar ID na URL' })
    }
}

app.get('/book', listBooks)

app.post('/book', createBook)

app.delete('/book/:id', deleteBook)

app.put('/book/:id', updateBook)