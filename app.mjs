import { installMotion } from './motion.mjs';
import { selectRelease } from './release.mjs';

const zh = {
 skip:'跳到正文',navProduct:'工作台',navWorkflow:'工作流程',navImagery:'火星影像',navDownload:'下载',
 heroEyebrow:'行星影像分析',pofDefinition:'行星观测基础模型 · POF',heroTitle1:'POF',heroTitle2:'Workbench.',heroDescription:'行星影像标注、模型训练与批量分割。<br>在同一个工作台中，完成从标签到分割结果的处理。',heroCta:'获取 Windows 版',explore:'探索工作台',
 productEyebrow:'01 / 工作台',productTitle:'影像标注。模型训练。<br>批量分割。',productIntro:'标注地貌，训练模型，处理下一幅影像。让影像、标签和模型在同一个桌面工作台中衔接。',
 tabAnnotate:'标注',tabTrain:'训练',tabPredict:'推理',annotateTitle:'完整画布，精细标注。',annotateDescription:'大画布配合多边形、画笔、橡皮和套索。打开已有 mask 或 Shapefile 标签，继续修改和完善。',annotateNote:'TIFF 与常见图像 · PNG mask 与 SHP',
 trainTitle:'模型的变化，看得见。',trainDescription:'查看训练曲线、验证指标、地形估计和预测轮廓。为不同任务分别保存数据与模型。',trainNote:'截图中的训练指标与地形为演示内容，不代表实际精度。',
 predictTitle:'从一幅影像，到整批结果。',predictDescription:'使用训练好的模型批量分割影像。查看文件队列、处理阶段和失败信息，按需要组织输出结果。',predictNote:'PNG mask · 矢量结果 · 可选择输出组织方式',
 cap1Title:'面向行星影像',cap1:'大幅 TIFF、原图上下文和可修改的标签。',cap2Title:'地形信息，按需加入',cap2:'可选 DEM，让地形参与处理流程。',cap3Title:'数据保留在本机',cap3:'在自己的电脑上工作，保留项目文件。',
 workflowEyebrow:'02 / 主动学习',workflowTitle:'主动学习。<br>人工审核，逐轮训练。',workflowDescription:'从少量标注或已有模型开始。审核推荐区域、修正标签，再进入下一轮训练。',step1Title:'确定研究目标',step1:'导入影像，在项目下建立任务。',step2Title:'审核、修正，再继续',step2:'在同一画布上完善模型建议的标签。',step3Title:'让模型进入下一轮',step3:'使用已审核标签训练，并对比验证结果。',readManual:'阅读使用手册',loopLabel:'人工审核 / 模型学习',visualCaption:'审核推荐区域，修正目标标签。',exampleLabel:'流程示意 · 轮廓仅为示意',
 imageryEyebrow:'03 / 来自火星的视野',imageryTitle:'从轨道，观测火星。',imageryDescription:'Psyche 飞掠火星后拍摄的南极视野。<br>影像来自 NASA 任务，保留拍摄日期与原始来源。',dawnDate:'火星南极 · PSYCHE 拍摄于 2026 年 5 月 15 日',
   downloadEyebrow:'04 / 下载软件',downloadDescription:'面向 Windows 的行星影像标注与分割软件。',releaseLabel:'最新正式发布',downloadPanelTitle:'获取最新发布版本。',releaseChecking:'正在检查最新发布版本…',viewReleases:'查看发布下载',allReleases:'所有版本与便携包',runtimeLabel:'基础运行环境',runtimeValue:'已包含，无需配置 Python。',gpuLabel:'GPU 加速',gpuValue:'在设置中按需下载。',updatesLabel:'软件更新',updatesValue:'通过 GitHub Releases 发布。',downloadManual:'下载 PDF 使用手册',
 releaseMissing:'安装包尚未在 GitHub Releases 正式发布。你可以先浏览工作台和使用手册；发布后这里会自动提供最新版下载。',releaseError:'暂时无法获取版本信息。仍可直接下载最新版安装包，或稍后重试。',releaseReady:'最新正式版已就绪。选择安装包，或下载便携版。',downloadInstaller:'下载 Windows 安装包',downloadPortable:'下载便携版',
 faqEyebrow:'使用前了解',faqTitle:'几个常见问题。',faq1Q:'必须有 GPU 吗？',faq1A:'基础包可以使用 CPU。进行训练和推理时，兼容的 NVIDIA GPU 可以提升速度。GPU 运行库可在设置中下载和配置。',faq2Q:'可以使用已有标签吗？',faq2A:'可以打开 PNG mask 或 Shapefile 标签进行修改。在设置中选择保存格式，默认输出 PNG mask。',faq3Q:'必须提供 DEM 吗？',faq3A:'DEM 是可选的。未提供有效 DEM 时，支持的 POF 模型可以从影像估计相对地形。这种估计不等于真实测量高程。',faq4Q:'POF 与 NASA 有合作关系吗？',faq4A:'POF Workbench 由南方科技大学行星与人工智能实验室开发。NASA 影像均标注任务与来源，影像使用不代表 NASA 对本软件的认可或背书。',lab:'南方科技大学行星与人工智能实验室 开发',manual:'使用手册',credits:'影像来源',footerNote:'行星影像标注与分割。',screenshotTitle:'POF Workbench · 界面预览',screenshotNote:'训练截图中的指标与地形为演示数据。'
};
const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n, el.innerHTML]));
Object.assign(english, {
 trainTitle:'Watch your model take shape.',trainDescription:'Follow training curves, validation metrics, terrain estimates and predicted contours. Keep separate data and models for each task.',trainNote:'Training metrics and terrain in this screenshot are demonstration data, not measured performance.',
 predictTitle:'From one image to a whole collection.',predictDescription:'Run batch segmentation with a trained model. Follow the file queue, processing stages and error details, and organize the outputs your way.',predictNote:'PNG masks · Vector outputs · Configurable output organization',
 releaseMissing:'The installer has not been published on GitHub Releases yet. Explore the workbench and manual for now; the latest download will appear here when a release is published.',releaseError:'Release details could not be reached right now. You can still try the direct installer download or retry later.',releaseReady:'The latest stable release is ready. Choose the installer or the portable package.',downloadInstaller:'Download Windows installer',downloadPortable:'Download portable edition'
});
Object.assign(zh, {
 navAbout:'关于 POF',navManual:'使用手册',paiShort:'行星与人工智能实验室 · PAI',paiName:'行星与人工智能实验室 · PAI',university:'南方科技大学',tabProject:'项目',tabActive:'主动学习',
 projectTitle:'按项目组织，按任务工作。',projectDescription:'一个项目下管理多个识别任务，各自保存影像、标签、模型与轮次记录。',projectNote:'项目与任务 · 独立数据与模型',
 activeTitle:'从已有模型继续。',activeDescription:'选择模型，推荐待审核区域，修正标签，再使用已完成的标注继续训练。也可以从少量人工标注开始。',activeNote:'模型选择 · 区域审核 · 逐轮训练',
 trainNote:'界面中的指标对应截图里的具体训练，不代表所有数据上的模型精度。',exampleLabel:'实际软件界面 · 指标仅对应图示训练',screenshotNote:'截图来自实际使用；效果与训练数据、任务和影像分辨率有关。',
 aboutEyebrow:'03 / POF 框架',aboutTitle:'地形辅助。<br>像素级分割。',aboutDescription:'POF 是面向行星遥感影像的地形辅助分割框架。它融合语义上下文、局部纹理细节与地形线索，逐像素识别特定地貌目标。',aboutWorkbench:'POF Workbench 将这一框架放入完整的桌面流程：准备标签、训练任务模型、审核推荐区域，并导出分割结果。',pofFuture:'POF 将继续扩展到识别与更多行星影像任务。',aboutGuide:'在使用手册中了解完整流程',
 semanticTitle:'语义上下文',semanticDescription:'DINOv3 特征描述更大范围的形态与上下文。',detailTitle:'局部细节',detailDescription:'CNN 分支保留纹理、边缘和小尺度特征。',terrainTitle:'地形线索',terrainDescription:'可选 DEM；缺少有效 DEM 时，从影像估计相对地形。',outputTitle:'目标分割',outputDescription:'像素掩膜、目标边界与可选 GIS 矢量。',terrainNote:'估计的相对地形不是测量高程产品。分割效果取决于任务、训练数据和影像分辨率。',
 manualFeatureTitle:'图文使用手册',manualFeatureDescription:'从安装、标注，到训练与推理，按模块查看操作说明。',lab:'南方科技大学 · 行星与人工智能实验室 PAI 开发',
 faq4A:'POF Workbench 由南方科技大学行星与人工智能实验室（PAI）开发。首页 NASA 影像仅作为视觉背景，使用影像不代表 NASA 对本软件的认可或背书。'
});
Object.assign(english, {
 navAbout:'About POF',navManual:'User manual',paiShort:'Planetary and Artificial Intelligence Laboratory · PAI',pofDefinition:'Planetary Observation Foundation · POF',paiName:'Planetary and Artificial Intelligence Laboratory · PAI',university:'Southern University of Science and Technology',tabProject:'Projects',tabActive:'Active learning',
 projectTitle:'One project. Distinct tasks.',projectDescription:'Organize multiple research targets within a project, keeping each task’s images, labels, models and training rounds separate.',projectNote:'Projects and tasks · Separate data and models',
 activeTitle:'Continue from an existing model.',activeDescription:'Select a model, recommend regions, review labels and train with completed annotations. Or begin with a small set of manual labels.',activeNote:'Model selection · Region review · Iterative training',
 trainNote:'Metrics shown belong to the pictured training run and are not a general accuracy claim.',exampleLabel:'Actual interface · metrics belong to the displayed run',screenshotNote:'Actual interface screenshots; results depend on training data, task and image resolution.',
 lab:'Developed by PAI · Southern University of Science and Technology',pofFuture:'POF is designed to grow toward recognition and additional planetary-image tasks.',
 faq4A:'POF Workbench is developed by the Planetary and Artificial Intelligence Laboratory (PAI) at Southern University of Science and Technology. NASA imagery is credited visual context; its use does not imply NASA endorsement.'
});
Object.assign(english, {
 openTutorial:'Explore the tutorials', navTutorial:'Tutorials', tutorialEyebrow:'QUICK TUTORIALS / MARS CTX', tutorialTitle:'Learn with Mesa.',
 tutorialIntro:'Follow one Martian landform through four short lessons, from drawing a label to checking a batch segmentation result. Click through at your own pace.',
 tutorialPlay:'Explore lesson', tutorialClose:'Back to website', tutorialOpen:'Open full walkthrough',
 tutorialNote:'Mars CTX imagery · Demonstration results',
 lessonAnnotation:'Annotation', lessonAnnotationDetail:'Outline a mesa and save a mask.',
 lessonTraining:'Training', lessonTrainingDetail:'Pair data, start training and read the curves.',
 lessonActive:'Active learning', lessonActiveDetail:'Review suggested labels and compare rounds.',
 lessonInference:'Inference', lessonInferenceDetail:'Run a batch and inspect segmentation masks.'
});
Object.assign(zh, {
 openTutorial:'查看教程', navTutorial:'快速教程', tutorialEyebrow:'快速教程 / 火星 CTX 影像', tutorialTitle:'用火星方山练一遍。',
 tutorialIntro:'四段短教程，从描出第一座方山，到检查整批影像的分割结果。点击推进，按自己的节奏学。',
 tutorialPlay:'开始本章', tutorialClose:'返回官网', tutorialOpen:'打开完整教程',
 tutorialNote:'火星 CTX 影像 · 演示结果',
 lessonAnnotation:'标注', lessonAnnotationDetail:'描出方山轮廓，保存为 mask。',
 lessonTraining:'训练', lessonTrainingDetail:'配对影像与标签，启动训练并查看曲线。',
 lessonActive:'主动学习', lessonActiveDetail:'审核推荐标签，用少量新标注训练下一轮。',
 lessonInference:'推理', lessonInferenceDetail:'批量运行，检查分割结果和输出文件。'
});
let language = 'en';
try { if (localStorage.getItem('pof-site-language') === 'zh') language = 'zh'; } catch {}
let releaseState = 'checking';
let release = null;
let selectedView = 'annotate';
const byId = id => document.getElementById(id);
const text = key => (language === 'zh' ? zh[key] : english[key]) || english[key] || key;
function translate() {
 document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
 document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = text(el.dataset.i18n); });
 byId('language').textContent = language === 'zh' ? 'EN' : '中文';
 byId('language').setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
 document.querySelectorAll('[data-manual-link]').forEach(a => a.href = language === 'zh' ? 'manual/index.html' : 'manual/en.html');
  document.querySelectorAll('[data-manual-download]').forEach(a => a.href = `manual/POF-Workbench-Manual-${language.toUpperCase()}.pdf`);
  document.title = language === 'zh' ? 'POF Workbench — 行星影像工作台' : 'POF Workbench — Planetary image annotation and segmentation';
 renderView(false); renderRelease(); renderTutorial();
}
byId('language').addEventListener('click', () => { language = language === 'en' ? 'zh' : 'en'; try { localStorage.setItem('pof-site-language', language); } catch {} translate(); });
const views = {
 project:{src:'assets/projects.webp',alt:'POF project and task overview in dark appearance',number:'02'},
 active:{src:'assets/active-learning.webp',alt:'POF active learning workspace with a selectable trained model',number:'03'},
 annotate: { src:'assets/annotation.webp', alt:'POF annotation canvas and floating editing tools', number:'01' },
 train: { src:'assets/training.webp', alt:'POF training view with demonstration validation curves and terrain estimates', number:'04' },
 predict: { src:'assets/predict.webp', alt:'POF batch inference workspace and file queue', number:'05' }
};
let imageRequest = 0;
function renderView(changeImage = true) {
 const view = views[selectedView];
 if (changeImage) {
  const request = ++imageRequest;
  const target = byId('product-image');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { target.src = view.src; target.alt = view.alt; }
  else {
   const preload = new Image(); preload.src = view.src;
   byId('product-enlarge').setAttribute('aria-busy','true');
   preload.decode().then(() => {
    if (request !== imageRequest) return;
    target.getAnimations().forEach(a=>a.cancel());
    target.src = view.src; target.alt = view.alt;
    target.animate([{opacity:.25,transform:'translateY(12px) scale(.99)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:450,easing:'cubic-bezier(.16,1,.3,1)'});
   }).catch(()=>{}).finally(()=>{if (request === imageRequest) byId('product-enlarge').removeAttribute('aria-busy');});
  }
 }
 document.querySelectorAll('[data-view]').forEach(button => { const active = button.dataset.view === selectedView; button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1; });
 byId('product-panel').setAttribute('aria-labelledby', `tab-${selectedView}`);
 byId('view-title').textContent = text(`${selectedView}Title`);
 byId('view-description').textContent = text(`${selectedView}Description`);
 byId('view-note').textContent = text(`${selectedView}Note`);
 byId('stage-count').textContent = `${view.number} — 05`;
}
const tabButtons = [...document.querySelectorAll('[data-view]')];
tabButtons.forEach(button => {
 button.addEventListener('click', () => { selectedView = button.dataset.view; renderView(); });
 button.addEventListener('keydown', event => {
  let index = tabButtons.indexOf(button);
  if (event.key === 'ArrowRight') index = (index + 1) % tabButtons.length;
  else if (event.key === 'ArrowLeft') index = (index + tabButtons.length - 1) % tabButtons.length;
  else if (event.key === 'Home') index = 0;
  else if (event.key === 'End') index = tabButtons.length - 1;
  else return;
  event.preventDefault(); tabButtons[index].click(); tabButtons[index].focus();
 });
});
const dialog = byId('image-dialog');
byId('product-enlarge').addEventListener('click', () => { byId('dialog-image').src = views[selectedView].src; byId('dialog-image').alt = views[selectedView].alt; dialog.showModal(); });
document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click',()=>{ byId('dialog-image').src=button.dataset.preview; byId('dialog-image').alt=button.querySelector('img').alt; dialog.showModal(); }));
byId('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); byId('mobile-nav').hidden = open; });
byId('mobile-nav').querySelectorAll('a').forEach(link => link.addEventListener('click', () => { byId('mobile-nav').hidden = true; menuButton.setAttribute('aria-expanded','false'); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !byId('mobile-nav').hidden) { byId('mobile-nav').hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.focus(); } });
const header = document.querySelector('.site-header');
let scrollPending = false;
window.addEventListener('scroll', () => { if (!scrollPending) { scrollPending = true; requestAnimationFrame(() => { header.classList.toggle('is-fixed', scrollY > 70);
 if (!matchMedia('(prefers-reduced-motion: reduce)').matches && !byId('tutorial-dialog').open) {
  const poster = byId('tutorial-poster');
  const box = poster.getBoundingClientRect();
  if (box.bottom > 0 && box.top < innerHeight) {
   poster.style.setProperty('--poster-offset', `${Math.max(-14, Math.min(14, (innerHeight / 2 - box.top - box.height / 2) * .035))}px`);
  }
 } scrollPending = false; }); } }, { passive:true });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
 document.documentElement.classList.add('motion-ready');
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold:.08 });
 document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
function renderRelease() {
 const statusKey = { checking:'releaseChecking',missing:'releaseMissing',error:'releaseError',ready:'releaseReady' }[releaseState];
 byId('release-status').textContent = text(statusKey);
 byId('release-version').textContent = release?.version || 'GitHub Releases';
 byId('installer-label').textContent = text('downloadInstaller');
 if (release?.installer) {
  document.querySelectorAll('[data-installer-link]').forEach(link => { link.href = release.installer.browser_download_url; });
  const size = Number(release.installer.size);
  if (size > 0) byId('installer-label').textContent += ` · ${(size / 1048576).toFixed(0)} MB`;
 }
 if (release?.portable) { byId('portable-download').href = release.portable.browser_download_url; byId('portable-download').firstElementChild.textContent = text('downloadPortable'); }
}
const lessons = {
 annotation: { title:'lessonAnnotation', poster:'tutorial-annotation.webp' },
 training: { title:'lessonTraining', poster:'training.webp' },
 active: { title:'lessonActive', poster:'tutorial-active-mesa.webp' },
 inference: { title:'lessonInference', poster:'tutorial-inference-mesa.webp' }
};
let currentLesson = 'annotation';
let tutorialFrame = null;
const chapterButtons = [...document.querySelectorAll('[data-lesson]')];
const tutorialPlay = byId('tutorial-play');
const tutorialPoster = byId('tutorial-poster');
const tutorialClose = byId('tutorial-close');
const tutorialScreen = byId('tutorial-screen');
const tutorialDialog = byId('tutorial-dialog');
const tutorialTheater = document.querySelector('.tutorial-theater');
const tutorialHome = tutorialTheater.parentElement;
const tutorialNextSibling = tutorialTheater.nextElementSibling;


function lessonURL(embedded = false) {
 const url = new URL('assets/tutorial/index.html', location.href);
 url.search = new URLSearchParams({chapter:currentLesson, lang:language, guided:'1', v:'mesa-full-contours-20261109'}).toString();
 if (embedded) {
  url.searchParams.set('embed', '1');
  url.searchParams.set('autoplay', '1');
 }
 return url.href;
}

function renderTutorial() {
 const lesson = lessons[currentLesson];
 const poster = byId('tutorial-image');
 const posterURL = `assets/${lesson.poster}`;
 if (poster.getAttribute('src') !== posterURL) poster.src = posterURL;
 poster.alt = text(lesson.title);
 byId('tutorial-dialog-title').textContent = text(lessons[currentLesson].title);
 byId('tutorial-dismiss').setAttribute('aria-label', language === 'zh' ? '关闭教程' : 'Close tutorial');
 document.querySelectorAll('[data-dialog-lesson]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dialogLesson === currentLesson)));
 chapterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lesson === currentLesson)));
 byId('tutorial-note').textContent = text('tutorialNote');
 tutorialPlay.href = byId('tutorial-open').href = lessonURL();
 if (tutorialFrame) {
  tutorialFrame.title = `POF Workbench · ${text(lesson.title)}`;
  if (tutorialFrame.src !== lessonURL(true)) tutorialFrame.src = lessonURL(true);
 }
}

