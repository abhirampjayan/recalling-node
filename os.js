console.log('====================================');
console.log(global);
const os = require('os');
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.homedir());
console.log(os.cpus());
console.log(os.EOL);
console.log(os.version());
console.log(os.userInfo());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.getPriority());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.release());

console.log(__dirname);
console.log(__filename);

const path = require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
