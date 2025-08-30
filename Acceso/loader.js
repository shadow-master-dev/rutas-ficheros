// ===== FUNCIONES =====
function mostrarLoader() {
  document.getElementById("page-loader").classList.add("show");
}

function ocultarLoader() {
  document.getElementById("page-loader").classList.remove("show");
}

// ===== EVENTOS =====
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {
    const url = this.getAttribute("href");
    if(url && url !== "#"){
      e.preventDefault();
      mostrarLoader();
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
    }
  });
});

// Ocultar loader al cargar página
window.addEventListener("load", () => {
  ocultarLoader();
});
