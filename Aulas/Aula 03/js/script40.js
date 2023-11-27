function Pessoa(nome, altura, idade){
    this.nome = nome,
    this.altura = altura,
    this.idade = idade,
    this.exibir = function(){
        return `<li>Nome: ${this.nome}, Idade: ${this.idade}</li>`;
    }
}

let pessoa1 = new Pessoa("Marco", 1.74, 54);
let pessoa2 = new Pessoa("Maria Eduarda", 1.68, 30);
let pessoas = [pessoa1, pessoa2];

function listar(){
    let campo = document.querySelector("#rel_pessoas");
    let texto = "<ul>";
    
    for (let p of pessoas){
        texto += p.exibir();
    }
    campo.innerHTML += texto + "</ul>";
    //ou
    /*
    for (let i=0; i < pessoas.length;i++){
            texto += `<li>Nome: ${p.nome}, Idade: ${p.idade}</li>`;
    }
    */
}

listar();
