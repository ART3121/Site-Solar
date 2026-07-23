const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('solar-theme', theme);
  const light = theme === 'light';
  themeToggle.textContent = light ? 'DARK' : 'LIGHT';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
}

function setLanguage(language) {
  root.dataset.manualLanguage = language;
  root.lang = language === 'pt' ? 'pt-BR' : 'en';
  localStorage.setItem('solar-language', language);
  languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
  languageToggle.setAttribute('aria-label', language === 'pt' ? 'Switch manual to English' : 'Mudar manual para português');
  document.title = language === 'pt' ? 'Manual do Solar 0.4.5' : 'Solar 0.4.5 Manual';
}

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
});

languageToggle.addEventListener('click', () => {
  setLanguage(root.dataset.manualLanguage === 'pt' ? 'en' : 'pt');
});

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href');
    if (root.dataset.manualLanguage !== 'pt' || hash === '#top') return;
    const localizedTarget = document.querySelector(`${hash}-pt`);
    if (!localizedTarget) return;
    event.preventDefault();
    localizedTarget.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', hash);
  });
});

const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
const savedLanguage = localStorage.getItem('solar-language');
setTheme(localStorage.getItem('solar-theme') === 'light' ? 'light' : 'dark');
const initialLanguage = requestedLanguage === 'pt' || (!requestedLanguage && savedLanguage === 'pt') ? 'pt' : 'en';
setLanguage(initialLanguage);

if (initialLanguage === 'pt' && window.location.hash) {
  const localizedTarget = document.querySelector(`${window.location.hash}-pt`);
  if (localizedTarget) requestAnimationFrame(() => localizedTarget.scrollIntoView());
}
