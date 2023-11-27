window.onload = function(){
    let btn = document.querySelector("#botao");
    let res = document.querySelector(".resultado");
    btn.onclick = function (){
        let n1 = Number(document.querySelector("#nota1").value);
        let n2 = Number(document.querySelector("#nota2").value);
        let n3 = Number(document.querySelector("#nota3").value);
        let media = (n1 + n2 + n3) /3 ;
        let resultado = ""
        if(media >= 6)
            resultado = "Aprovado";
        else if(media >= 3)
            resultado = "Exame"
        else
            resultado = "Reprovado";
        res.style.display = "block";
        //res.innerHTML = "Média = " + media + " <br> " + resultado;
        res.innerHTML = `Média = ${media.toFixed(2)} <br> Resultado: ${resultado}`;
    }
}