// main.js — logica placeholder per UI e routing
// Qui andrà la logica di gioco vera e propria

// Esempio: routing tra schermate
window.showScreen = function(id) {
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
