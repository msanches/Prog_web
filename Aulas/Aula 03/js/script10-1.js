//https://reqres.in/
let url = " https://reqres.in/api/users?page=2";
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";        
        
        let dados = data.data;
        console.log(dados);
        dados.forEach(function(user){
              div.innerHTML += `<div class='item'>
                                <img src='${user.avatar}'>
                                <p>${user.first_name} ${user.last_name}</p>`;
          });      
    })
    .catch(function(error) {
        console.log(error);
    });