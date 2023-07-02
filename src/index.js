'use strict';
require('dotenv/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const usersRouter = require('./routes/users');
const expensesRouter = require('./routes/expenses');

function createServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });
  const upload = multer({ storage });

  app.use(cors());

  app.use(express.urlencoded({ extended: true }));
  app.use('/uploads', express.static('uploads'));
  app.use(express.json());

  app.use(upload.any());

  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  app.listen(PORT);

  return app;
}

createServer();

module.exports = {
  createServer,
};
