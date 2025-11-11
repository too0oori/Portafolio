    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Botón de desplazamiento hacia arriba
    const btn = document.getElementById("btn-back-to-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });