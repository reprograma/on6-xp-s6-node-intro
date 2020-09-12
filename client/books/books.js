async function createBook() {
    
    var name = document.getElementById('name').value
    var autor = document.getElementById('autor').value
    var body = {
      name : name,
      autor: autor
    }
    console.log('body',body)

    let response = await fetch(
      "http://localhost:3001/books",{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic LeticiaSoares'
        },
        body : JSON.stringify(body)
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let data = await response.json();
      return data
    }
}

async function removeBook() {
  var name = document.getElementById('name').value
  console.log('name',name)
  var body = {
    name : name
  }
  console.log('body',body)
  let response = await fetch(
    "http://localhost:3001/books/2",{
      method : 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'LeticiaSoares'
      },
      body : JSON.stringify(body)
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let data = await response.json();
    return data
  }
}

async function listBooks() {

  let response = await fetch(
    "http://localhost:3001/books",{
      method : 'GET',
      headers: {
        'Authorization': 'Basic LeticiaSoares'
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let data = await response.json();
    return data
  }
}

  
function createBookClick(){

  createBook().then(data =>{
    console.log('createBook',data)
    
    document.getElementById("mensagens").innerHTML = data.msg
  }); 

}

function listBooksClick(){

  var html = ''

  listBooks().then(data =>{

    console.log('LIST BOOK',data)

    data.books.map((item)=>{

     
      html += "<tr>"
      html += "<td>" + item.name + "</td>"
      html += "<td>" + item.autor + "</td>"
      html += "</tr>"

    })

    document.getElementById("books").innerHTML = html
  }); 
}
 
function removeBookClick(){

  removeBook().then(data =>{
    console.log('removeBookClick',data)
    
    document.getElementById("mensagens").innerHTML = data.msg
  }); 

}

  
  
  