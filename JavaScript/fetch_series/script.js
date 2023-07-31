let index = 1;
const container = document.querySelector(".series");

const tvMaze = (index) => {
  fetch("https://api.tvmaze.com/shows/" + index)
  .then(response => response.json())
  .then(data => {
      const html = `<h2 id="titulo">${data.name}</h2>
                    <div class="conteudo">
                      <img class="imagem" src="${data.image.medium}" alt="">
                      <div class="descricao">${data.summary}</div>
                    </div>`
      container.innerHTML = html;
  })
  .catch(err => console.error(err));
}

go.onclick = () => {
  index++;
  tvMaze(index);
}

back.onclick = () => {
  if(index > 1){index--}
  tvMaze(index);
}

tvMaze(index);