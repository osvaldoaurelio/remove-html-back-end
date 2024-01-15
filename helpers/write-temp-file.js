const { writeFile } = require('fs').promises;
const path = require('path');

const writeTempFile = async ({ originalname }, stringData) => {
  const fileName = `no-html-${originalname}`;
  const filePath = path.join(__dirname, '..', 'temp', fileName);

  await writeFile(filePath, stringData, 'utf8');

  return { fileName, filePath };
}

module.exports = writeTempFile;
