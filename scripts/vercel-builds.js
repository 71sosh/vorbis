const { execSync } = require('child_process');

console.log('Running Vercel build script...');

try {
  // 1. Build the project
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
