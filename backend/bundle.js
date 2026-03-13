const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'], // Express main process entry
  outfile: 'dist/server.js',
  bundle: true,
  platform: 'node',
  external: ['pg-native', 'pg', 'express', 'node-fetch', 'better-sqlite3'], // keep native deps external
  target: ['ES2023'],
  sourcemap: false,
  minify: true,

}).then(() => {
  console.log('Express server process bundled successfully');

}).catch((err) => {
  console.error(err);
  process.exit(1);
});