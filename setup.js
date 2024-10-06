const { execSync } = require('child_process');

console.log('Setting up the project...');

try {
  console.log('Installing npm dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Installing Python dependencies...');
  execSync('pip install flask flask-cors scikit-learn pandas numpy', { stdio: 'inherit' });

  console.log('Setup completed successfully!');
} catch (error) {
  console.error('An error occurred during setup:', error.message);
  process.exit(1);
}