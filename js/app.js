/* ===== 通用逻辑:本地存储 / 熟练度 / 朗读 / 导航 ===== */
const Store = {
  key: 'cet6_review_v1',
  data: null,
  load() {
    if (this.data) return this.data;
    try { this.data = JSON.parse(localStorage.getItem(this.key)) || {}; }
    catch (e) { this.data = {}; }
    this.data.vocab = this.data.vocab || {};      // { word: {lvl, seen, ok, wrong} }
    this.data.writing = this.data.writing || {};
    this.data.translate = this.data.translate || {};
    this.data.stats = this.data.stats || { streakDay: null, days: 0 };
    return this.data;
  },
  save() { localStorage.setItem(this.key, JSON.stringify(this.data)); }
};

/* 熟练度模型:lvl 0 生词 / 1 眼熟 / 2 熟 / 3 掌握 */
const Vocab = {
  get(word) {
    const d = Store.load().vocab;
    return d[word] || { lvl: 0, seen: 0, ok: 0, wrong: 0 };
  },
  set(word, rec) { Store.load().vocab[word] = rec; Store.save(); },
  markSeen(word) { const r = this.get(word); r.seen++; this.set(word, r); },
  answer(word, correct) {
    const r = this.get(word);
    r.seen++;
    if (correct) { r.ok++; r.lvl = Math.min(3, r.lvl + 1); }
    else { r.wrong++; r.lvl = Math.max(0, r.lvl - 1); }
    this.set(word, r);
    return r;
  },
  levelName(lvl) { return ['生词', '眼熟', '熟悉', '掌握'][lvl] || '生词'; }
};

/* 朗读(浏览器自带,无需音频文件) */
function speak(text) {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.92;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function markNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

function topbar() {
  return `<div class="topbar">
    <a class="logo" href="index.html">CET<span>6</span> · 高效复习</a>
    <nav class="nav">
      <a href="index.html">首页</a>
      <a href="vocab.html">词汇</a>
      <a href="writing.html">写作</a>
      <a href="translate.html">翻译</a>
      <a href="records.html">记录</a>
    </nav>
  </div>`;
}

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function touchDay() {
  const s = Store.load().stats;
  const today = new Date().toISOString().slice(0, 10);
  if (s.streakDay !== today) { s.days = (s.days || 0) + 1; s.streakDay = today; Store.save(); }
}

document.addEventListener('DOMContentLoaded', () => {
  const t = document.getElementById('topbar');
  if (t) t.innerHTML = topbar();
  markNav();
  touchDay();
});
