function mostraDados(){
    let msg = "";
    msg += "Login: " + document.getElementById("login").value+" | ";
    msg += "Senha: " + document.getElementById("senha").value;
    alert(msg);
    document.write(msg);
}

window.onload = function(){
    document.getElementById("btn").onclick = function(){
        mostraDados();
    }
}