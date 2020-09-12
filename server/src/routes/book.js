
const books = [
   {
      name : 'Harry Potter',
      autor : 'JK',
      id : 1
   },
   {
      name : 'Crespuculo',
      autor : 'Sthepenie',
      id : 2
   },
 ]

const user = [
   {
      name : 'LeticiaSoares',
      password : '123'
   }
]
var id = 3;

function create(request, response) {
    try {
        const book = request.body
        console.log('request',book)
        book.id = id++ //id = id + 1
        books.push(book)
        console.log('BOOK',books)
        return response.status(201).send({msg:"Livro Cadastrado com Sucesso"});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function update(request, response) {
    try {
        const user = request.body
        console.log('user',user)
        return response.status(201).send({msg:"Cadastro Atualizado com Sucesso"});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function remove(request,response) {
    try {
        const bookId = request.params.id
        var isRemoved = false;
        books && books.find((element, index)=>{
           console.log('item',element)
           if(element && element.id === parseInt(bookId)){
            books.splice(index, 1);
            isRemoved = true
           }
        })
        if(isRemoved){
            return response.status(201).send({msg:"Livro Removido com Suceso!"});
        }else{
         return response.status(404).send({msg:"Livro Não Cadastrado!"});
        }
     }
     catch (e) {
        console.log('e',e)
        return response.status(500).send({error : 'Erro Interno'})
     }

}

function list(request, response) {
    try {
        var params = request.query.editora
        console.log('params',params)
        return response.status(200).send({books});
     }
     catch (e) {
        return response.status(500).send({error : 'Erro Interno'})
     }

}


function login(request, response) {
   try {

       const userBody = request.body
       if(userBody.name ==  userBody.name && userBody.password == user.password){
        return response.status(200).send({msg:"Login Realizado com Sucesso"});
       }else{
        return response.status(404).send({msg:"Login Não Econtrado"});
       }

    }
    catch (e) {
       console.log(e)
       return response.status(500).send({error : 'Erro Interno'})
    }

}

module.exports = {
    create,
    update,
    remove,
    list,
    login
}

