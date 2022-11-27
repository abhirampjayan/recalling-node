const { log } = require('console');
const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
console.log('====================================');
console.log('hello');
console.log('====================================');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Ok', (err) => {
  if (err) throw err;
  console.log('Operation completed successfully');
});

process.on('uncaughtException', (err) => {
  console.error(`error happened: ${err}`);
  process.exit(1);
});
