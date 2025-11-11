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

// Botón "Subir"
const mainWrapper = document.querySelector(".main-wrapper");
const btnTop = document.getElementById("btn-back-to-top");

mainWrapper.addEventListener("scroll", () => {
  if (mainWrapper.scrollTop > 200) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  mainWrapper.scrollTo({ top: 0, behavior: "smooth" });
});


// ===== MENÚ HAMBURGUESA =====
const menuBtn = document.getElementById("btn-menu");
const navbarList = document.querySelector(".navbar-lista");
const navLinks = document.querySelectorAll(".navbar-lista .nav-link");

// Abrir / cerrar menú
menuBtn.addEventListener("click", () => {
  navbarList.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Cerrar el menú al hacer clic en cualquier enlace
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarList.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});