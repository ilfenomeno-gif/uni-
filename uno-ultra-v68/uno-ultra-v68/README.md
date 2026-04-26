# UNO ULTRA v68 — Architettura modulare

Questa cartella contiene la nuova struttura modulare per UNO ULTRA v68, separando frontend e backend secondo le best practice moderne.

## Struttura
- `frontend/` — HTML, CSS, JS client-side (SPA)
- `backend/` — Node.js + Express API, WebSocket, DB
- `database/` — Script SQL per setup tabelle

## Avvio rapido
1. Configura `.env` (vedi `.env.example`)
2. Esegui le migrazioni SQL (`database/init.sql`)
3. Avvia backend: `cd backend && npm install && node app.js`
4. Apri `frontend/index.html` in browser

## Documentazione tecnica
Consulta i documenti allegati per dettagli su architettura, API, MMR, bot, accessibilità e roadmap di sviluppo.
