function mostraDados(){
    let msg = "";
    msg += "Login: " + document.querySelector("#login").value +" | ";
    msg += "Senha: " + document.querySelector("#senha").value;
    alert(msg);
    document.write(msg);
}

window.onload = function(){
    document.querySelector("#btn").onclick = function(){
        mostraDados();
    }
}