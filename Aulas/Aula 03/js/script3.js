var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let bolinha={
    cor: "red",
    x: Math.round(Math.random()*500),
    y: Math.round(Math.random()*500),
    raio: 20,
}

function desenhar(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	ctx.beginPath();
	ctx.arc(bolinha.x, bolinha.y, bolinha.raio, 0, 2 * Math.PI);
	ctx.fillStyle = bolinha.cor;
	ctx.fill();
}

setTimeout(desenhar, 500);
