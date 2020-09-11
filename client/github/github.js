async function getReposGitHub(user) {
   

    let response = await fetch(
      "https://api.github.com/users/"+user+"/repos",{
        method : 'GET'
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let data = await response.json();
      return data
    }
  }
  
  
  getReposGitHub('LeticiaSoares').then(data =>{
    
    console.log('REPOS',data)

    data.map((item)=>{
      document.getElementById("app").innerHTML +=  "<p>"+ item.name + "</p>"
    })

  }); 


