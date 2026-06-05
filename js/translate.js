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
      const masteredInCat = c.items.filter(it => st.mastered.includes(it.en)).length;
      const ratio = c.items.length ? masteredInCat / c.items.length : 0;
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
    stage.innerHTML = `<div class="cards block-cards">${cards}</div>
      <p class="hint" style="margin-top:18px;">共 ${cats.length} 类 · ${cats.reduce((a, c) => a + c.items.length, 0)} 条。点任意类别开始默写。</p>`;
    stage.querySelectorAll('.block-card').forEach(card =>
      card.onclick = () => startDrill(kind, cats[+card.dataset.i]));
  }

  /* ---------- 默写卡片 ---------- */
  let dz = null;   // {kind,cat,key,queue,pos,mastered:Set,correct,wrong,phase,item,origItems}
  function startDrill(kind, cat, subset) {
    const items = subset || cat.items;
    dz = {
      kind, cat, key: keyOf(kind, cat),
      queue: shuffle(items.slice()), pos: 0,
      mastered: new Set(), correct: 0, wrong: 0,
      phase: 'ask', item: null, total: items.length
    };
    drawCard();
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

  function drawCard() {
    if (dz.pos >= dz.queue.length) return drillDone();
    if (!document.getElementById('dz-stage')) drawShell();
    const it = dz.item = dz.queue[dz.pos];
    dz.phase = 'ask';
    const posTag = it.pos ? `<span style="color:var(--text-faint);font-size:14px;margin-left:8px;">${it.pos}</span>` : '';
    const stage = document.getElementById('dz-stage');
    stage.innerHTML = `
      <div class="card">
        <div style="font-size:24px;font-weight:600;line-height:1.5;">${esc(it.zh)}${posTag}</div>
        <input id="dz-in" class="trans-input" style="min-height:auto;height:46px;margin-top:16px;" placeholder="默写英文…" autocomplete="off" autocapitalize="off" spellcheck="false">
        <div id="dz-res" style="min-height:26px;margin-top:12px;"></div>
        <div class="btn-row">
          <button class="btn" id="dz-go">核对 ↵</button>
          <button class="btn ghost" id="dz-show">显示答案</button>
          <button class="btn ghost" id="dz-skip">跳过</button>
          <button class="btn ghost" id="dz-spk">🔊 读</button>
        </div>
      </div>`;
    const inp = document.getElementById('dz-in');
    document.getElementById('dz-go').onclick = go;
    document.getElementById('dz-show').onclick = revealGiveUp;
    document.getElementById('dz-skip').onclick = skip;
    document.getElementById('dz-spk').onclick = () => speak(it.en);
    inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
    inp.focus();
    updateProg();
  }

  function answerHTML(it, ok, gaveUp) {
    const others = (it.alt && it.alt.length) ? `<div style="color:var(--text-dim);font-size:13px;margin-top:4px;">其它说法:${esc(it.alt.join(' / '))}</div>` : '';
    const hook = it.hook ? `<div style="color:var(--yellow);font-size:13px;margin-top:4px;">💡 ${esc(it.hook)}</div>` : '';
    const ex = it.ex ? `<div class="dz-ex"><span class="dz-ex-en">${esc(it.ex.en)}</span> <button class="dz-ex-spk" data-spk="${esc(it.ex.en)}">🔊</button><br><span class="dz-ex-zh">${esc(it.ex.zh)}</span></div>` : '';
    const head = ok
      ? `<span style="color:var(--green);font-weight:700;">✓ 正确</span> &nbsp;<b style="color:var(--green);">${esc(it.en)}</b>`
      : `<span style="color:var(--red);font-weight:700;">✗ ${gaveUp ? '答案' : '再来一遍'}</span> &nbsp;<b style="color:var(--accent);">${esc(it.en)}</b>`;
    return `<div>${head}</div>${others}${hook}${ex}`;
  }
  function bindExSpeak() {
    const b = document.querySelector('#dz-res .dz-ex-spk');
    if (b) b.onclick = () => speak(b.dataset.spk);
  }

  function check() {
    const inp = document.getElementById('dz-in');
    const ok = accept(inp.value, dz.item);
    dz.phase = 'done';
    inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
    if (ok) { dz.correct++; dz.mastered.add(dz.item.en); saveDrill(false); }
    else { dz.wrong++; requeue(dz.item); }
    document.getElementById('dz-res').innerHTML = answerHTML(dz.item, ok, false);
    bindExSpeak();
    document.getElementById('dz-go').textContent = '下一个 ↵';
    inp.focus();                            // 保持输入框可编辑、保持焦点(可继续照着打)
    updateProg();
  }
  function revealGiveUp() {
    if (dz.phase === 'done') return next();
    const inp = document.getElementById('dz-in');
    dz.phase = 'done';
    document.getElementById('dz-res').innerHTML = answerHTML(dz.item, false, true);
    bindExSpeak();
    requeue(dz.item);                       // 给过答案的也再考一遍
    document.getElementById('dz-go').textContent = '下一个 ↵';
    inp.value = '';                         // 清空,方便照着答案练习打字
    inp.classList.remove('ok', 'bad');
    inp.focus();                            // 不禁用,给你打字的自由
  }
  function skip() {                          // 跳过:不揭晓,挪到后面再考
    if (dz.phase === 'done') return next();
    requeue(dz.item); next();
  }
  function next() { dz.pos++; drawCard(); }
  function go() { dz.phase === 'ask' ? check() : next(); }

  function drillDone() {
    saveDrill(true);
    const c = dz.cat;
    const missed = c.items.filter(it => !dz.mastered.has(it.en));
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
    document.getElementById('dz-again').onclick = () => startDrill(dz.kind, c);
    document.getElementById('dz-list').onclick = render;
    if (missed.length) document.getElementById('dz-miss').onclick = () => startDrill(dz.kind, c, missed);
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
