const fs = require('fs');
const path = require('path');

// 1. Copy index.html to 404.html
fs.copyFileSync(
  path.join(__dirname, '../dist/index.html'),
  path.join(__dirname, '../dist/404.html')
);

// 2. Fix asset paths in index.html
const indexPath = path.join(__dirname, '../dist/index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Fix script paths
indexContent = indexContent.replace(
  /src="\/src\//g, 
  'src="./assets/'
);

// Fix link paths
indexContent = indexContent.replace(
  /href="\/assets\//g, 
  'href="./assets/'
);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Post-build complete: Fixed asset paths');
