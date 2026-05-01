const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => { if(e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i*65); });
  }, {threshold:.08, rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => { nav.style.boxShadow = scrollY > 20 ? '0 2px 22px rgba(61,31,15,.1)' : 'none'; });
