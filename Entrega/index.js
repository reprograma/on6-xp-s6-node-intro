const express = require("express");
const project = require("./project");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 3001;

const listenFunction = () => console.log(`Servidor funcionando na porta: ${PORT}!`);

//sobe o servidor
app.listen(PORT, listenFunction);

app.post("/login", project.telaDeLogin); //faz logins
app.post("/cadastro", project.telaDeCadastro); //cadastra novo usuario
app.post("/cadastrotodo", project.cadastroTODOList); //cadastra nova TODO list
app.get("/todo", project.TODOlist); //lista a TODO list