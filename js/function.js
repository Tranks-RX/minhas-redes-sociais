document.addEventListener("DOMContentLoaded", function () {
    // Referência ao link "Projetos" e à seção de projetos
    var linkProjetos = document.getElementById("mostrarProjetos");
    var secaoProjetos = document.getElementById("projetos");

    // Adiciona um evento de clique ao link "Projetos"
    linkProjetos.addEventListener("click", function (event) {
        // Evita que o link execute o comportamento padrão de redirecionar para outra página
        event.preventDefault();

        // Se a seção de projetos estiver visível, oculta-a; caso contrário, mostra-a
        if (secaoProjetos.style.display === "block") {
            secaoProjetos.style.display = "none";
        } else {
            secaoProjetos.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var linkProjetos = document.getElementById("mostrarProjetos");
    var secaoProjetos = document.getElementById("projetos");
  
    linkProjetos.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Adiciona a classe "comMargemTop" à div com a classe "fundo" quando o link "Projetos" é clicado
      document.querySelector(".fundo").classList.toggle("comMargemTop");
  
      // Adiciona ou remove a classe "mostrar" da seção de projetos quando o link "Projetos" é clicado
      secaoProjetos.classList.toggle("mostrar");
    });
  });