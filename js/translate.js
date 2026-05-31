/* ===== 翻译模块:主题词默写 + 整句翻译 ===== */
(function () {
  const T = (window.TRANSLATE && window.TRANSLATE.topics) || [];
  const stage = document.getElementById('stage');
  const bar = document.getElementById('topic-bar');
  let cur = T[0] ? T[0].id : null;
  let tab = 'words';

  function norm(s) { return (s || '').trim().toLowerCase().replace(/[.,!?;:'"]/g, '').replace(/\s+/g, ' '); }
  function accept(input, item) {
    const set = [item.en, ...(item.alt || [])].map(norm);
    return set.includes(norm(input));
  }
  function esc(s) { return (s || '').replace(/"/g, '&quot;'); }

  function renderBar() {
    bar.innerHTML = T.map(t => `<button data-id="${t.id}" class="${t.id === cur ? 'active' : ''}">${t.name}</button>`).join('');
    bar.querySelectorAll('button').forEach(b => b.onclick = () => { cur = b.dataset.id; renderBar(); render(); });
  }
  function topic() { return T.find(t => t.id === cur); }

  function render() {
    const t = topic();
    if (!t) { stage.innerHTML = '<div class="empty">暂无主题</div>'; return; }
    stage.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;">
        <span class="tag">${t.tag}</span>
        <div class="seg">
          <button id="t-words" class="${tab === 'words' ? 'active' : ''}">主题词默写</button>
          <button id="t-sent" class="${tab === 'sentences' ? 'active' : ''}">整句翻译</button>
        </div>
      </div>
      <div id="body"></div>`;
    document.getElementById('t-words').onclick = () => { tab = 'words'; render(); };
    document.getElementById('t-sent').onclick = () => { tab = 'sentences'; render(); };
    if (tab === 'words') renderWords(); else renderSentences();
  }

  function renderWords() {
    const t = topic();
    const body = document.getElementById('body');
    body.innerHTML = `
      <p class="hint" style="margin:0 0 12px;">看中文,拼写英文(可接受常见同义写法)。<span class="kbd">Enter</span> 核对。</p>
      <div id="rows"></div>
      <div class="btn-row"><button class="btn" id="checkall">全部核对</button>
        <button class="btn ghost" id="reveal">显示全部答案</button>
        <span id="score" class="lbl" style="color:var(--text-dim);"></span></div>`;
    const rows = document.getElementById('rows');
    t.words.forEach((w, i) => {
      const div = document.createElement('div');
      div.className = 'dict-row';
      div.innerHTML = `<span class="zh-word">${w.zh}</span>
        <input class="trans-input" style="min-height:auto;height:38px;" id="w-${i}" placeholder="英文" autocomplete="off">
        <span class="ans" id="a-${i}" style="min-width:150px;"></span>
        <button class="speak" data-speak="${esc(w.en)}">🔊</button>`;
      rows.appendChild(div);
      const inp = div.querySelector('#w-' + i);
      const a = div.querySelector('#a-' + i);
      const check = () => {
        const ok = accept(inp.value, w);
        inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
        a.style.color = ok ? 'var(--green)' : 'var(--red)';
        a.textContent = ok ? '✓' : '✗ ' + w.en;
        score();
      };
      inp.onkeydown = e => { if (e.key === 'Enter') check(); };
      inp._check = check;
    });
    bindSpeak();
    document.getElementById('checkall').onclick = () => { t.words.forEach((_, i) => document.getElementById('w-' + i)._check()); };
    document.getElementById('reveal').onclick = () => {
      t.words.forEach((w, i) => { document.getElementById('w-' + i).value = w.en; document.getElementById('w-' + i)._check(); });
    };
    function score() {
      const got = t.words.filter((w, i) => accept(document.getElementById('w-' + i).value, w)).length;
      document.getElementById('score').textContent = `对 ${got}/${t.words.length}`;
      if (got === t.words.length) { Store.load().translate[t.id] = { ...(Store.load().translate[t.id] || {}), done: true }; Store.save(); }
    }
  }

  function renderSentences() {
    const t = topic();
    const body = document.getElementById('body');
    body.innerHTML = `<p class="hint" style="margin:0 0 12px;">先自己写,再点「对照参考译文」。整句为自评,重在思路与用词。</p>` +
      t.sentences.map((s, i) => `
        <div class="card" style="margin-bottom:14px;">
          <div style="font-size:16px;">${s.zh}</div>
          <textarea class="trans-input" id="s-${i}" placeholder="在此写下你的英文翻译…"></textarea>
          <div class="btn-row" style="margin-top:8px;">
            <button class="btn sm" data-ref="${i}">对照参考译文</button>
            <button class="btn ghost sm" data-speak="${esc(s.en)}">🔊 朗读参考</button>
          </div>
          <div class="reveal hidden" id="ref-${i}"><b>参考译文:</b>${s.en}</div>
        </div>`).join('');
    bindSpeak();
    body.querySelectorAll('[data-ref]').forEach(b => b.onclick = () => {
      document.getElementById('ref-' + b.dataset.ref).classList.remove('hidden');
    });
  }

  function bindSpeak() {
    stage.querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); });
  }

  renderBar();
  render();
})();
