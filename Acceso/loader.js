    <script>
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const triggers = document.querySelectorAll(".menu-trigger");

  // 🔹 por seguridad: ocultar siempre al cargar
  loader.classList.remove("show");

  triggers.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      loader.classList.add("show");

      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 1800);
    });
  });
});

    </script>
