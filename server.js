const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  let paths;
  switch (req.url) {
    case '/':
    case 'index.html':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      paths = path.join(__dirname, 'views', 'index.html');
      fs.readFile(paths, 'utf8', (err, data) => {
        res.end(data);
      });
      break;

    default:
      break;
  }
});

server.listen(PORT, () => {
  console.log('server running on port ', PORT);
});