function closeTutorial() {
 tutorialFrame?.remove();
 tutorialFrame = null;
 tutorialPoster.hidden = false;
 tutorialClose.hidden = true;
 if (tutorialDialog.open) tutorialDialog.close();
 tutorialHome.insertBefore(tutorialTheater, tutorialNextSibling);
}

tutorialPlay.addEventListener('click', event => {
 if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
 event.preventDefault();
 byId('tutorial-dialog-body').append(tutorialTheater);
 tutorialDialog.showModal();
 tutorialFrame = document.createElement('iframe');
 tutorialFrame.src = lessonURL(true);
 tutorialFrame.title = `POF Workbench · ${text(lessons[currentLesson].title)}`;
 tutorialFrame.allowFullscreen = true;
 tutorialScreen.append(tutorialFrame);
 tutorialPoster.hidden = true;
 tutorialClose.hidden = true;
 tutorialFrame.focus();
});
tutorialClose.addEventListener('click', () => {
 closeTutorial();
 tutorialPlay.focus();
});
window.addEventListener('message', event => {
 if (event.origin === location.origin && event.source === tutorialFrame?.contentWindow && event.data?.type === 'pof-tutorial-close') closeTutorial();
});
byId('tutorial-dismiss').addEventListener('click', closeTutorial);
tutorialDialog.addEventListener('close', () => {
 if (tutorialFrame) closeTutorial();
 tutorialPlay.focus();
});
document.querySelector('.tutorial-dialog-brand').addEventListener('click', event => {
 event.preventDefault();
 closeTutorial();
});
document.querySelectorAll('[data-dialog-lesson]').forEach(button => button.addEventListener('click', () => {
 if (currentLesson === button.dataset.dialogLesson) return;
 currentLesson = button.dataset.dialogLesson;
 renderTutorial();
}));
chapterButtons.forEach(button => button.addEventListener('click', () => {
 if (currentLesson === button.dataset.lesson) return;
 closeTutorial();
 currentLesson = button.dataset.lesson;
 renderTutorial();
}));
if ('IntersectionObserver' in window) {
 const visibility = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting && !tutorialDialog.open) tutorialFrame?.contentWindow?.__POF_PREVIEW?.pause();
 });
 visibility.observe(tutorialScreen);
}

translate();
async function loadRelease() {
 try {
  const response = await fetch('https://api.github.com/repos/Baozi-Pei/POF-Releases/releases/latest', { headers:{ Accept:'application/vnd.github+json' }, signal:AbortSignal.timeout(10000) });
  if (response.status === 404) releaseState = 'missing';
  else { if (!response.ok) throw new Error(`GitHub ${response.status}`); release = selectRelease(await response.json()); releaseState = release.installer || release.portable ? 'ready' : 'missing'; }
 } catch { releaseState = 'error'; }
 renderRelease();
}
loadRelease();

installMotion();
