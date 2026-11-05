const language=document.documentElement.lang.startsWith('zh')?'zh':'en';
if(innerWidth<=900)document.querySelector('.reader-nav').open=false;
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
document.querySelectorAll('[data-reader-language]').forEach(link=>link.addEventListener('click',()=>{
  try{localStorage.setItem('pof-site-language',link.dataset.readerLanguage)}catch{}
  if(/^#chapter-\d{2}$/.test(location.hash))link.href=link.getAttribute('href').split('#')[0]+location.hash;
}));
try{localStorage.setItem('pof-site-language',language)}catch{}
const links=[...document.querySelectorAll('.reader-nav a[href^="#chapter-"]')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const progress=document.querySelector('.reader-progress');
let queued=false;
function update(){
  queued=false;
  const room=document.documentElement.scrollHeight-innerHeight;
  if(progress)progress.style.transform=`scaleX(${room>0?Math.min(1,scrollY/room):0})`;
  let active=sections[0];
  for(const section of sections)if(section.getBoundingClientRect().top<=150)active=section;
  for(const link of links){if(link.hash===`#${active?.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}
}
addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});
addEventListener('resize',update);update();
links.forEach(link=>link.addEventListener('click',()=>{if(innerWidth<=900)document.querySelector('.reader-nav').open=false}));
