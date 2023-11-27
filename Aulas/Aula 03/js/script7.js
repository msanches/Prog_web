let div = document.querySelector("#menu");
for(let opc of opcoes){
    div.innerHTML += `${opc.id} - ${opc.nome}<br>`;
} 