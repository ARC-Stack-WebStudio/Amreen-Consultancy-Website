const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const script = path.resolve('node_modules/react-scripts/scripts/build.js');
childProcess.execFileSync(process.execPath, [script], {
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_URL: '/' },
});
const manifestPath = path.resolve('build/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.start_url = '/';
manifest.scope = '/';
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');