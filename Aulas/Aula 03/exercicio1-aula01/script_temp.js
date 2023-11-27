$.getJSON("medalhas.json", function(data){   
    console.log(data.medalhas);  
    for(let pais of data.medalhas){
        $("#quadro").append("<li>" + pais.pos + "- " + pais.nome);
    } 
}); 