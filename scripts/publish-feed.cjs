'use strict';
// Generate the feed from checked release data. This never runs update code.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const { TextDecoder } = require('node:util');

const VERSION = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const FILE = /^LiquidTouch-Update-v((?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*))\.json$/;
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const fail = message => { throw new Error(message); };
function compare(a, b) {
  const left = a.split('.').map(BigInt), right = b.split('.').map(BigInt);
  for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return left[i] > right[i] ? 1 : -1;
  return 0;
}
function checkedRelease(directory, filename) {
  const expected = filename.match(FILE)?.[1];
  const source = path.join(directory, filename);
  const stat = fs.lstatSync(source);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 1200000) fail(filename + ': not a regular update file smaller than 1.2 MB.');
  const bytes = fs.readFileSync(source);
  const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  const bundle = JSON.parse(text);
  if (bundle.schema !== 1 || bundle.app !== 'LiquidTouch' || !VERSION.test(bundle.version || '') || bundle.version !== expected) fail(filename + ': schema, app or version does not match.');
  if (typeof bundle.javascript !== 'string' || typeof bundle.css !== 'string' || bundle.javascript.length > 800000 || bundle.css.length > 250000) fail(filename + ': unsupported JavaScript/CSS payload.');
  if (bundle.minimumLoader && !VERSION.test(bundle.minimumLoader)) fail(filename + ': invalid minimum loader version.');
  if (!/^[a-f0-9]{64}$/.test(bundle.integrity || '') || sha256(bundle.javascript + '\0' + bundle.css) !== bundle.integrity) fail(filename + ': internal update checksum failed.');
  const codeVersion = bundle.javascript.match(/\bconst\s+VERSION\s*=\s*["'](\d+\.\d+\.\d+)["']/)?.[1];
  if (codeVersion !== bundle.version) fail(filename + ': runtime VERSION differs from the release version.');
  new vm.Script(bundle.javascript, { filename }); // Parse only. Do not execute.
  const summary = Array.isArray(bundle.summary) ? bundle.summary.filter(line => typeof line === 'string').slice(0, 8).map(line => line.slice(0, 400)) : [];
  return { version: bundle.version, filename, sha256: sha256(bytes), summary };
}
function publish(root = path.resolve(__dirname, '..')) {
  const directory = path.join(root, 'releases');
  const files = fs.readdirSync(directory).filter(name => FILE.test(name));
  if (!files.length) fail('No releases/LiquidTouch-Update-vX.Y.Z.json files were found.');
  // Validate every candidate before touching the existing public feed.
  const releases = files.map(name => checkedRelease(directory, name)).sort((a, b) => compare(a.version, b.version));
  const release = releases[releases.length - 1];
  const manifest = { schema: 1, app: 'LiquidTouch', version: release.version, bundleURL: './releases/' + release.filename, sha256: release.sha256, summary: release.summary };
  const output = path.join(root, 'latest.json'), temporary = path.join(root, '.latest-' + process.pid + '.tmp');
  try { fs.writeFileSync(temporary, JSON.stringify(manifest, null, 2) + '\n'); fs.renameSync(temporary, output); }
  finally { if (fs.existsSync(temporary)) fs.unlinkSync(temporary); }
  return manifest;
}
module.exports = { publish };
if (require.main === module) {
  try { const manifest = publish(); process.stdout.write('Feed ready: LiquidTouch ' + manifest.version + '\n'); }
  catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}
