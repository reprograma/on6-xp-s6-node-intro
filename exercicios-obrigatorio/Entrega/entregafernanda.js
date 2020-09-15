
const express = require('express')

const app = express();

const PORT = 5000

function listenFunction(){
    console.log('Servidor funcionando:hello')
}

app.listen(PORT, listenFunction)