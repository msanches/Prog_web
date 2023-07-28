let i = 1;
    $(function () {
      tvmaze(i);
      $("#go").click(function () {
        i++;
        tvmaze(i);
      });
      $("#back").click(function () {
        if (i >= 2) i--;
        else i = 1;
        tvmaze(i);
      });
    });
    function tvmaze(i) {
      $.get({
        url: "https://api.tvmaze.com/shows/" + i, success: function (result) {
          console.log(result);
          $("#titulo").html(result.name);
          $("#descricao").html(result.summary);
          $("#imagem").attr("src", result.image.medium);
        }
      });
    }