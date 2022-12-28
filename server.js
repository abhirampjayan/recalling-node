const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 3500;

const app = express();

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
