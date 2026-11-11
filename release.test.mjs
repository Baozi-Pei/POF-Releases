import test from 'node:test';
import assert from 'node:assert/strict';
import { selectRelease, discoverRelease } from './release.mjs';

const asset = (name, size = 1234) => ({ name, size, state:'uploaded', browser_download_url: `https://github.com/Baozi-Pei/POF-Releases/releases/download/v0.2.0/${encodeURIComponent(name)}` });
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
    assert.equal(selectRelease({ tag_name:'v0.2.0', assets: [{ ...asset('Setup.exe'), browser_download_url: u }] }).installer, null);
  }
});

const stable={tag_name:'v0.2.0',assets:[asset('POF-Workbench-Setup.exe')]};
test('rejects zero-byte, unfinished and wrong-release assets',()=>{
  for(const patch of [{size:0},{size:-1},{state:'new'},{state:'starter'},{browser_download_url:asset('Setup.exe').browser_download_url}]) {
    assert.equal(selectRelease({...stable,assets:[{...stable.assets[0],...patch}]}).installer,null);
  }
});
test('download snapshot survives an unavailable or rate-limited GitHub API',async()=>{
  for(const fail of ['network','rate-limit']) {
    let displayed=null;
    const result=await discoverRelease({fetcher:async url=>{
      if(String(url).endsWith('/downloads.json')) return {ok:true,json:async()=>stable};
      if(fail==='network') throw Error('offline');
      return {ok:false,status:403};
    },onSnapshot:value=>{displayed=value;}});
    assert.equal(result.installer.name,'POF-Workbench-Setup.exe');assert.equal(displayed.version,'v0.2.0');
  }
});
test('an older API response cannot overwrite the newer verified snapshot',async()=>{
  const latest={tag_name:'v0.3.0',assets:stable.assets.map(a=>({...a,browser_download_url:a.browser_download_url.replace('/v0.2.0/','/v0.3.0/')}))};
  const result=await discoverRelease({fetcher:async url=>({ok:true,json:async()=>String(url).endsWith('/downloads.json')?latest:stable})});
  assert.equal(result.version,'v0.3.0');
});
test('a newer complete GitHub release takes precedence over the snapshot',async()=>{
  const latest={tag_name:'v0.3.0',assets:stable.assets.map(a=>({...a,browser_download_url:a.browser_download_url.replace('/v0.2.0/','/v0.3.0/')}))};
  const result=await discoverRelease({fetcher:async url=>({ok:true,json:async()=>String(url).endsWith('/downloads.json')?stable:latest})});
  assert.equal(result.version,'v0.3.0');assert.equal(result.source,'github');
});
test('ignores incomplete assets and handles portable-only releases', () => {
  const r = selectRelease({ tag_name: 'v0.2.0', assets: [null, { name: 'Setup.exe' }, asset('portable.zip')] });
  assert.equal(r.installer, null); assert.equal(r.portable.name, 'portable.zip');
});
