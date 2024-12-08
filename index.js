document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
  });

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.eldenring-text', {delay: 200, origin: 'top'});
sr.reveal('.eldenring-img', {delay: 450, origin: 'top'});
sr.reveal('.dmc-text', {delay: 200, origin: 'top'});
sr.reveal('.dmc-img', {delay: 450, origin: 'top'});
sr.reveal('.nier-text', {delay: 200, origin: 'top'});
sr.reveal('.nier-img', {delay: 450, origin: 'top'});
sr.reveal('.ninesols-text', {delay: 200, origin: 'top'});
sr.reveal('.ninesols-img', {delay: 450, origin: 'top'});
sr.reveal('.darksouls-text', {delay: 200, origin: 'top'});
sr.reveal('.darksouls-img', {delay: 450, origin: 'top'});


