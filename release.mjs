const RELEASE_ROOT = 'https://github.com/Baozi-Pei/POF-Releases/releases/download/';
export function selectRelease(release) {
  const result = { version: 'GitHub Releases', installer: null, portable: null };
  if (!release || release.draft || release.prerelease || !Array.isArray(release.assets)) return result;
  result.version = typeof release.tag_name === 'string' ? release.tag_name : result.version;
  const assets = release.assets.filter(a => a && typeof a.name === 'string' && typeof a.browser_download_url === 'string' && a.browser_download_url.startsWith(RELEASE_ROOT));
  result.installer = assets.find(a => /(?:setup|installer).*\.exe$/i.test(a.name)) || null;
  result.portable = assets.find(a => /\.zip$/i.test(a.name) && !/(?:manual|gpu|cuda|marsscope|source)/i.test(a.name)) || null;
  return result;
}
