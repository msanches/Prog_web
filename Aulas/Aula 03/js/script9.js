let url = "alunos.json";
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";
        let alunos = (data.alunos);
        console.log(alunos);
        alunos.forEach(function(aluno){
            div.innerHTML += `RGM: ${aluno.rgm} - 
                            <b>Nome:</b> ${aluno.nome}<br>`;
        });      
    })
    .catch(function(error) {
        console.log(error);
    });
