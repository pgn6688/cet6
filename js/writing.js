/* ===== 写作模块:句式库 + 题型范文 + 挖空默写 ===== */
(function () {
  const W = window.WRITING || { patterns: [], topics: [] };
  const stage = document.getElementById('stage');

  function norm(s) { return (s || '').trim().toLowerCase().replace(/\s+/g, ' '); }

  function renderPatterns() {
    const groups = {};
    W.patterns.forEach((p, i) => { (groups[p.use] = groups[p.use] || []).push({ ...p, i }); });
    let html = `<p class="hint" style="margin:0 0 14px;">点「默写」把核心短语变成填空;<span class="kbd">朗读</span> 可听发音。</p>`;
    for (const use in groups) {
      html += `<h2>${use}</h2>`;
      groups[use].forEach(p => {
        html += `<div class="pattern" data-i="${p.i}">
          <div style="color:var(--text-dim);font-size:13px;margin:0 0 6px;">${p.zh}</div>
          <div class="en" id="en-${p.i}">${hl(p.en, p.key)}</div>
          <div class="btn-row" style="margin-top:8px;">
            <button class="btn ghost sm" data-dictate="${p.i}">✍️ 默写这句</button>
            <button class="btn ghost sm" data-speak="${esc(p.en)}">🔊 朗读</button>
          </div>
          <div id="chk-${p.i}"></div>
        </div>`;
      });
    }
    stage.innerHTML = html;
    bindSpeak();
    stage.querySelectorAll('[data-dictate]').forEach(b => b.onclick = () => dictate(+b.dataset.dictate));
  }
  function esc(s) { return s.replace(/"/g, '&quot;'); }
  function hl(en, key) { return key ? en.replace(key, `<b>${key}</b>`) : en; }

  function dictate(i) {
    const p = W.patterns[i];
    const enEl = document.getElementById('en-' + i);
    enEl.innerHTML = p.en.replace(p.key,
      `<input class="cloze-input" style="width:${Math.max(140, p.key.length * 10)}px" id="inp-${i}" placeholder="默写核心短语">`);
    document.getElementById('chk-' + i).innerHTML =
      `<div class="btn-row" style="margin-top:8px;"><button class="btn sm" id="do-${i}">核对</button>
       <button class="btn ghost sm" id="show-${i}">看答案</button> <span id="res-${i}"></span></div>`;
    const inp = document.getElementById('inp-' + i);
    inp.focus();
    const check = () => {
      const ok = norm(inp.value) === norm(p.key);
      inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
      if (ok) { Store.load().writing['p' + i] = { drilled: true }; Store.save(); }
      document.getElementById('res-' + i).innerHTML =
        ok ? '<span style="color:var(--green)">✓ 正确</span>' : `<span style="color:var(--red)">✗ 答案:${p.key}</span>`;
    };
    document.getElementById('do-' + i).onclick = check;
    inp.onkeydown = e => { if (e.key === 'Enter') check(); };
    document.getElementById('show-' + i).onclick = () => { inp.value = p.key; check(); };
  }

  function renderEssayList() {
    let html = `<p class="hint" style="margin:0 0 14px;">选一个题型,看提纲 + 范文,并完成句子默写。</p>`;
    W.topics.forEach(t => {
      const done = (Store.load().writing[t.id] || {}).drilled;
      html += `<div class="list-item" data-id="${t.id}">
        <h3>${t.title} ${done ? '<span style="color:var(--green)">✓</span>' : ''}</h3>
        <span class="tag">${t.type}</span>${t.real ? `<span class="tag" style="background:var(--green-soft);color:#9ff0c9;">${t.real}</span>` : ''}
        <p>${t.prompt.slice(0, 80)}…</p>
      </div>`;
    });
    stage.innerHTML = html;
    stage.querySelectorAll('.list-item').forEach(el => el.onclick = () => renderEssay(el.dataset.id));
  }

  function renderEssay(id) {
    const t = W.topics.find(x => x.id === id);
    stage.innerHTML = `
      <button class="btn ghost sm" id="back">← 返回题型列表</button>
      <h2 style="margin-top:16px;">${t.title}</h2>
      <span class="tag">${t.type}</span>${t.real ? `<span class="tag" style="background:var(--green-soft);color:#9ff0c9;">${t.real}</span>` : ''}
      <div class="card" style="margin-top:14px;">
        <b>📝 题目</b>
        <p style="color:var(--text-dim);font-size:14px;">${t.prompt}</p>
        <b>🧭 写作提纲</b>
        <ul style="color:var(--text-dim);font-size:14px;">${t.outline.map(o => `<li>${o}</li>`).join('')}</ul>
        <b>📖 范文 <button class="btn ghost sm" data-speak="${esc(t.sample.join(' '))}">🔊 朗读全文</button></b>
        <div class="essay" style="margin-top:8px;">${t.sample.map(p => `<p>${p}</p>`).join('')}</div>
      </div>
      <h2>✍️ 句子默写(关键词必须拼对)</h2>
      <div id="cloze"></div>`;
    document.getElementById('back').onclick = renderEssayList;
    bindSpeak();
    const box = document.getElementById('cloze');
    t.cloze.forEach((c, idx) => {
      const div = document.createElement('div');
      div.className = 'card';
      div.style.marginBottom = '12px';
      div.innerHTML = `
        <div style="font-size:15.5px;line-height:2;">${c.s.replace('___', `<input class="cloze-input" style="width:160px" id="c-${idx}" placeholder="填空">`)}</div>
        <p class="hint" style="margin:6px 0 0;">提示:${c.hint}</p>
        <div class="btn-row" style="margin-top:8px;">
          <button class="btn sm" id="ck-${idx}">核对</button>
          <button class="btn ghost sm" id="sh-${idx}">看答案</button>
          <span id="res-${idx}"></span>
        </div>`;
      box.appendChild(div);
      const inp = div.querySelector('#c-' + idx);
      const check = () => {
        const ok = norm(inp.value) === norm(c.a);
        inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
        document.getElementById('res-' + idx).innerHTML = ok
          ? '<span style="color:var(--green)">✓ 正确</span>'
          : `<span style="color:var(--red)">✗ 答案:${c.a}</span>`;
        if (allDone()) { Store.load().writing[t.id] = { drilled: true }; Store.save(); }
      };
      div.querySelector('#ck-' + idx).onclick = check;
      inp.onkeydown = e => { if (e.key === 'Enter') check(); };
      div.querySelector('#sh-' + idx).onclick = () => { inp.value = c.a; check(); };
    });
    function allDone() {
      return t.cloze.every((c, i) => norm(document.getElementById('c-' + i).value) === norm(c.a));
    }
  }

  function bindSpeak() {
    stage.querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); });
  }

  document.querySelectorAll('#w-seg button').forEach(b => b.onclick = () => {
    document.querySelectorAll('#w-seg button').forEach(x => x.classList.toggle('active', x === b));
    if (b.dataset.tab === 'patterns') renderPatterns(); else renderEssayList();
  });

  renderPatterns();
})();
