'use strict';

const express = require('express');

const helloRouter = express.Router();

helloRouter.get('/', (req, res) => {
  res.send('Привіт, світе!'); // Приклад відповіді для кореневого маршруту
});

module.exports = helloRouter;
