const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

app.post('/user', users.login)