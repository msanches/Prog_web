function Pessoa(nome, altura, idade){
    this.nome = nome,
    this.altura = altura,
    this.idade = idade,
    this.exibir = function(){
        console.log(`Nome: ${this.nome} - idade: ${this.idade}`);
    }
}

let pessoa1 = new Pessoa("Marco", 1.74, 54);
let pessoa2 = new Pessoa("Maria Eduarda", 1.68, 30);

let pessoas = [pessoa1, pessoa2];
for(p of pessoas){
    p.exibir();
}