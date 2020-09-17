const express = require('express')
const books = require('./books')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 3001

const listenFunction = () => console.log('Serve Listen in port:'+PORT)


app.listen(PORT,listenFunction)

app.get('/book',books.listBooks)

app.post('/book',books.createBook)

app.delete('/book/:id',books.deleteBook)

app.put('/book/:id',books.updateBook)

