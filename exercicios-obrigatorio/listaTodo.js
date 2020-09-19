

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




app.get('/lista', criarListas)