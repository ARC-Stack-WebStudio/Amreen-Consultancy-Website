const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const script = path.resolve('node_modules/react-scripts/scripts/build.js');
childProcess.execFileSync(process.execPath, [script], {
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_URL: '/Amreen-Consultancy-Website' },
});
fs.copyFileSync(path.resolve('build/index.html'), path.resolve('build/404.html'));

