$("#button1").click(gravarDados);
$("#button2").click(carregarDados);
$("#button3").click(apagarDados);

function gravarDados() {
  localStorage.setItem("rgm", $("#rgm").val());
  localStorage.setItem("nome", $("#nome").val());
  localStorage.setItem("curso", $("#curso").val());
  alert("Dados gravados");
  limparCampos();
}

function carregarDados() {
  if (localStorage.length > 0) {
    $("#rgm").val(localStorage.getItem("rgm"));
    $("#nome").val(localStorage.getItem("nome"));
    $("#curso").val(localStorage.getItem("curso"));
  } else {
    alert("Nenhum registro encontrado");
  }
}

function apagarDados() {
  if (localStorage.length > 0) {
    localStorage.clear();
  } else {
    alert("Nenhum registro encontrado");
  }
  limparCampos();
}

function limparCampos() {
  $("#rgm").val("");
  $("#curso").val("");
  $("#nome").val("");
}
