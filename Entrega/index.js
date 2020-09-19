const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Servidor funcionando");
});

//Atividade 1 : Tela de Login

const dadosLogin = [
  {
    email: "teste",
    password: "teste@teste.com.br",
  },
];

const newLogin = (request, response) => {
  const login = request.body;
  console.log("LOGIN", login);
  if (login.email && login.password) {
    dadosLogin.push(login);
    return response.status(201).send({ message: "Seja bem vindo!" });
  } else {
    return response
      .status(401)
      .send({ mensage: "Digite seus dados corretamente" });
  }
};

//Atividade 2 : Tela de Cadastro

const newUser = [
  {
    name: "teste",
    email: "teste@teste.com.br",
    password: "teste",
  },
];

const createUser = (request, response) => {
  const login = request.body;
  console.log("NEWUSER", login);
  if (login.name && login.email && login.password) {
    newUser.push(login);
    return response
      .status(201)
      .send({ message: "Usuário cadastrado com sucesso!" });
  } else {
    return response
      .status(400)
      .send({ mensage: "Faltam dados, informe todos os campos." });
  }
};


//Atividade 3 : TODO List

const toDoList = [
  {
    título: "teste dos testes",
    texto: "teste teste teste teste",
  },
];

const listAll = (request, response) => {
  return response.status(200).send(toDoList);
};

const newNote = (request, response) => {
  const newData = request.body;
  console.log("TITULO", toDoList);
  toDoList.push(newData);
  if (toDoList.titulo && toDoList.texto) {
    return response
      .status(201)
      .send({ message: "Nova lista cadastrado com sucesso!" });
  } else {
    return response
      .status(400)
      .send({ mensage: "Preencha o título e a descrição" });
  }
};

const updateNote = (request, response) => {
  const titulo = request.params.titulo;
  if (titulo) {
    return response
      .status(201)
      .send({ message: "Nota atualizada com sucesso!" });
  } else {
    return response
      .status(400)
      .send({ message: "Insira um título correto na URL." });
  }
};

//API's:

app.post("/login", newLogin);

app.post("/newLogin", createUser);

app.get("/toDoList", listAll);

app.post("/toDoList", newNote);

app.put("/toDoList/:titulo", updateNote);
