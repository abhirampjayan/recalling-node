const { log } = require('console');
const fs = require('fs');
const path = require('path');

process.on('uncaughtException', (err) => {
  console.error(`error happened: ${err}`);
  process.exit(1);
});

function appendFilePath(...args) {
  return path.join(__dirname, 'files', ...args);
}

function callbackFn(err, data) {
  if (err) throw err;
  log('Operation completed successfully');
  log(data);
}

function readDocFromFiles(documentName) {
  fs.readFile(appendFilePath(documentName), 'utf8', callbackFn);
}

function writeDocFromFiles(documentName) {
  fs.writeFile(appendFilePath(documentName), 'Ok', callbackFn);
}

function appendDocFromFiles(documentName, text) {
  fs.appendFile(appendFilePath(documentName), text, callbackFn);
}

readDocFromFiles('starter.txt');

writeDocFromFiles('reply.txt');
readDocFromFiles('reply.txt');

appendDocFromFiles('reply.txt', '\nready');
readDocFromFiles('reply.txt');

fs.writeFile(appendFilePath('test.txt'), 'Ok', (err) => {
  if (err) throw err;
  log('write completed');
  fs.appendFile(appendFilePath('test.txt'), '\n\nReady to learn...', (err) => {
    if (err) throw err;
    log('append completed');
    fs.rename(
      appendFilePath('test.txt'),
      appendFilePath('test1.txt'),
      (err) => {
        if (err) throw err;
        log('rename completed');
      }
    );
  });
});
