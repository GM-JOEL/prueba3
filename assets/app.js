
// Activa el link actual en el navbar y año en el footer
(function(){
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-link').forEach(a => {
    if(a.dataset.page === page) a.classList.add('active');
  });
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();

// Filtro simple por plataforma + búsqueda
(function(){
  const form = document.getElementById('filterForm');
  const grid = document.getElementById('gamesGrid');
  if(!form || !grid) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const q = (data.get('q')||'').toString().toLowerCase();
    const plat = data.get('plataforma')||'';
    grid.querySelectorAll('[data-plataforma]').forEach(card=>{
      const matchesQ = card.innerText.toLowerCase().includes(q);
      const matchesPlat = !plat || card.dataset.plataforma===plat;
      card.style.display = (matchesQ && matchesPlat) ? '' : 'none';
    });
  });
})();

// Validación Bootstrap del formulario de contacto
(function () {
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      document.getElementById('formAlert').classList.remove('d-none');
      form.reset();
    }
    form.classList.add('was-validated');
  }, false);
})();
