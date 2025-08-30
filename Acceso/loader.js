    <script>
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const triggers = document.querySelectorAll(".menu-trigger");

  triggers.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evitar salto inmediato
      loader.classList.add("show");

      // Simulación de espera antes de ir al link real
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 1800); // 1.8s con animación elegante
    });
  });
});

    </script>
