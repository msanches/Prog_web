//https://random-data-api.com/documentation
let url = " https://random-data-api.com/api/v2/users?size=10&is_xml=true";
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";        
        
        let dados = data;
        console.log(dados);
        dados.forEach(function(user,i){
              div.innerHTML += `<div class='item'>
                                <img src='${user.avatar}'>
                                <p>${user.first_name} ${user.last_name}</p>`;
          });      
    })
    .catch(function(error) {
        console.log(error);
    });