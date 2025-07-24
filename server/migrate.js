// This line directly tells Node.js to allow self-signed certificates.
// It MUST be the very first line of the script.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { execFile } = require('child_process');
const path = require('path');
require('dotenv').config();

const migrateCliJs = path.join('node_modules', 'node-pg-migrate', 'bin', 'node-pg-migrate.js');

console.log('Running migrations with production database...');

const child = execFile('node', [migrateCliJs, 'up'], (error, stdout, stderr) => {
    if (error) {
        console.error('--- MIGRATION FAILED ---');
        console.error(stderr || error.message);
        return;
    }
    console.log('--- MIGRATION SUCCESS ---');
    console.log(stdout);
});