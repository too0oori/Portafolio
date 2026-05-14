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

// Formulario de contacto con Formspree (sin redirección)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = '✦ Mensaje enviado. ¡Gracias por escribir!';
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(255,255,255,0.4)';
        formStatus.style.border = '1px solid rgba(168,0,0,0.3)';
        formStatus.style.color = 'var(--accent)';
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      formStatus.textContent = '✦ Algo salió mal. Intenta escribirme directo a sofia.lagos.cesped@gmail.com';
      formStatus.style.display = 'block';
      formStatus.style.background = 'rgba(255,255,255,0.4)';
      formStatus.style.border = '1px solid rgba(0,0,0,0.15)';
      formStatus.style.color = 'var(--text-dark)';
    } finally {
      submitBtn.textContent = 'Enviar';
      submitBtn.disabled = false;
    }
  });
}
