/* ===== 翻译模块 =====
   三种用法:
   ① 单词默写 / ② 短语默写 —— 按类别分块,卡片式默写:看中文 → 拼英文 → 回车当场核对一个,
      拼错的隔几个词后重现,难拼的给记忆钩子。重心在「能拼出来」。
   ③ 主题整句 —— 原有主题词包默写 + 整句翻译(自评)。 */
(function () {
  const D = window.TRANSLATE || {};
  const WORDCATS = D.wordCats || [];
  const PHRASECATS = D.phraseCats || [];
  const TOPICS = D.topics || [];
  const app = document.getElementById('app');
  const GAP = 4;                         // 默错的词:间隔 N 个后重现
  let mode = 'words';                    // words | phrases | topics

  /* ---------- 工具 ---------- */
  function norm(s) { return (s || '').trim().toLowerCase().replace(/[.,!?;:'"’]/g, '').replace(/\s+/g, ' '); }
  function accept(input, item) {
    const set = [item.en, ...(item.alt || [])].map(norm);
    return set.includes(norm(input));
  }
  function esc(s) { return (s || '').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function tdata() { return Store.load().translate; }
  function catStore(key) { const t = tdata(); t[key] = t[key] || { mastered: [], times: 0 }; return t[key]; }
  function keyOf(kind, cat) { return (kind === 'word' ? 'dw_' : 'dp_') + cat.id; }
  function catsOf(kind) { return kind === 'word' ? WORDCATS : PHRASECATS; }

  /* ---------- 生词库 / 熟词库(按 单词/短语 各一套,按 en 索引) ---------- */
  function books() {
    const t = tdata();
    t.books = t.books || {};
    ['word', 'phrase'].forEach(k => { t.books[k] = t.books[k] || { known: [], new: [], deleted: [] }; });
    // 升级旧数据(没有 deleted 字段)
    ['word', 'phrase'].forEach(k => { t.books[k].deleted = t.books[k].deleted || []; });
    return t.books;
  }
  function bk(kind) { return books()[kind]; }
  function inList(arr, en) { return arr.indexOf(en) >= 0; }
  function isKnown(kind, en) { return inList(bk(kind).known, en); }
  function isNew(kind, en) { return inList(bk(kind).new, en); }
  function pull(arr, en) { const i = arr.indexOf(en); if (i >= 0) arr.splice(i, 1); }
  function addKnown(kind, en) { const b = bk(kind); if (!inList(b.known, en)) b.known.push(en); pull(b.new, en); Store.save(); }
  function addNew(kind, en) { const b = bk(kind); if (!inList(b.new, en)) b.new.push(en); pull(b.known, en); Store.save(); }
  function removeNew(kind, en) { pull(bk(kind).new, en); Store.save(); }
  function removeKnown(kind, en) { pull(bk(kind).known, en); Store.save(); }
  function isDeleted(kind, en) { return inList(bk(kind).deleted, en); }
  function deleteItem(kind, en) {
    const b = bk(kind);
    pull(b.known, en); pull(b.new, en);
    if (!inList(b.deleted, en)) b.deleted.push(en);
    Store.save();
  }
  // en -> item(取首个匹配,用于库视图展示)
  const _idx = {};
  function itemIndex(kind) {
    if (_idx[kind]) return _idx[kind];
    const m = {}; catsOf(kind).forEach(c => c.items.forEach(it => { if (!m[it.en]) m[it.en] = it; }));
    return (_idx[kind] = m);
  }

  /* ---------- 顶层外壳 ---------- */
  function render() {
    app.innerHTML = `
      <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;">
        <h1 style="margin-bottom:0;">翻译 · 默写</h1>
        <a class="btn ghost sm" href="records.html" style="margin-left:auto;">📊 记录</a>
      </div>
      <p class="sub">看中文,把英文<b>默写</b>出来。回车当场对答案,拼错的会再考你一遍。六级翻译考的就是「见中文 → 套对的词/搭配」。</p>
      <div class="seg" id="mode-seg" style="margin-bottom:18px;flex-wrap:wrap;">
        <button data-m="words" class="${mode === 'words' ? 'active' : ''}">单词默写</button>
        <button data-m="phrases" class="${mode === 'phrases' ? 'active' : ''}">短语默写</button>
        <button data-m="topics" class="${mode === 'topics' ? 'active' : ''}">主题整句</button>
      </div>
      <div id="stage"></div>`;
    app.querySelectorAll('#mode-seg button').forEach(b => b.onclick = () => { mode = b.dataset.m; render(); });
    if (mode === 'words') renderCatList(WORDCATS, 'word');
    else if (mode === 'phrases') renderCatList(PHRASECATS, 'phrase');
    else renderTopics();
  }

  /* ---------- 类别卡片列表 ---------- */
  function renderCatList(cats, kind) {
    const stage = document.getElementById('stage');
    let cards = '';
    cats.forEach((c, i) => {
      const st = catStore(keyOf(kind, c));
      const activeItems = c.items.filter(it => !isDeleted(kind, it.en));
      const masteredInCat = activeItems.filter(it => st.mastered.includes(it.en)).length;
      const ratio = activeItems.length ? masteredInCat / activeItems.length : 0;
      cards += `<div class="mod-card block-card" data-i="${i}" style="cursor:pointer;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <h3 style="margin:0;font-size:16px;">${c.name}</h3>
          <span class="badge ${st.times ? 'l3' : 'l1'}">${kind === 'word' ? '词' : '短语'} ${c.items.length}</span>
        </div>
        <p style="margin:8px 0 6px;color:var(--text-dim);font-size:13px;">${c.tag} · 已默会 ${masteredInCat}</p>
        <div class="bar"><i style="width:${Math.round(ratio * 100)}%"></i></div>
        <div class="meta">练习 ${st.times} 次</div>
      </div>`;
    });
    const b = bk(kind);
    const bookCards = `
      <div class="mod-card block-card" data-book="new" style="cursor:pointer;border-color:var(--yellow);">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <h3 style="margin:0;font-size:16px;">📒 生词库</h3>
          <span class="badge l1">${b.new.length}</span>
        </div>
        <p style="margin:8px 0 0;color:var(--text-dim);font-size:13px;">你手动标记的生词,可单独默写</p>
      </div>
      <div class="mod-card block-card" data-book="known" style="cursor:pointer;border-color:var(--green);">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <h3 style="margin:0;font-size:16px;">⭐ 熟词库</h3>
          <span class="badge l3">${b.known.length}</span>
        </div>
        <p style="margin:8px 0 0;color:var(--text-dim);font-size:13px;">第一次就默对的,自动收进这里</p>
      </div>`;
    stage.innerHTML = `<div class="cards block-cards">${cards}${bookCards}</div>
      <p class="hint" style="margin-top:18px;">共 ${cats.length} 类 · ${cats.reduce((a, c) => a + c.items.length, 0)} 条。点类别开始默写;默写时 <span class="kbd">↑</span> 加入生词库、<span class="kbd">↓</span> 移出,第一次默对自动进熟词库。</p>`;
    stage.querySelectorAll('.block-card').forEach(card => card.onclick = () => {
      if (card.dataset.book) renderBook(kind, card.dataset.book);
      else startDrill(kind, cats[+card.dataset.i]);
    });
  }

  /* ---------- 生词库 / 熟词库 视图 ---------- */
  function renderBook(kind, which) {
    const b = bk(kind);
    const ens = which === 'new' ? b.new : b.known;
    const idx = itemIndex(kind);
    const items = ens.map(en => idx[en]).filter(Boolean);
    const title = which === 'new' ? '📒 生词库' : '⭐ 熟词库';
    const kindName = kind === 'word' ? '单词' : '短语';
    app.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
        <button class="btn ghost sm" id="bk-back">← 返回</button>
        <h1 style="margin:0;font-size:20px;">${title}</h1>
        <span class="lbl" style="color:var(--text-faint);">${kindName} · ${items.length} 条</span>
        ${items.length ? `<button class="btn sm" id="bk-drill" style="margin-left:auto;">默写这些 (${items.length})</button>` : ''}
      </div>
      <div id="bk-list"></div>`;
    document.getElementById('bk-back').onclick = render;
    if (items.length) document.getElementById('bk-drill').onclick = () =>
      startDrill(kind, { id: 'book_' + which, name: title, tag: kindName, items }, null, { includeKnown: which === 'known' });
    const list = document.getElementById('bk-list');
    if (!items.length) { list.innerHTML = `<div class="empty">还没有${which === 'new' ? '生词' : '熟词'}。默写时${which === 'new' ? '按 ↑ 加入生词库' : '第一次默对会自动进来'}。</div>`; return; }
    list.className = 'book-list';
    list.innerHTML = items.map((it, i) => {
      const syn = (it.alt && it.alt.length) ? `<span style="color:var(--text-faint);font-size:12.5px;"> · 也可:${esc(it.alt.slice(0, 3).join(' / '))}</span>` : '';
      return `<div class="book-row">
        <span class="bw">${esc(it.en)}</span>
        <span class="bm">${esc(it.zh)}${syn}</span>
        <button class="speak" data-spk="${esc(it.en)}">🔊</button>
        <button class="speak" data-rm="${esc(it.en)}" title="移出" style="border-color:var(--red);color:var(--red);">✕</button>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-spk]').forEach(btn => btn.onclick = () => speak(btn.dataset.spk));
    list.querySelectorAll('[data-rm]').forEach(btn => btn.onclick = () => {
      (which === 'new' ? removeNew : removeKnown)(kind, btn.dataset.rm);
      renderBook(kind, which);
    });
  }

  /* ---------- 默写卡片 ---------- */
  let dz = null;   // {kind,cat,key,queue,pos,mastered:Set,correct,wrong,phase,item,origItems}
  function startDrill(kind, cat, subset, opts) {
    opts = opts || {};
    let items = subset || cat.items;
    // 删除的词永久消失
    items = items.filter(it => !isDeleted(kind, it.en));
    // 熟词只待在熟词库,不再出现在默写里(熟词库自身的复习除外)
    if (!opts.includeKnown) items = items.filter(it => !isKnown(kind, it.en));
    if (!items.length) return drillEmpty(kind, cat);
    dz = {
      kind, cat, key: keyOf(kind, cat), opts, origItems: items.slice(),
      queue: shuffle(items.slice()), pos: 0,
      mastered: new Set(), seen: new Set(), correct: 0, wrong: 0,
      phase: 'ask', item: null, total: items.length
    };
    drawCard();
  }
  function drillEmpty(kind, cat) {
    app.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <button class="btn ghost sm" id="de-back">← 返回</button>
        <h1 style="margin:0;font-size:20px;">${cat.name}</h1>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:44px;">🎉</div>
        <h2 style="margin:6px 0;">这一类已全部进入熟词库</h2>
        <p style="color:var(--text-dim);">熟词只待在 ⭐ 熟词库 里,不再出现在默写中。想复习可去熟词库点「默写这些」。</p>
        <button class="btn ghost" id="de-list" style="margin-top:8px;">返回列表</button>
      </div>`;
    document.getElementById('de-back').onclick = render;
    document.getElementById('de-list').onclick = render;
  }

  function requeue(item) {
    dz.queue.splice(Math.min(dz.pos + 1 + GAP, dz.queue.length), 0, item);
  }
  function remaining() { return dz.queue.length - dz.pos; }

  function drawShell() {
    const c = dz.cat;
    app.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
        <button class="btn ghost sm" id="dz-back">← 返回</button>
        <h1 style="margin:0;font-size:20px;">${c.name}</h1>
        <span class="lbl" style="color:var(--text-faint);">${dz.kind === 'word' ? '单词' : '短语'}默写</span>
      </div>
      <div class="progress-line"><div class="track"><i id="dz-prog"></i></div><span class="lbl" id="dz-lbl"></span></div>
      <div id="dz-stage"></div>`;
    document.getElementById('dz-back').onclick = () => { saveDrill(false); render(); };
  }
  function updateProg() {
    const r = dz.mastered.size / dz.total;
    document.getElementById('dz-prog').style.width = Math.round(r * 100) + '%';
    document.getElementById('dz-lbl').textContent =
      `已默会 ${dz.mastered.size}/${dz.total} · 对 ${dz.correct} 错 ${dz.wrong} · 剩 ${remaining()}`;
  }

  // 在中文句子里把"要翻译的词"(ex.mk,数据里已标好)标蓝
  function markZh(sentence, mk) {
    const i = mk ? sentence.indexOf(mk) : -1;
    if (i < 0) return esc(sentence);
    return esc(sentence.slice(0, i)) + `<span class="kw-zh">${esc(mk)}</span>` + esc(sentence.slice(i + mk.length));
  }

  function drawCard() {
    if (dz.pos >= dz.queue.length) return drillDone();
    if (!document.getElementById('dz-stage')) drawShell();
    const it = dz.item = dz.queue[dz.pos];
    dz.phase = 'ask';
    const posTag = it.pos ? `<span style="color:var(--text-faint);font-size:13px;margin-left:6px;">${it.pos}</span>` : '';
    // 题目 = 例句的中文翻译,把要翻译的那个词(ex.mk)标蓝
    const markWord = (it.ex && it.ex.mk) ? it.ex.mk : it.zh;
    const qHTML = it.ex ? markZh(it.ex.zh, it.ex.mk) : esc(it.zh);
    const stage = document.getElementById('dz-stage');
    stage.innerHTML = `
      <div class="card">
        <div style="font-size:20px;font-weight:600;line-height:1.7;">${qHTML}</div>
        <div style="margin-top:10px;font-size:14px;color:var(--text-dim);">✍️ 翻译标蓝的词:<b style="color:var(--accent);font-size:17px;">${esc(markWord)}</b>${posTag}</div>
        <input id="dz-in" class="trans-input" style="min-height:auto;height:46px;margin-top:16px;" placeholder="默写英文…" autocomplete="off" autocapitalize="off" spellcheck="false">
        <div id="dz-res" style="min-height:26px;margin-top:12px;"></div>
        <div class="btn-row">
          <button class="btn" id="dz-go">核对 ↵</button>
          <button class="btn ghost" id="dz-show">显示答案</button>
          <button class="btn ghost" id="dz-skip" style="color:var(--red);border-color:var(--red-soft);">🗑 删除</button>
          <button class="btn ghost" id="dz-spk">🔊 读</button>
          <button class="btn ghost" id="dz-new">📒 生词</button>
        </div>
        <div class="hint" id="dz-bookhint" style="margin-top:8px;"></div>
      </div>`;
    const inp = document.getElementById('dz-in');
    document.getElementById('dz-go').onclick = go;
    document.getElementById('dz-show').onclick = revealGiveUp;
    document.getElementById('dz-skip').onclick = skip;
    document.getElementById('dz-spk').onclick = () => speak(it.en);
    document.getElementById('dz-new').onclick = () => markNew(!isNew(dz.kind, it.en));
    inp.onkeydown = e => {
      if (e.key === 'Enter') { e.preventDefault(); go(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); markNew(true); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); markNew(false); }
    };
    inp.focus();
    updateNewBtn();
    updateProg();
  }

  function markNew(add) {
    if (!dz || !dz.item) return;
    (add ? addNew : removeNew)(dz.kind, dz.item.en);
    updateNewBtn();
  }
  function updateNewBtn() {
    const it = dz.item, btn = document.getElementById('dz-new'), hint = document.getElementById('dz-bookhint');
    if (!btn) return;
    const isN = isNew(dz.kind, it.en), isK = isKnown(dz.kind, it.en);
    btn.textContent = isN ? '📒 已在生词库 ✓' : '📒 生词';
    btn.classList.toggle('green', isN);
    hint.innerHTML = `<span class="kbd">↑</span> 加入生词库 · <span class="kbd">↓</span> 移出 · 第一次默对自动进熟词库`
      + (isK ? ' · <span style="color:var(--green);">⭐ 已在熟词库</span>' : '');
  }

  function answerHTML(it, ok, gaveUp) {
    const label = dz && dz.kind === 'word' ? '同义/也对' : '其它说法';
    const others = (it.alt && it.alt.length) ? `<div style="font-size:16px;margin-top:8px;line-height:1.6;"><span style="color:var(--text-dim);font-size:13px;">${label}:</span> ${it.alt.map(a => `<b style="color:var(--accent);">${esc(a)}</b>`).join('<span style="color:var(--text-faint);"> / </span>')}</div>` : '';
    const hook = it.hook ? `<div style="color:var(--yellow);font-size:13px;margin-top:4px;">💡 ${esc(it.hook)}</div>` : '';
    const ex = it.ex ? `<div class="dz-ex"><span class="dz-ex-en">${boldEn(it.ex.en, it.en)}</span> <button class="dz-ex-spk" data-spk="${esc(it.ex.en)}">🔊</button></div>` : '';
    const head = ok
      ? `<span style="color:var(--green);font-weight:700;">✓ 正确</span> &nbsp;<b style="color:var(--green);">${esc(it.en)}</b>`
      : `<span style="color:var(--red);font-weight:700;">✗ ${gaveUp ? '答案' : '再来一遍'}</span> &nbsp;<b style="color:var(--accent);">${esc(it.en)}</b>`;
    return `<div>${head}</div>${others}${hook}${ex}`;
  }
  // 例句里把目标词标蓝(原形匹配,匹配不到就原样显示)
  function boldEn(sentence, en) {
    const i = sentence.toLowerCase().indexOf((en || '').toLowerCase());
    if (i < 0) return esc(sentence);
    return esc(sentence.slice(0, i)) + `<b style="color:var(--accent);">${esc(sentence.slice(i, i + en.length))}</b>` + esc(sentence.slice(i + en.length));
  }
  function bindExSpeak() {
    const b = document.querySelector('#dz-res .dz-ex-spk');
    if (b) b.onclick = () => speak(b.dataset.spk);
  }

  function check() {
    const inp = document.getElementById('dz-in');
    const en = dz.item.en;
    const ok = accept(inp.value, dz.item);
    const firstTry = !dz.seen.has(en);      // 本轮第一次作答这个词
    dz.seen.add(en);
    dz.phase = 'done';
    inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
    if (ok) {
      dz.correct++; dz.mastered.add(en);
      if (firstTry) addKnown(dz.kind, en);  // 第一次就默对 → 自动进熟词库
      saveDrill(false);
    } else { dz.wrong++; requeue(dz.item); }
    document.getElementById('dz-res').innerHTML = answerHTML(dz.item, ok, false)
      + (ok && firstTry ? `<div style="color:var(--green);font-size:12.5px;margin-top:4px;">⭐ 第一次就默对,已收进熟词库</div>` : '');
    bindExSpeak();
    document.getElementById('dz-go').textContent = '下一个 ↵';
    updateNewBtn();
    inp.focus();                            // 保持输入框可编辑、保持焦点(可继续照着打)
    updateProg();
  }
  function revealGiveUp() {
    if (dz.phase === 'done') return next();
    const inp = document.getElementById('dz-in');
    dz.seen.add(dz.item.en);                // 看过答案,之后默对不再算「第一次」
    dz.phase = 'done';
    document.getElementById('dz-res').innerHTML = answerHTML(dz.item, false, true);
    bindExSpeak();
    requeue(dz.item);                       // 给过答案的也再考一遍
    document.getElementById('dz-go').textContent = '下一个 ↵';
    inp.value = '';                         // 清空,方便照着答案练习打字
    inp.classList.remove('ok', 'bad');
    inp.focus();                            // 不禁用,给你打字的自由
  }
  function skip() {                          // 删除:永久移除,不再出现在任何默写(答题前/答题后都可删)
    deleteItem(dz.kind, dz.item.en);
    next();
  }
  function next() { dz.pos++; drawCard(); }
  function go() { dz.phase === 'ask' ? check() : next(); }

  function drillDone() {
    saveDrill(true);
    const c = dz.cat, opts = dz.opts;
    const missed = dz.origItems.filter(it => !dz.mastered.has(it.en));
    const stage = document.getElementById('dz-stage') || (drawShell(), document.getElementById('dz-stage'));
    document.getElementById('dz-prog').style.width = '100%';
    document.getElementById('dz-lbl').textContent = `本次默会 ${dz.mastered.size}/${dz.total}`;
    stage.innerHTML = `
      <div class="card" style="text-align:center;">
        <div style="font-size:44px;">🎉</div>
        <h2 style="margin:6px 0;">本轮完成</h2>
        <p style="color:var(--text-dim);">默对 <b style="color:var(--green);">${dz.correct}</b> · 默错 <b style="color:var(--red);">${dz.wrong}</b> · 全部清空</p>
        <div class="btn-row" style="justify-content:center;">
          <button class="btn" id="dz-again">再来一轮</button>
          ${missed.length ? `<button class="btn green" id="dz-miss">只练默错的 (${missed.length})</button>` : ''}
          <button class="btn ghost" id="dz-list">返回列表</button>
        </div>
      </div>`;
    document.getElementById('dz-again').onclick = () => startDrill(dz.kind, c, null, opts);
    document.getElementById('dz-list').onclick = render;
    if (missed.length) document.getElementById('dz-miss').onclick = () => startDrill(dz.kind, c, missed, opts);
  }

  function saveDrill(finished) {
    if (!dz) return;
    const st = catStore(dz.key);
    const set = new Set(st.mastered);
    dz.mastered.forEach(en => set.add(en));
    st.mastered = Array.from(set);
    if (finished) st.times = (st.times || 0) + 1;
    Store.save();
  }
  window.addEventListener('pagehide', () => saveDrill(false));

  /* ---------- 主题整句(原有玩法) ---------- */
  let curTopic = TOPICS[0] ? TOPICS[0].id : null, topicTab = 'words';
  function renderTopics() {
    const stage = document.getElementById('stage');
    if (!TOPICS.length) { stage.innerHTML = '<div class="empty">暂无主题</div>'; return; }
    const bar = TOPICS.map(t => `<button data-id="${t.id}" class="${t.id === curTopic ? 'active' : ''}">${t.name}</button>`).join('');
    stage.innerHTML = `<div id="topic-bar" class="seg" style="margin-bottom:16px;flex-wrap:wrap;">${bar}</div><div id="tbody"></div>`;
    stage.querySelectorAll('#topic-bar button').forEach(b => b.onclick = () => { curTopic = b.dataset.id; renderTopics(); });
    renderTopic();
  }
  function topic() { return TOPICS.find(t => t.id === curTopic); }
  function renderTopic() {
    const t = topic(), body = document.getElementById('tbody');
    body.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;">
        <span class="tag">${t.tag}</span>
        <div class="seg">
          <button id="tt-w" class="${topicTab === 'words' ? 'active' : ''}">主题词默写</button>
          <button id="tt-s" class="${topicTab === 'sentences' ? 'active' : ''}">整句翻译</button>
        </div>
      </div><div id="tinner"></div>`;
    document.getElementById('tt-w').onclick = () => { topicTab = 'words'; renderTopic(); };
    document.getElementById('tt-s').onclick = () => { topicTab = 'sentences'; renderTopic(); };
    if (topicTab === 'words') topicWords(); else topicSentences();
  }
  function topicWords() {
    const t = topic(), inner = document.getElementById('tinner');
    inner.innerHTML = `<p class="hint" style="margin:0 0 12px;">看中文,拼写英文。<span class="kbd">Enter</span> 核对。</p>
      <div id="rows"></div>
      <div class="btn-row"><button class="btn" id="checkall">全部核对</button>
        <button class="btn ghost" id="reveal">显示全部答案</button>
        <span id="score" class="lbl" style="color:var(--text-dim);"></span></div>`;
    const rows = document.getElementById('rows');
    t.words.forEach((w, i) => {
      const div = document.createElement('div');
      div.className = 'dict-row';
      div.innerHTML = `<span class="zh-word">${esc(w.zh)}</span>
        <input class="trans-input" style="min-height:auto;height:38px;" id="w-${i}" placeholder="英文" autocomplete="off" spellcheck="false">
        <span class="ans" id="a-${i}" style="min-width:150px;"></span>
        <button class="speak" data-speak="${esc(w.en)}">🔊</button>`;
      rows.appendChild(div);
      const inp = div.querySelector('#w-' + i), a = div.querySelector('#a-' + i);
      const ck = () => {
        const ok = accept(inp.value, w);
        inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
        a.style.color = ok ? 'var(--green)' : 'var(--red)';
        a.textContent = ok ? '✓' : '✗ ' + w.en;
        score();
      };
      inp.onkeydown = e => { if (e.key === 'Enter') ck(); };
      inp._check = ck;
    });
    bindSpeak(inner);
    document.getElementById('checkall').onclick = () => t.words.forEach((_, i) => document.getElementById('w-' + i)._check());
    document.getElementById('reveal').onclick = () =>
      t.words.forEach((w, i) => { const e = document.getElementById('w-' + i); e.value = w.en; e._check(); });
    function score() {
      const got = t.words.filter((w, i) => accept(document.getElementById('w-' + i).value, w)).length;
      document.getElementById('score').textContent = `对 ${got}/${t.words.length}`;
      if (got === t.words.length) { tdata()[t.id] = { ...(tdata()[t.id] || {}), done: true }; Store.save(); }
    }
  }
  function topicSentences() {
    const t = topic(), inner = document.getElementById('tinner');
    inner.innerHTML = `<p class="hint" style="margin:0 0 12px;">先自己写,再点「对照参考译文」。整句为自评,重在思路与用词。</p>` +
      t.sentences.map((s, i) => `
        <div class="card" style="margin-bottom:14px;">
          <div style="font-size:16px;">${esc(s.zh)}</div>
          <textarea class="trans-input" id="s-${i}" placeholder="在此写下你的英文翻译…"></textarea>
          <div class="btn-row" style="margin-top:8px;">
            <button class="btn sm" data-ref="${i}">对照参考译文</button>
            <button class="btn ghost sm" data-speak="${esc(s.en)}">🔊 朗读参考</button>
          </div>
          <div class="reveal hidden" id="ref-${i}"><b>参考译文:</b>${esc(s.en)}</div>
        </div>`).join('');
    bindSpeak(inner);
    inner.querySelectorAll('[data-ref]').forEach(b => b.onclick = () =>
      document.getElementById('ref-' + b.dataset.ref).classList.remove('hidden'));
  }
  function bindSpeak(root) {
    root.querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); });
  }

  render();
})();
