function alteraTitulo(){
	const titulo = document.querySelector("#tit");
	const valor = document.querySelector("#titulo").value;
	titulo.innerHTML = valor;
}

function criaTabela(){
	const linhas = document.querySelector("#linha").value
	const colunas = document.querySelector("#coluna").value
	let conteudo="";
	conteudo += "<table border='1'>";
	for (let i=1;i<=linhas;i++){
		conteudo += "<tr>";
		for (let j=1; j<=colunas;j++){
			conteudo += "<td>Linha: "+i+" - Coluna:" + j +"</td>";
		}			
		conteudo += "</tr>";
	}	
	conteudo += "</table>";
	document.querySelector("#tab").innerHTML=conteudo;
}

let btn1 = document.querySelector("#button");
let btn2 = document.querySelector("#button2");
btn1.onclick = alteraTitulo;
btn2.onclick =  criaTabela;
