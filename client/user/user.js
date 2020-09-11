async function loginUser() {

  var userName = document.getElementById('userName').value
  var password = document.getElementById('password').value

  var body = {
    userName : userName,
    password: password
  }

  let response = await fetch(
    "http://localhost:3001/user/LeticiaSoares",{
      method : 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
  
  function loginClick(){
    loginUser()
    .then(data =>{
      console.log('LOGIN',data)
      document.getElementById("app").innerHTML +=  "<p>"+ data.msg + "</p>"
    
    }); 
  }
  
  