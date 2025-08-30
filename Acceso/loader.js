    <script>
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const triggers = document.querySelectorAll(".menu-trigger");

  triggers.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Evita redirección inmediata
      const url = link.getAttribute("href");

      // Mostrar loader
      loader.classList.add("show");

      // Simular espera antes de ir al link real
      setTimeout(() => {
        window.location.href = url;
      }, 1500); // 1.5s de animación
    });
  });
});



    </script>
