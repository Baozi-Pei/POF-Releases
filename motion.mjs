const unit = value => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
export function sceneMotion(scroll, height, narrow = false) {
 const progress = unit(scroll / Math.max(1, height));
 return { landscape: progress * (narrow ? 12 : 38), wordmark: progress * (narrow ? 48 : 160) };
}
export function readingProgress(scroll, height, viewport) {
 return height > viewport ? unit(scroll / (height - viewport)) : 0;
}
export function installMotion() {
 const root = document.documentElement;
 const media = matchMedia('(prefers-reduced-motion: reduce)');
 const hero = document.querySelector('.hero');
 if (!hero) return;
 const wordmark = document.querySelector('.hero-monogram');
 const landscape = document.querySelector('.hero-image img');
 const foreground = document.querySelector('.hero-foreground');
 const workflow = document.querySelector('#workflow');
 const steps = [...document.querySelectorAll('.workflow-steps li')];
 const progress = document.createElement('div');
 progress.className = 'reading-progress'; progress.setAttribute('aria-hidden','true');
 document.querySelector('.site-header').append(progress);
 let pending = false;
 function paint() {
  pending = false;
  const y = scrollY;
  progress.style.transform = `scaleX(${readingProgress(y, root.scrollHeight, innerHeight)})`;
  if (media.matches) {
   for (const el of [wordmark, landscape, foreground]) el?.style.removeProperty('transform');
   return;
  }
  const scene = sceneMotion(y, hero.offsetHeight, innerWidth < 768);
  // The photo and its clipped foreground must always use the same transform.
  const shared = `translate3d(0,${scene.landscape}px,0) scale(1.015)`;
  landscape.style.transform = shared; foreground.style.transform = shared;
  wordmark.style.transform = `translate3d(0,${scene.wordmark}px,0)`;
  // Keep the active step tied to the actual row entering the reading zone. The
  // previous section-wide formula compressed all three rows into a short span,
  // so the page could appear to jump straight to step 03.
  // Place the reading anchor below the heading. This gives the first row a
  // visible dwell period instead of activating it only as it exits the top.
  const anchor = innerHeight * .45;
  let current = 0;
  steps.forEach((step, i) => {
   const rect = step.getBoundingClientRect();
   if (rect.top + rect.height / 2 <= anchor) current = i;
  });
  steps.forEach((step, i) => step.classList.toggle('is-current', i === current));

 }
 function schedule() { if (!pending) { pending = true; requestAnimationFrame(paint); } }
 root.classList.toggle('cinematic-motion', !media.matches);
 if (!media.matches && wordmark.animate) {
  wordmark.animate([{translate:'0 110px',opacity:0},{translate:'0 0',opacity:1}],{duration:1500,easing:'cubic-bezier(.16,1,.3,1)'});
  document.querySelector('.hero-content').animate([{translate:'0 24px',opacity:0},{translate:'0 0',opacity:1}],{duration:1000,delay:160,fill:'backwards',easing:'cubic-bezier(.16,1,.3,1)'});
 }
 addEventListener('scroll', schedule, {passive:true}); addEventListener('resize',schedule,{passive:true});
 media.addEventListener('change',()=>{
  root.classList.toggle('cinematic-motion', !media.matches);
  if (media.matches) document.getAnimations().forEach(animation=>animation.cancel());
  paint();
 });
 paint();
}
