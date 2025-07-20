document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;
  if (pageTitle === "Galería - Mi Galería") {
    configurarGaleria();
  }
  if (pageTitle === "Sobre Nosotros") {
    configurarFormulario();
  }
  if (pageTitle === "Inicio - Mi Galería") {
    console.log("Página de inicio cargada.");
  }
});
function configurarGaleria() {
  console.log("Configurando galería...");
  const filtrarCategoria = (categoria) => {
    const imagenes = document.querySelectorAll("#contenedor-imagenes .col-md-4");
    imagenes.forEach((imagen) => {
      if (categoria === "todo") {
        imagen.classList.remove("d-none");
      } else {
        if (imagen.classList.contains(categoria)) {
          imagen.classList.remove("d-none");
        } else {
          imagen.classList.add("d-none");
        }
      }
    });
  };
  document.querySelectorAll(".btn").forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("onclick").match(/'(.+?)'/)[1];
      filtrarCategoria(categoria);
    });
  });
  window.verDetalle = (imagen, titulo, descripcion) => {
    document.getElementById("modalImagen").src = `assets/images/${imagen}`;
    document.getElementById("detalleModalLabel").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;

    const modal = new bootstrap.Modal(document.getElementById("detalleModal"));
    modal.show();
  };
}
function configurarFormulario() {
  console.log("Configurando formulario...");

  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    mostrarToastExito();
  });
}
function mostrarToastExito() {
  const toastExito = new bootstrap.Toast(document.getElementById("toastExito"));
  toastExito.show();
  setTimeout(() => {
    toastExito.hide();
  }, 5000);
}