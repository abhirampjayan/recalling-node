const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

const { logger } = require('./middleware/logEvents');

dotenv.config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 3500;

const app = express();

const whiteList = ['https://www.abhirampjayan.com', 'http://127.0.0.1:5500'];

const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexof(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not alowed access'));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(logger);

app.use(cors(corsOption));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html');
});

app.listen(PORT, () => {
  console.log('server running on port ', PORT);
});
