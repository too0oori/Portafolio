// Menú móvil
const btnMenu = document.getElementById('btn-menu');
const navbarLista = document.getElementById('navbar-lista');

if (btnMenu) {
  btnMenu.addEventListener('click', () => {
    navbarLista.classList.toggle('active');
    const isExpanded = navbarLista.classList.contains('active');
    btnMenu.setAttribute('aria-expanded', isExpanded);
  });

  // Cerrar menú al hacer click en un link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarLista.classList.remove('active');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// Botón Back to Top
const btnBackToTop = document.getElementById('btn-back-to-top');
const mainWrapper = document.querySelector('.main-wrapper');

if (btnBackToTop && mainWrapper) {
  // Mostrar/ocultar botón según scroll
  mainWrapper.addEventListener('scroll', () => {
    if (mainWrapper.scrollTop > 700) {
      btnBackToTop.style.display = 'flex';
    } else {
      btnBackToTop.style.display = 'none';
    }
  });

  // Scroll hacia arriba al hacer click
  btnBackToTop.addEventListener('click', () => {
    mainWrapper.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth scroll para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement && mainWrapper) {
      const targetPosition = targetElement.offsetTop - 80;
      
      mainWrapper.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});