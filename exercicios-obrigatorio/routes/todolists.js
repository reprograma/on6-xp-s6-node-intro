const toDoLists_db = require('../database/todolists_db');
const { toDoLists } = toDoLists_db;

const showToDoLists = (request, response) => {
    return response.status(200).send(toDoLists);
}

const createToDoList = (request, response) => {
    const toDoList = request.body;
    if(toDoList.title){
        toDoLists.push(toDoList);
        return response.status(201).send({ message :  'To-Do List criada com sucesso!'});
    } else {
        return response.status(400).send ({ message : ' Esqueceu de criar um título!'});
    }
}

const editToDoList = (request, response) => {
    const title = request.params.title;
    const toDoList = request.body;
    isTitleValid = false;
    if(toDoLists.length > 0){
        toDoLists.find(element => {
           if (element.title === title){
               element.title = toDoList.title;
               element.text = toDoList.text;
               isTitleValid = true;
           }
        });
    }

    if(isTitleValid){
        return response.status(201).send({ message :  'To-Do List editada com sucesso!'});
    } else {
        return response.status(400).send({ message :  'To-Do List não existe!'})
    }
}

module.exports = {
    showToDoLists,
    createToDoList,
    editToDoList
}