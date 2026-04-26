// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('UNO ULTRA v68 Backend API');
});

// Avvia il server solo se DB ok
sequelize.authenticate().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('UNO ULTRA v68 backend in ascolto su porta', process.env.PORT || 3000);
  });
}).catch(err => {
  console.error('Errore connessione DB:', err);
});
