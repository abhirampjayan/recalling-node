const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf-8'
    );
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'starter.txt'),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'starter.txt'),
      '\nnice to meet you'
    );
    await fsPromises.rename(
      path.join(__dirname, 'files', 'starter.txt'),
      path.join(__dirname, 'files', `starterNew.txt`)
    );
    const data2 = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starterNew.txt'),
      'utf-8'
    );
    console.log(data2);
    await fsPromises.copyFile(
      path.join(__dirname, 'files', 'starterNew.txt'),
      path.join(__dirname, 'files', 'starter.txt')
    );
  } catch (error) {
    console.error(error);
  }
};
fileOps();
