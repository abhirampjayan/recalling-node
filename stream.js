const fs = require('fs');
const rs = fs.createReadStream('./files/lorm.txt', { encoding: 'utf-8' });
const ws = fs.createWriteStream('./files/w.txt');
// rs.on('data', (dataBuff) => {
//   ws.write(dataBuff);
// });
rs.pipe(ws);
