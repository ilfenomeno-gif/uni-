// storage.js: astrazione tra localStorage e API backend

export const Storage = {
  // Salva dati
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // fallback API
      // ...
    }
  },
  // Carica dati
  load(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      // fallback API
      // ...
      return null;
    }
  },
  // ...altre funzioni di persistenza...
};

// ...continua con tutte le funzioni di storage estratte...
