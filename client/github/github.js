// function getReposGitHub(user) {
   

//     let response =  fetch(
//       "https://api.github.com/users/"+user+"/repos",{
//         method : 'GET'
//       }
//     );
  
//     console.log('response',response)
//     // if (!response.ok) {
//     //   throw new Error(`HTTP error! status: ${response.status}`);
//     // } else {
//     //   let data = response.json();
//     //   return data
//     // }
//   }
  
  
//   getReposGitHub('LeticiaSoares').then(data =>{
    
//     console.log('REPOS',data)

//     data.map((item)=>{
//       document.getElementById("app").innerHTML +=  "<p>"+ item.name + "</p>"
//     })

//   }); 


  // function get(url) {
  //   // Return a new promise.
  //   return new Promise(function(resolve, reject) {
  //     // Do the usual XHR stuff
  //     var req = new XMLHttpRequest();
  //     req.open('GET', url);
  
  //     req.onload = function() {
  //       // This is called even on 404 etc
  //       // so check the status
  //       if (req.status == 200) {
  //         // Resolve the promise with the response text
  //         resolve(req.response);
  //       }
  //       else {
  //         // Otherwise reject with the status text
  //         // which will hopefully be a meaningful error
  //         reject(Error(req.statusText));
  //       }
  //     };
  
  //     // Handle network errors
  //     req.onerror = function() {
  //       reject(Error("Network Error"));
  //     };
  
  //     // Make the request
  //     req.send();
  //   });
  // }


  // 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.github.com/users/LeticiaSoares/repos',true);

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response} bytes`); // response is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};