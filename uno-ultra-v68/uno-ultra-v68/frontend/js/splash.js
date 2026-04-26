// splash.js — gestisce la splash screen e il login redirect
window.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  loginBtn.addEventListener('click', () => {
    showScreen('login');
  });
  registerBtn.addEventListener('click', () => {
    showScreen('login'); // Per ora, login e registrazione condividono la stessa schermata
  });
  // Simula caricamento
  setTimeout(() => {
    document.getElementById('loader-bar').classList.add('done');
  }, 1800);
});

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => {
    el.classList.remove('on');
    el.setAttribute('aria-hidden', 'true');
  });
  const tgt = document.getElementById(id);
  if (tgt) {
    tgt.classList.add('on');
    tgt.setAttribute('aria-hidden', 'false');
  }
}
