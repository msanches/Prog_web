$.getJSON("alunos.json", function(data){          
    console.log(data.alunos);
    for(let aluno of data.alunos){
        $("#lista").append(aluno.rgm + " - " + aluno.nome +  
                          ", " + aluno.idade + " anos<br>");
    } 
}); 