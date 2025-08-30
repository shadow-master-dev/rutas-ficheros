    <script>
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const triggers = document.querySelectorAll(".nav-link, .btn"); // enlaces del nav + botones

  // ocultar siempre al cargar
  loader.classList.remove("show");

  triggers.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      // solo activar loader si el enlace tiene destino válido
      if (href && href !== "#") {
        e.preventDefault();
        loader.classList.add("show");

        setTimeout(() => {
          window.location.href = href;
        }, 1500); // tiempo antes de navegar
      }
    });
  });
});


    </script>
