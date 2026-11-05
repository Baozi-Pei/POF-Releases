import test from 'node:test';
import assert from 'node:assert/strict';
import { selectRelease } from './release.mjs';

const asset = (name, size = 1234) => ({ name, size, browser_download_url: `https://github.com/Baozi-Pei/POF-Releases/releases/download/v0.2.0/${encodeURIComponent(name)}` });
test('selects an installer and portable package from a stable public release', () => {
  const r = selectRelease({ tag_name: 'v0.2.0', assets: [asset('checksums.txt'), asset('POF-Workbench-Setup.exe'), asset('POF Workbench.zip')] });
  assert.equal(r.installer.name, 'POF-Workbench-Setup.exe');
  assert.equal(r.portable.name, 'POF Workbench.zip');
  assert.equal(r.version, 'v0.2.0');
});
test('does not advertise unpublished, draft or prerelease installers', () => {
  for (const r of [null, {}, { draft: true, assets: [asset('Setup.exe')] }, { prerelease: true, assets: [asset('Setup.exe')] }]) assert.equal(selectRelease(r).installer, null);
});
test('rejects off-site, insecure and malformed executable download URLs', () => {
  for (const u of ['javascript:alert(1)', 'https://evil.example/Setup.exe', 'http://github.com/Baozi-Pei/POF-Releases/releases/download/v1/Setup.exe', 'https://github.com/other/repo/releases/download/v1/Setup.exe']) {
    assert.equal(selectRelease({ assets: [{ ...asset('Setup.exe'), browser_download_url: u }] }).installer, null);
  }
});
test('ignores incomplete assets and handles portable-only releases', () => {
  const r = selectRelease({ tag_name: 'v1', assets: [null, { name: 'Setup.exe' }, asset('portable.zip')] });
  assert.equal(r.installer, null); assert.equal(r.portable.name, 'portable.zip');
});
