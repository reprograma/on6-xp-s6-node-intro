

const express = require('express')


const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())


const PORT = 8080

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "*");
    res.header("Acess-Control-Allow-Methods", "*");
    next();

});


const listenFunction = () => console.log('servidor funcionando')

app.listen(PORT,listenFunction)



 const listas = [
        {
            titulo: "Camila",
            texto:"camila1@gmail.com",
            id:"1"
        }
    ]

        const listarListas = (request, response)=>{
        return response.status(200).send(listas)
    }

const criarListas = (request, response) =>{
    const lista = request.body
    console.log('LISTA', lista)
    listas.push(lista)

    
    if(lista.titulo && lista.texto &&  lista.id){
        return response.status(201).send({message: 'Lista criada com sucesso'})
    }else{
        return response.status(400).send({message: 'Falta enviar o body corretamente'})
    } 
}


const deletarListas = (request, response) =>{
    const id = request.params.id
    console.log('id', id)
    const isFoundLista = false
    listas.find((element, index)=>{
          if(element.id == id){
            isFoundLista = true
            listas.splice(index, 1)

            if (id) {
                return response.status(201).send({message: 'Lista excluída com sucesso'})
            }else{
                return response.status(400).send({message: 'Lista não encontrada'})
            }
        }
    })
}


     

const updateListas = (request, response) =>{
    const id = request.params.id
    if(id){
        return response.status(201).send({message: 'lista excluida com sucesso'})
    }else{
        return response.status(400).send({message: 'Falta enviar o id na url'})
    }
}
//pegar o dado
app.get("/lista", listarListas)

// POST para mandar dados para o servidor
app.post('/lista', criarListas)

//API de deletar 
app.delete('/lista/:id', deletarListas)


//atualizar um dado
app.put('/lista/:id', updateListas)
