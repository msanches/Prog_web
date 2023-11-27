//https://fakestoreapi.com/
let url = " https://fakestoreapi.com/products";
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";        
        
        let dados = data;
        console.log(dados);
        dados.forEach(function(item){
              div.innerHTML += `<div class='item'>
                                <h1>${item.title}</h1>
                                <img src='${item.image}'>
                                <p>Price: US$ ${item.price}</p>`;
          });      
    })
    .catch(function(error) {
        console.log(error);
    });