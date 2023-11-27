$.getJSON("medalhas.json", function(data){     
    console.log(data.medalhas);     
    for(let pais of data.medalhas){
        $("#quadro").append("<tr><td>" + pais.pos + 
                        "</td><td><img src='img/" + 
                         pais.nome.substr(0,3).toUpperCase() + ".svg'>"+ 
                         pais.nome + "</td>" + 
                        "<td>"+ pais.ouro + "</td>" +
                        "</td><td>"+ pais.prata + "</td>" +
                        "</td><td>"+ pais.bronze + "</td>" + 
                        "</td><td>"+ pais.total + "</td></tr>");
    } 
}); 