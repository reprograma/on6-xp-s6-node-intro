const books = [
    {
        name : 'Harry Potter',
        autor : 'JK',
        id : 1
    },
    {
        name : 'Lua Nova',
        autor : 'Sthe',
        id : 2
    }
]

const listBooks = (request, response)=>{
    return response.status(200).send(books)
}

const createBook = (request,response)=>{
    const book = request.body
    console.log('BOOK',book)
    books.push(book)
    if(book.name && book.autor && book.id){
        return response.status(201).send({ message :  'Livro Cadastrado com Sucesso!'})
    }else{
        return response.status(400).send ({ message : 'Falta dados do livro'})
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
        return response.status(201).send({ message : 'Livro Atualizado com Sucesso'})
    }else{
        return response.status(400).send ({ message : 'Falta enviar Id na url'})
    }
}

module.exports = {
    listBooks,
    createBook,
    updateBook,
    deleteBook
}