
const books = [
   {
      name : 'Harry Potter',
      autor : 'JK'
   },
 ]

function create(req, response) {
    try {
        const book = req.body
        console.log('req',book)
        books.push(book)
        console.log('BOOK',books)
        return response.status(201).send({msg:"Livro Cadastrado com Sucesso"});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function update(req, response) {
    try {
        const user = req.body
        console.log('user',user)
        return response.status(201).send({msg:"Cadastro Atualizado com Sucesso"});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function remove(req, response) {
    try {
        const header = req.headers.authorization
        console.log('user',user)
    
        return response.status(201).send({msg:"Livro Removid com Suceso com Sucesso"});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function list(req, response) {
    try {
         // var books = [
         //    {
         //       name : "Torre Negra",
         //       autor : 'Stephen'
         //    },
         //    {
         //       name : 'Iluminado',
         //       autor : 'Stephen'      
         //    },
         //    {
         //       name : 'Harry Potter',
         //       autor : 'Rk'
         //    }
         // ]
      
        return response.status(200).send({books});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}
module.exports = {
    create,
    update,
    remove,
    list
}

