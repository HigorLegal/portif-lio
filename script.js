document.addEventListener("DOMContentLoaded", function () {
  const projetos = [
    {
      titulo: "calculadora",
      desc: "uma calculadora que eu fiz em utilizando java script, css e html ",
      img : ""
  
    },
  ];

  //buscar os elementos que você quer editar
  const projeto = document.getElementById("projetos");
  const listaProjetos = document.getElementById("listpro");

  var titulo = document.getElementById("titulo");
  var desc = document.getElementById("desc");
  var cont = document.getElementById("img");

  projetos.forEach((projeto) => {
    var elemento = document.createElement("li");
    var button = document.createElement("button");

    button.textContent = projeto.titulo;

    button.addEventListener("click", function () {
      titulo.textContent = projeto.titulo;
      desc.textContent = projeto.desc;
      cont.textContent = projeto.img;

      conteudoExibido.style.display = "block";
    });

    elemento.appendChild(button);
    listaProjetos.appendChild(elemento);
  });
});
