const express = require('express');
const { validateDescription } = require('./middlewares/validateDescription');
const validateName = require('./middlewares/validateName');
const vilidatePrice = require('./middlewares/validatePrice');

const app = express();

app.use(express.json());

app.post('/activities', validateName, vilidatePrice, validateDescription, (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = app;