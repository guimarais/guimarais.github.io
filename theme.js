(() => {
  const root = document.documentElement;
  root.classList.add('js');
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch {}
  root.dataset.theme = saved === 'light' || saved === 'dark' ? saved : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    function update() {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
      button.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
    }
    update();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch {}
      update();
    });
  });
})();
