document.addEventListener('DOMContentLoaded', async () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) {
    const h = await fetch('/partials/header.html');
    headerEl.innerHTML = await h.text();
  }

  if (footerEl) {
    const f = await fetch('/partials/footer.html');
    footerEl.innerHTML = await f.text();
  }

  setTimeout(() => {
    const path = window.location.pathname.toLowerCase();
    let key = 'home';
    if (path.includes('product')) key = 'product';
    else if (path.includes('pricing')) key = 'pricing';
    else if (path.includes('chronicles')) key = 'chronicles';
    else if (path.includes('about')) key = 'about';
    else if (path.includes('contact')) key = 'contact';
    document
      .querySelectorAll('nav.main-nav a[data-nav]')
      .forEach(a => {
        if (a.getAttribute('data-nav') === key) a.classList.add('active');
      });
  }, 100);
});
