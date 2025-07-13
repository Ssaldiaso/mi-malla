document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('mouseenter', () => {
    const abre = ramo.dataset.abre?.split(',') || [];
    const depende = ramo.dataset.dependeDe?.split(',') || [];

    // Destacar los ramos que dependen de este
    abre.forEach(id => {
      const target = document.getElementById(id.trim());
      if (target) target.classList.add('destacado');
    });

    // Destacar los ramos que abren este
    depende.forEach(id => {
      const target = document.getElementById(id.trim());
      if (target) target.classList.add('destacado');
    });
  });

  ramo.addEventListener('mouseleave', () => {
    document.querySelectorAll('.ramo').forEach(r => r.classList.remove('destacado'));
  });
});

