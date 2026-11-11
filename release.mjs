const RELEASE_ROOT = 'https://github.com/Baozi-Pei/POF-Releases/releases/download/';
export function selectRelease(release) {
  const result = { version: 'GitHub Releases', installer: null, portable: null };
  if (!release || release.draft || release.prerelease || !Array.isArray(release.assets)) return result;
  result.version = typeof release.tag_name === 'string' ? release.tag_name : result.version;
  const assets = release.assets.filter(a => {
    if (!a || a.state !== 'uploaded' || !Number.isSafeInteger(a.size) || a.size <= 0 || typeof a.name !== 'string' || typeof a.browser_download_url !== 'string') return false;
    try {
      const url = new URL(a.browser_download_url);
      const expected = `${RELEASE_ROOT}${encodeURIComponent(release.tag_name)}/${encodeURIComponent(a.name)}`;
      return !url.search && !url.hash && decodeURI(url.href) === decodeURI(expected);
    } catch { return false; }
  });
  result.installer = assets.find(a => /(?:setup|installer).*\.exe$/i.test(a.name)) || null;
  result.portable = assets.find(a => /\.zip$/i.test(a.name) && !/(?:manual|gpu|cuda|marsscope|source)/i.test(a.name)) || null;
  return result;
}

function newer(candidate, current) {
  if (!current) return true;
  const parts = value => /^v?(\d+)\.(\d+)\.(\d+)$/.exec(value)?.slice(1).map(Number);
  const left = parts(candidate.version), right = parts(current.version);
  if (!left || !right) return false;
  for (let i=0;i<3;i++) { if (left[i]!==right[i]) return left[i]>right[i]; }
  return false;
}

// The same-origin snapshot keeps downloads available when the GitHub API is
// blocked, rate limited or slow. Publish it only after verifying all assets.
export async function discoverRelease({fetcher=globalThis.fetch, timeoutMs=6000, onSnapshot=()=>{}}={}) {
  let current=null;
  async function read(url) {
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),timeoutMs);
    try {
      const response=await fetcher(url,{headers:{Accept:'application/json'},cache:'no-cache',signal:controller.signal});
      if (!response.ok) return null;
      const selected=selectRelease(await response.json());
      return selected.installer || selected.portable ? selected : null;
    } catch { return null; }
    finally {clearTimeout(timer);}
  }
  const snapshotUrl=new URL('./downloads.json',import.meta.url);
  snapshotUrl.search=new URL(import.meta.url).search;
  const snapshot=read(snapshotUrl).then(value=>{
    if(value && (!current || newer(value,current))) {current={...value,source:'snapshot'};onSnapshot(current);}
  });
  const live=read('https://api.github.com/repos/Baozi-Pei/POF-Releases/releases/latest').then(value=>{
    if(value && (!current || newer(value,current) || value.version===current.version)) current={...value,source:'github'};
  });
  await Promise.all([snapshot,live]);
  return current;
}
