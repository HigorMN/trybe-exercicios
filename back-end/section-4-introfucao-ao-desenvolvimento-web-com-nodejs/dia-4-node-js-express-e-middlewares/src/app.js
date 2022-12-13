const express = require('express');
const { validateCreatedAt } = require('./middlewares/validateCreatedAt');
const { validateDescription } = require('./middlewares/validateDescription');
const { validateRating } = require('./middlewares/validateRating');
const validateName = require('./middlewares/validateName');
const vilidatePrice = require('./middlewares/validatePrice');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validateName,
  vilidatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  }
);

module.exports = app;
