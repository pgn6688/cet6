/* ===== 词汇模块:单词块 →(学习/认意思/快刷/生词库/熟词库)+ 计时 + 记录 =====
   关键数据(按单词块独立,存 localStorage d.vocabBlocks[bid]):
     lastMode, study{idx}, quiz{order,pos,...}, flash{order,pos,...},
     newSet[]  生词库(单词字符串数组)
     knownSet[] 熟词库(单词字符串数组)
   规则:
   - 熟词库里的词 → 在 认意思/快刷 中消失;学习模式仍保留。
   - 「已掌握」= 熟词库词数(bug 修复)。
   - 认意思答错 / 快刷点"不认识" → 该词不丢到队尾,而是 5 个词后重新出现。
   - 快刷点"不认识" → 自动加入生词库;生词库内的速刷点"不认识"不再重复加入。
   - 块卡片显示"练习次数"(= 该块练习记录条数)。 */
(function () {
  const ALLGROUPS = window.VOCAB || [];
  const ALLWORDS = ALLGROUPS.flatMap(g => g.words.map(w => ({ ...w })));
  const GLOBAL_BY_WORD = {}; ALLWORDS.forEach(w => GLOBAL_BY_WORD[w.w] = w);

  const GROUPS_PER_BLOCK = 40;          // 40 句 × 5 词 = 200 词/块
  const BLOCK_SIZE = GROUPS_PER_BLOCK * 5;
  const REAPPEAR_GAP = 5;               // 错词/不认识:间隔 N 个词后重现
  const blockCount = Math.max(1, Math.ceil(ALLGROUPS.length / GROUPS_PER_BLOCK));

  const app = document.getElementById('app');

  // ---------- 存储 ----------
  function dataRoot() {
    const d = Store.load();
    d.vocabBlocks = d.vocabBlocks || {};
    d.vocabHistory = d.vocabHistory || [];
    return d;
  }
  function blockState(bid) {
    const d = dataRoot();
    d.vocabBlocks[bid] = d.vocabBlocks[bid] || {};
    const st = d.vocabBlocks[bid];
    st.newSet = st.newSet || [];
    st.knownSet = st.knownSet || [];
    return st;
  }
  function saveAll() { Store.save(); }

  function groupsOf(bid) { return ALLGROUPS.slice(bid * GROUPS_PER_BLOCK, bid * GROUPS_PER_BLOCK + GROUPS_PER_BLOCK); }
  function wordsOf(bid) { return groupsOf(bid).flatMap(g => g.words.map(w => ({ ...w }))); }

  // ---------- 计时(本次访问) ----------
  let visit = null, ticker = null;
  function newVisit(bid) { visit = { bid, quizMs: 0, flashMs: 0, running: null, startedAt: 0, practiced: new Set(), quizAnswered: 0, flashGraded: 0 }; }
  function bankTimer() { if (visit && visit.running) { visit[visit.running + 'Ms'] += Date.now() - visit.startedAt; visit.running = null; } }
  function ensureRunning(m) { if (!visit) return; if (visit.running === m) return; if (visit.running) bankTimer(); visit.running = m; visit.startedAt = Date.now(); }
  function liveMs(m) { if (!visit) return 0; let ms = visit[m + 'Ms']; if (visit.running === m) ms += Date.now() - visit.startedAt; return ms; }
  function fmt(ms) { const s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  function endVisitAndSave() {
    if (!visit) return;
    bankTimer();
    const totalMs = visit.quizMs + visit.flashMs;
    if (totalMs >= 1000 || visit.practiced.size) {
      const d = dataRoot();
      d.vocabHistory.unshift({
        block: visit.bid, date: new Date().toISOString(),
        quizSec: Math.round(visit.quizMs / 1000), flashSec: Math.round(visit.flashMs / 1000),
        totalSec: Math.round(totalMs / 1000), words: visit.practiced.size,
        quizAnswered: visit.quizAnswered, flashGraded: visit.flashGraded
      });
      d.vocabHistory = d.vocabHistory.slice(0, 300);
      saveAll();
    }
    visit = null;
  }
  function stopTicker() { if (ticker) { clearInterval(ticker); ticker = null; } }

  // ---------- 统计 ----------
  function knownCount(bid) { return (dataRoot().vocabBlocks[bid] && dataRoot().vocabBlocks[bid].knownSet || []).length; }
  function practiceCount(bid) { return dataRoot().vocabHistory.filter(h => h.block === bid).length; }

  /* ============ 视图 1:单词块列表 ============ */
  function renderBlockList() {
    stopTicker();
    let cards = '';
    for (let b = 0; b < blockCount; b++) {
      const ws = wordsOf(b);
      const known = knownCount(b);
      const ratio = ws.length ? known / ws.length : 0;
      const times = practiceCount(b);
      const lo = b * BLOCK_SIZE + 1, hi = b * BLOCK_SIZE + ws.length;
      cards += `<div class="mod-card block-card" data-bid="${b}" style="cursor:pointer;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <h3 style="margin:0;">单词块 ${b + 1}</h3>
          <span class="lbl" style="color:var(--text-faint);font-size:12px;">第 ${lo}–${hi} 词</span>
        </div>
        <p style="margin:8px 0 10px;">共 ${ws.length} 词 · 已掌握 ${known}</p>
        <div class="bar"><i style="width:${Math.round(ratio * 100)}%"></i></div>
        <div class="meta">练习 ${times} 次</div>
      </div>`;
    }
    app.innerHTML = `
      <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;">
        <h1 style="margin-bottom:0;">词汇 · 单词块</h1>
        <a class="btn ghost sm" href="records.html" style="margin-left:auto;">📊 练习记录</a>
      </div>
      <p class="sub">点进任意单词块,选择 学习 / 认意思 / 快刷,或查看 生词库 / 熟词库。「已掌握」= 熟词库词数。</p>
      <div class="cards block-cards">${cards}</div>
      <p class="hint" style="margin-top:18px;">共 ${ALLWORDS.length} 词 · ${blockCount} 个单词块(词库扩充后自动新增)。</p>`;
    app.querySelectorAll('.block-card').forEach(c => c.onclick = () => enterBlock(+c.dataset.bid));
  }

  /* ============ 视图 2:单词块内部 ============ */
  let curBid = null, curMode = 'study';
  let groups = [], words = [], byWord = {};
  let newSet = new Set(), knownSet = new Set();
  let studyIdx = 0, quiz = null, flash = null, flashScope = 'all';

  function activeWords() { return words.filter(w => !knownSet.has(w.w)); }   // 认意思/快刷用:排除熟词
  function wordsFromKeys(keys) { return keys.map(k => byWord[k]).filter(Boolean); }
  function orderWeak(arr) { return shuffle(arr).sort((a, b) => Vocab.get(a.w).lvl - Vocab.get(b.w).lvl); }

  function enterBlock(bid) {
    curBid = bid;
    groups = groupsOf(bid);
    words = wordsOf(bid);
    byWord = {}; words.forEach(w => byWord[w.w] = w);
    newVisit(bid);
    const st = blockState(bid);
    newSet = new Set(st.newSet);
    knownSet = new Set(st.knownSet);
    curMode = ['study', 'quiz', 'flash', 'newbook', 'knownbook'].includes(st.lastMode) ? st.lastMode : 'study';
    if (curMode === 'newbook' || curMode === 'knownbook') curMode = 'study'; // 库不作为"上次模式"恢复
    studyIdx = st.study ? Math.min(Math.max(0, st.study.idx | 0), Math.max(0, groups.length - 1)) : 0;
    quiz = restoreQueue(st.quiz, 'quiz');
    flash = restoreQueue(st.flash, 'flash');
    renderBlockShell();
    switchMode(curMode);
  }

  function restoreQueue(sm, kind) {
    if (!sm || !Array.isArray(sm.order) || !sm.order.length) return null;
    const queue = sm.order.map(s => byWord[s]).filter(w => w && !knownSet.has(w.w));
    if (!queue.length || (sm.pos | 0) >= queue.length) return null;
    if (kind === 'quiz') return { queue, pos: sm.pos | 0, correct: sm.correct | 0, answered: sm.answered | 0 };
    return { queue, pos: sm.pos | 0, known: sm.known | 0 };
  }

  function persistBlock() {
    const st = blockState(curBid);
    st.lastMode = (curMode === 'newbook' || curMode === 'knownbook') ? 'study' : curMode;
    st.study = { idx: studyIdx };
    st.quiz = quiz ? { order: quiz.queue.map(w => w.w), pos: quiz.pos, correct: quiz.correct, answered: quiz.answered } : null;
    st.flash = (flash && flashScope === 'all') ? { order: flash.queue.map(w => w.w), pos: flash.pos, known: flash.known } : null;
    st.newSet = Array.from(newSet);
    st.knownSet = Array.from(knownSet);
    saveAll();
  }

  function renderBlockShell() {
    app.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
        <button class="btn ghost sm" id="back">← 单词块</button>
        <h1 style="margin:0;font-size:22px;">单词块 ${curBid + 1}</h1>
        <span class="lbl" style="color:var(--text-faint);">${words.length} 词</span>
        <a class="btn ghost sm" href="records.html" style="margin-left:auto;">📊 记录</a>
      </div>
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:10px 0 4px;">
        <div class="seg" id="mode-seg" style="flex-wrap:wrap;">
          <button data-mode="study">学习</button>
          <button data-mode="quiz">认意思</button>
          <button data-mode="flash">快刷</button>
          <button data-mode="newbook">生词库 <span id="cnt-new"></span></button>
          <button data-mode="knownbook">熟词库 <span id="cnt-known"></span></button>
        </div>
        <span id="timer" class="timer-badge" style="display:none;">⏱ 0:00</span>
        <span class="hint" id="mode-hint" style="margin:0;"></span>
      </div>
      <div class="progress-line"><div class="track"><i id="prog"></i></div><span class="lbl" id="prog-lbl"></span></div>
      <div id="stage"></div>`;
    document.getElementById('back').onclick = exitBlock;
    app.querySelectorAll('#mode-seg button').forEach(b => b.onclick = () => switchMode(b.dataset.mode));
    refreshCounts();
  }
  function refreshCounts() {
    const cn = document.getElementById('cnt-new'), ck = document.getElementById('cnt-known');
    if (cn) cn.textContent = newSet.size ? `(${newSet.size})` : '';
    if (ck) ck.textContent = knownSet.size ? `(${knownSet.size})` : '';
  }

  function exitBlock() {
    stopTicker(); persistBlock(); endVisitAndSave();
    curBid = null; document.onkeydown = null;
    renderBlockList();
  }
  window.addEventListener('pagehide', () => { if (curBid !== null) { bankTimer(); persistBlock(); endVisitAndSave(); } });

  // ---------- 计时显示 ----------
  function updateTimer() {
    const el = document.getElementById('timer'); if (!el) return;
    if (curMode === 'quiz' || curMode === 'flash') {
      el.style.display = '';
      el.textContent = '⏱ ' + fmt(liveMs(curMode)) + (visit && visit.running === curMode ? '' : ' ⏸');
    } else el.style.display = 'none';
  }
  function startTicker() { stopTicker(); ticker = setInterval(updateTimer, 500); updateTimer(); }

  const stageEl = () => document.getElementById('stage');
  function setProg(ratio, label) {
    const p = document.getElementById('prog'), l = document.getElementById('prog-lbl');
    if (p) p.style.width = Math.round(ratio * 100) + '%';
    if (l) l.textContent = label;
  }
  function blockKnownProg() { setProg(words.length ? knownSet.size / words.length : 0, `已掌握(熟词)${knownSet.size}/${words.length}`); }

  // ---------- 生/熟词库操作 ----------
  function addNew(word) { newSet.add(word); knownSet.delete(word); persistBlock(); refreshCounts(); }
  function removeNew(word) { newSet.delete(word); persistBlock(); refreshCounts(); }
  function addKnown(word) { knownSet.add(word); newSet.delete(word); persistBlock(); refreshCounts(); }
  function removeKnown(word) { knownSet.delete(word); persistBlock(); refreshCounts(); }

  // ---------- 渲染辅助 ----------
  function renderSentenceEn(g) {
    let i = 0;
    return g.en.replace(/\{\{(.+?)\}\}/g, (_, shown) => {
      const idx = i++; const lvl = Vocab.get(g.words[idx].w).lvl;
      return `<span class="kw ${lvl >= 2 ? 'done' : ''}" data-i="${idx}">${shown}</span>`;
    });
  }
  function renderSentenceZh(g) {
    if (!g.zh) return '';
    if (!/\{\{.+?\}\}/.test(g.zh)) return g.zh;
    let i = 0;
    return g.zh.replace(/\{\{(.+?)\}\}/g, (_, inner) => {
      let shown = inner, idx; const bar = inner.indexOf('|');
      if (bar >= 0) { shown = inner.slice(0, bar); const key = inner.slice(bar + 1); idx = g.words.findIndex(w => w.w === key); i++; }
      else idx = i++;
      return `<span class="kw-zh" data-i="${idx}">${shown}</span>`;
    });
  }
  function plain(en) { return en.replace(/\{\{|\}\}/g, ''); }
  function tagBtns(word) {
    const isN = newSet.has(word), isK = knownSet.has(word);
    return `<button class="tagbtn ${isN ? 'on' : ''}" data-tag="new" data-w="${word}">${isN ? '✓生词' : '+生词'}</button>
            <button class="tagbtn ${isK ? 'on' : ''}" data-tag="known" data-w="${word}">${isK ? '✓熟词' : '+熟词'}</button>`;
  }
  function wordRow(w) {
    const lvl = Vocab.get(w.w).lvl;
    return `<div class="wl-item" data-w="${w.w}">
      <div class="col">
        <div><span class="w">${w.w}</span> <span class="ph">${w.ph || ''}</span>
          <span class="badge l${lvl}">${Vocab.levelName(lvl)}</span></div>
        <div class="m">${w.m}</div>
        ${w.tip ? `<span class="tip">💡 ${w.tip}</span>` : ''}
        <div class="tagrow">${tagBtns(w.w)}</div>
      </div>
      <button class="speak" data-speak="${w.w}">🔊 读</button>
    </div>`;
  }
  function bindSpeak() { stageEl().querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); }); }
  // 绑定 +生词/+熟词 按钮。onChange(w, tag) 在状态变更后调用。
  function bindTagBtns(onChange) {
    const handler = b => b.onclick = e => {
      e.stopPropagation();
      const w = b.dataset.w, tag = b.dataset.tag;
      if (tag === 'new') { newSet.has(w) ? removeNew(w) : addNew(w); }
      else { knownSet.has(w) ? removeKnown(w) : addKnown(w); }
      if (onChange) onChange(w, tag);
    };
    stageEl().querySelectorAll('.tagbtn').forEach(handler);
  }
  function flashRow(word) {
    const row = stageEl().querySelector(`.wl-item[data-w="${word}"]`);
    if (row) { row.style.outline = '2px solid var(--accent)'; setTimeout(() => row.style.outline = '', 800); row.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
  }
  // 错词/不认识:间隔 REAPPEAR_GAP 个词后重现
  function reinsert(queue, pos, item) { queue.splice(Math.min(pos + 1 + REAPPEAR_GAP, queue.length), 0, item); }

  /* ---------- 学习 ---------- */
  function renderStudy() {
    const g = groups[studyIdx];
    g.words.forEach(w => Vocab.markSeen(w.w));
    persistBlock();
    blockKnownProg();
    document.getElementById('mode-hint').textContent = '点高亮词看释义 · 中英对应词都已标出 · 空格显示/隐藏中文 · 可 +生词/+熟词';
    stageEl().innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <span class="lbl" style="color:var(--text-dim);">第 ${studyIdx + 1} / ${groups.length} 句</span>
          <button class="speak" data-speak="${plain(g.en)}">🔊 读整句</button>
        </div>
        <div class="sentence">${renderSentenceEn(g)}</div>
        <div class="zh zh-hide" id="zh">${renderSentenceZh(g)}</div>
        <div class="wordlist">${g.words.map(wordRow).join('')}</div>
        <div class="btn-row">
          <button class="btn ghost" id="prev" ${studyIdx === 0 ? 'disabled' : ''}>← 上一句</button>
          <button class="btn" id="next">${studyIdx === groups.length - 1 ? '完成 ✓' : '下一句 →'}</button>
        </div>
        <p class="hint">键盘:<span class="kbd">←</span> <span class="kbd">→</span> 翻句 · <span class="kbd">空格</span> 显示/隐藏中文(默认隐藏)</p>
      </div>`;
    const zh = document.getElementById('zh');
    zh.onclick = e => { if (!e.target.classList.contains('kw-zh')) zh.classList.toggle('zh-hide'); };
    stageEl().querySelectorAll('.kw').forEach(el => el.onclick = () => { const w = g.words[+el.dataset.i]; speak(w.w); flashRow(w.w); });
    stageEl().querySelectorAll('.kw-zh').forEach(el => el.onclick = e => { e.stopPropagation(); const w = g.words[+el.dataset.i]; if (w) { speak(w.w); flashRow(w.w); } });
    bindSpeak();
    const onStudyTag = (w) => { const row = stageEl().querySelector(`.wl-item[data-w="${w}"] .tagrow`); if (row) { row.innerHTML = tagBtns(w); bindTagBtns(onStudyTag); } };
    bindTagBtns(onStudyTag);                       // 标签变化后,更新该行按钮显示
    document.getElementById('prev').onclick = () => { if (studyIdx > 0) { studyIdx--; renderStudy(); } };
    document.getElementById('next').onclick = () => {
      if (studyIdx < groups.length - 1) { studyIdx++; renderStudy(); }
      else doneScreen('这个单词块的串句过完了!', '去做认意思测试 →', 'quiz');
    };
  }

  /* ---------- 认意思 ---------- */
  function startQuiz() {
    const pool = activeWords();
    if (!pool.length) return emptyActive('认意思');
    quiz = { queue: orderWeak(pool), pos: 0, correct: 0, answered: 0 };
    persistBlock(); renderQuiz();
  }
  function renderQuiz() {
    if (!quiz || quiz.pos >= quiz.queue.length) {
      const c = quiz ? quiz.correct : 0, a = quiz ? quiz.answered : 0; quiz = null; persistBlock();
      return doneScreen(`认意思完成!答对 ${c}/${a}`, '再来一轮', 'quiz');
    }
    persistBlock();
    document.getElementById('mode-hint').textContent = '看英文选中文 · 选完再点一下卡片(或按钮/Enter)进下一题 · 1-4 选答案';
    const w = quiz.queue[quiz.pos];
    setProg(quiz.pos / quiz.queue.length, `第 ${quiz.pos + 1}/${quiz.queue.length} 题 · 对 ${quiz.correct}`);
    const pool = ALLWORDS.length > 4 ? ALLWORDS : words;
    const opts = shuffle([w, ...shuffle(pool.filter(x => x.w !== w.w)).slice(0, 3)]);
    stageEl().innerHTML = `
      <div class="card" id="qcard">
        <div class="quiz-q">${w.w}
          <button class="speak" data-speak="${w.w}" style="vertical-align:middle;">🔊</button>
        </div>
        <div class="quiz-ph">${w.ph || ''}</div>
        <div class="tagrow center">${tagBtns(w.w)}</div>
        <div class="opts">${opts.map(o => `<button class="opt" data-w="${o.w}">${o.m}</button>`).join('')}</div>
        <div id="tipbox"></div>
      </div>`;
    bindSpeak(); speak(w.w);
    const onQuizTag = (tw, tag) => {
      // 标熟词:该词从认意思消失 → 移出队列并跳过
      if (tag === 'known' && knownSet.has(tw)) {
        quiz.queue = quiz.queue.filter((x, i) => !(x.w === tw && i >= quiz.pos));
        renderQuiz();
      } else {
        const r = stageEl().querySelector('.tagrow'); if (r) { r.innerHTML = tagBtns(w.w); bindTagBtns(onQuizTag); }
      }
    };
    bindTagBtns(onQuizTag);
    let answered = false;
    const goNext = () => { quiz.pos++; renderQuiz(); };
    stageEl().querySelectorAll('.opt').forEach(btn => {
      btn.onclick = () => {
        if (answered) return;
        answered = true;
        ensureRunning('quiz');
        const chosen = btn.dataset.w === w.w;
        quiz.answered++; visit.quizAnswered++; visit.practiced.add(w.w);
        if (chosen) quiz.correct++;
        Vocab.answer(w.w, chosen);
        stageEl().querySelectorAll('.opt').forEach(b => {
          b.disabled = true;
          if (b.dataset.w === w.w) b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
        });
        if (!chosen) reinsert(quiz.queue, quiz.pos, w);   // 5 个词后重现
        persistBlock();
        document.getElementById('tipbox').innerHTML =
          `${w.tip ? `<div class="reveal">💡 ${w.tip}</div>` : ''}
           <div class="btn-row"><button class="btn" id="qnext">下一题 →(Enter / 再点一下卡片)</button></div>`;
        document.getElementById('qnext').onclick = (e) => { e.stopPropagation(); goNext(); };
        document.onkeydown = e => { if (e.key === 'Enter') goNext(); };
        // ④ 再点一下卡片进下一题(延迟绑定,避免本次点击立即触发)
        setTimeout(() => { const c = document.getElementById('qcard'); if (c) c.onclick = () => goNext(); }, 0);
      };
    });
    document.onkeydown = quizKeys;
  }
  function quizKeys(e) {
    const map = { '1': 0, '2': 1, '3': 2, '4': 3 };
    if (e.key in map) { const b = stageEl().querySelectorAll('.opt')[map[e.key]]; if (b && !b.disabled) b.click(); }
  }

  /* ---------- 快刷(scope: all=本块 / newbook=生词库) ---------- */
  function startFlash(scope) {
    flashScope = scope || 'all';
    const pool = flashScope === 'newbook' ? wordsFromKeys(Array.from(newSet)) : activeWords();
    if (!pool.length) return flashScope === 'newbook' ? renderNewbook('生词库为空,先去添加生词') : emptyActive('快刷');
    flash = { queue: orderWeak(pool), pos: 0, known: 0 };
    persistBlock(); renderFlash();
  }
  function renderFlash() {
    if (!flash || flash.pos >= flash.queue.length) {
      const k = flash ? flash.known : 0, n = flash ? flash.queue.length : 0; flash = null;
      if (flashScope === 'newbook') { flashScope = 'all'; return doneScreen(`生词库速刷结束!认识 ${k}/${n}`, '返回生词库', 'newbook'); }
      persistBlock(); return doneScreen(`快刷一轮结束!认识 ${k}/${n}`, '再刷一轮(弱词优先)', 'flash');
    }
    if (flashScope === 'all') persistBlock();
    document.getElementById('mode-hint').textContent = flashScope === 'newbook'
      ? '生词库速刷 · 空格翻牌 · ←不认识 →认识(不重复入库)'
      : '回想→翻牌→认识/不认识 · 点"不认识"自动入生词库 · 空格翻牌, ←不认识 →认识';
    const w = flash.queue[flash.pos];
    setProg(flash.pos / flash.queue.length, `${flash.pos + 1}/${flash.queue.length}`);
    stageEl().innerHTML = `
      <div class="card" style="text-align:center;">
        <div class="quiz-q" style="font-size:38px;">${w.w}</div>
        <div class="quiz-ph">${w.ph || ''} <button class="speak" data-speak="${w.w}">🔊</button></div>
        <div class="tagrow center"><button class="tagbtn ${knownSet.has(w.w) ? 'on' : ''}" data-tag="known" data-w="${w.w}">${knownSet.has(w.w) ? '✓熟词' : '+熟词'}</button></div>
        <div id="reveal" class="reveal hidden" style="text-align:left;"><b>${w.m}</b>${w.tip ? `<br>💡 ${w.tip}` : ''}</div>
        <div class="btn-row" id="fbtns" style="justify-content:center;margin-top:20px;">
          <button class="btn ghost" id="flip">翻牌看意思(空格)</button>
        </div>
      </div>`;
    bindSpeak();
    bindTagBtns(() => {                              // 标熟词 → 从快刷消失
      if (knownSet.has(w.w)) { flash.queue = flash.queue.filter((x, i) => !(x.w === w.w && i >= flash.pos)); renderFlash(); }
    });
    const flip = () => {
      ensureRunning('flash');
      document.getElementById('reveal').classList.remove('hidden');
      document.getElementById('fbtns').innerHTML =
        `<button class="btn ghost" id="dunno">✗ 不认识</button><button class="btn green" id="know">✓ 认识</button>`;
      document.getElementById('dunno').onclick = () => grade(false);
      document.getElementById('know').onclick = () => grade(true);
    };
    const grade = (ok) => {
      visit.flashGraded++; visit.practiced.add(w.w);
      Vocab.answer(w.w, ok);
      if (ok) flash.known++;
      else { if (flashScope === 'all') addNew(w.w); reinsert(flash.queue, flash.pos, w); }  // 不认识:入生词库(仅本块)+5词后重现
      flash.pos++; renderFlash();
    };
    document.getElementById('flip').onclick = flip;
    document.onkeydown = e => {
      const hidden = document.getElementById('reveal').classList.contains('hidden');
      if (e.code === 'Space') { e.preventDefault(); if (hidden) flip(); }
      else if (!hidden && e.key === 'ArrowRight') grade(true);
      else if (!hidden && e.key === 'ArrowLeft') grade(false);
    };
  }

  /* ---------- 生词库 ---------- */
  function renderNewbook(note) {
    setProg(0, '');
    document.getElementById('timer').style.display = 'none';
    document.getElementById('mode-hint').textContent = '生词库:学习/认意思点"+生词"、快刷点"不认识"加入 · 词义直接显示 · 可速刷或移除';
    const list = wordsFromKeys(Array.from(newSet));
    stageEl().innerHTML = `
      <div class="btn-row" style="margin:0 0 14px;">
        <button class="btn" id="nb-flash" ${list.length ? '' : 'disabled'}>▶ 速刷生词库(${list.length})</button>
        ${note ? `<span class="hint" style="margin:0;align-self:center;">${note}</span>` : ''}
      </div>
      ${list.length ? `<div class="book-list">${list.map(bookRow).join('')}</div>`
        : `<div class="empty">生词库还是空的。<br>在 学习/认意思 点「+生词」,或 快刷 点「不认识」,词就会进来。</div>`}`;
    const fb = document.getElementById('nb-flash'); if (fb) fb.onclick = () => startFlash('newbook');
    stageEl().querySelectorAll('[data-remove]').forEach(b => b.onclick = () => { removeNew(b.dataset.remove); renderNewbook(); });
    stageEl().querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); });
  }
  function bookRow(w) {
    return `<div class="book-row">
      <span class="bw">${w.w}</span>
      <span class="bph">${w.ph || ''}</span>
      <span class="bm">${w.m}</span>
      <button class="speak" data-speak="${w.w}">🔊</button>
      <button class="btn ghost sm" data-remove="${w.w}">移除</button>
    </div>`;
  }

  /* ---------- 熟词库 ---------- */
  function renderKnownbook() {
    setProg(words.length ? knownSet.size / words.length : 0, `熟词 ${knownSet.size}/${words.length}`);
    document.getElementById('timer').style.display = 'none';
    document.getElementById('mode-hint').textContent = '熟词库:已熟悉的词,不再出现在 认意思/快刷 · 只列单词与词义';
    const list = wordsFromKeys(Array.from(knownSet));
    stageEl().innerHTML = list.length
      ? `<div class="book-list">${list.map(knownRow).join('')}</div>`
      : `<div class="empty">熟词库还是空的。<br>在 学习/认意思/快刷 点「+熟词」,熟悉的词就会进来,并从认意思/快刷中消失。</div>`;
    stageEl().querySelectorAll('[data-remove]').forEach(b => b.onclick = () => { removeKnown(b.dataset.remove); renderKnownbook(); });
    stageEl().querySelectorAll('[data-speak]').forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.speak); });
  }
  function knownRow(w) {
    return `<div class="book-row">
      <span class="bw">${w.w}</span>
      <span class="bm">${w.m}</span>
      <button class="speak" data-speak="${w.w}">🔊</button>
      <button class="btn ghost sm" data-remove="${w.w}">移回</button>
    </div>`;
  }

  function emptyActive(name) {
    setProg(1, '');
    stageEl().innerHTML = `<div class="empty">本块的词都进熟词库了,${name}没有可练的词了。<br>可到「熟词库」移回一些词。</div>`;
  }

  /* ---------- 完成页 ---------- */
  function doneScreen(title, cta, nextMode) {
    document.onkeydown = null; bankTimer();
    if (curMode === 'study') studyIdx = 0;
    persistBlock();
    blockKnownProg();
    stageEl().innerHTML = `
      <div class="card flash-done">
        <div class="big">🎉</div>
        <h2 style="margin:8px 0;">${title}</h2>
        <p class="sub">本块已掌握(熟词)${knownSet.size} / ${words.length} · 本次用时 认意思 ${fmt(visit ? visit.quizMs : 0)} / 快刷 ${fmt(visit ? visit.flashMs : 0)}</p>
        <div class="btn-row" style="justify-content:center;">
          <button class="btn" id="again">${cta}</button>
          <button class="btn ghost" id="exit">退出单词块(存记录)</button>
        </div>
      </div>`;
    document.getElementById('again').onclick = () => switchMode(nextMode);
    document.getElementById('exit').onclick = exitBlock;
  }

  /* ---------- 模式切换 ---------- */
  function switchMode(m) {
    bankTimer();
    curMode = m;
    persistBlock();
    app.querySelectorAll('#mode-seg button').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
    refreshCounts();
    document.onkeydown = null;
    if (m === 'study') renderStudy();
    else if (m === 'quiz') { if (quiz) renderQuiz(); else startQuiz(); }
    else if (m === 'flash') { flashScope = 'all'; if (flash) renderFlash(); else startFlash('all'); }
    else if (m === 'newbook') renderNewbook();
    else if (m === 'knownbook') renderKnownbook();
    startTicker();
  }

  document.addEventListener('keydown', e => {
    if (curBid === null || curMode !== 'study') return;
    if (e.key === 'ArrowRight') { const n = document.getElementById('next'); if (n) n.click(); }
    else if (e.key === 'ArrowLeft') { const p = document.getElementById('prev'); if (p) p.click(); }
    else if (e.code === 'Space') { e.preventDefault(); const z = document.getElementById('zh'); if (z) z.classList.toggle('zh-hide'); }
  });

  if (!ALLGROUPS.length) app.innerHTML = '<div class="empty">词库为空</div>';
  else renderBlockList();
})();
