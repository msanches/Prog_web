function alteraTamanho(){
	texto.style.fontSize = document.querySelector("#tam").value+"pt";
}

function mudaCor(cor){
	texto.style.color = cor;
}

function mudaFundo(cor){
	texto.style.backgroundColor = cor;
}

const texto = document.querySelector("#texto");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
						
btn1.addEventListener("click",alteraTamanho);

btn2.addEventListener("click",function(){
	mudaCor('red');
});
    
btn3.addEventListener("click",function(){
	mudaCor('blue');
});

btn4.addEventListener("click",function(){
	mudaFundo('black');
});

btn5.addEventListener("click",function(){
	mudaFundo('yellow');
});

btn6.addEventListener("click", function(){
	texto.style.width = document.querySelector("#comp").value;
});