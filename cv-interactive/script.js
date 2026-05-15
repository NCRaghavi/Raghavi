document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const piePaths = document.querySelectorAll('.pie-svg path');
  const labels = document.querySelectorAll('.pie-label');

  function activate(type) {
    document.body.classList.add('dim-inactive');
    
    // Activate card
    cards.forEach(c => {
      if (c.dataset.type === type) c.classList.add('active');
      else c.classList.remove('active');
    });

    // Activate pie slice
    piePaths.forEach(p => {
      if (p.dataset.type === type) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Activate label
    labels.forEach(l => {
      if (l.dataset.type === type) l.classList.add('active');
      else l.classList.remove('active');
    });
  }

  function deactivate() {
    document.body.classList.remove('dim-inactive');
    
    cards.forEach(c => c.classList.remove('active'));
    piePaths.forEach(p => p.classList.remove('active'));
    labels.forEach(l => l.classList.remove('active'));
  }

  // Add event listeners to cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => activate(card.dataset.type));
    card.addEventListener('mouseleave', deactivate);
  });

  // Add event listeners to pie slices
  piePaths.forEach(path => {
    path.addEventListener('mouseenter', () => activate(path.dataset.type));
    path.addEventListener('mouseleave', deactivate);
  });
});
