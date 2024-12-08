const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.eldenring-text', {delay: 200, origin: 'top'});
sr.reveal('.eldenring-img', {delay: 450, origin: 'top'});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
  });
