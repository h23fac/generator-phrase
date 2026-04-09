const boton = document.getElementById("btnAgregar");
const input = document.getElementById("inputFrase");
const lista = document.getElementById("listaFrase");

boton.addEventListener("click", function () {
  const texto = input.value;
  if (texto === "") {
    alert("Escribe algo");
    return;
  }
  // li + span
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;
  li.appendChild(span);

  // botones
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "🗑️";

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "✏️";

  const btnFavorito = document.createElement("button");
  btnFavorito.textContent = "⭐";

  // Eventos
  // editar
  btnEditar.addEventListener("click", function () {
    const nuevoTexto = prompt("Edita tu Frase:", span.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      span.textContent = nuevoTexto;
    }
  });

  // eliminar
  btnEliminar.addEventListener("click", function () {
    li.remove();
  });

  // favorito
  btnFavorito.addEventListener("click", function () {
    li.classList.toggle("favorita");
  });

  //agregar botones a li
  li.appendChild(btnEditar);
  li.appendChild(btnEliminar);
  li.appendChild(btnFavorito);

  lista.appendChild(li);
  input.value = "";
});

const buscador = document.getElementById("busqueda");

buscador.addEventListener("input", function () {
  const textoBusqueda = buscador.value.toLowerCase();

  const items = lista.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const texto = items[i].querySelector("span").textContent.toLowerCase();

    if (texto.includes(textoBusqueda)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});
