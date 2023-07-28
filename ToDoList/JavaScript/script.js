const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function(){
    if(tarefa.value == ""){
        alert("Digite alguma tarefa");
    } else {
        lista.innerHTML += (
            `<li>
                <i class="fas fa-check-circle check"></i>
                <span>${ tarefa.value }</span>
                <i class="fa-solid fa-trash-can close"></i>
            </li>`
        );
        tarefa.value = "";
    }

    const close = document.querySelectorAll(".close");
    /*for(const item of close){
        item.addEventListener("click", () => {
            item.parentElement.remove();
        });
    }*/

    /*for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", function(){
            close[i].parentElement.remove();
        });
    }*/

    close.forEach(item =>{
        item.addEventListener("click", function(){
            item.parentElement.remove();
        });
    })

    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".check").style.color = "#349223";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })
})