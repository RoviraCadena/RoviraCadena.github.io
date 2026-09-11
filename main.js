(() => {
  const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
  const nav = document.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('.section__head, .card, .project, .steps li, .exp, .faq, .contact > *');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
})();
