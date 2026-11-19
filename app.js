(function () {
  var COVER_IMG = "assets/cover-run-away-with-me.png";
  var LEAF_D = 'M50 2 L57 18 L67 13 L64 38 L84 28 L79 48 L96 52 L78 68 L83 76 L54 72 L54 98 L46 98 L46 72 L17 76 L22 68 L4 52 L21 48 L16 28 L36 38 L33 13 L43 18Z';
  var LEAF_IMG = '<img src="assets/59b64.svg" alt="">';

  function CN(t, a, town, c1, c2, art, fact) { return { cn: 1, t: t, a: a, c: [art[0], art[1]], p: { t: t, a: a, town: town, c1: c1, c2: c2, art: art, fact: fact, cn: 1 } }; }
  var PLAYLISTS = [
    { title: 'My Playlist #2', items: [
      { t: 'Taste', a: 'Sabrina Carpenter', c: ['#f7a15a', '#e0603a'] },
      { t: 'Please Please Please', a: 'Sabrina Carpenter', c: ['#f6b1c3', '#d65a86'] },
      CN('Hideaway', 'Kiesza', 'Calgary, Alta.', '#2b5d9c', '#08152b', ['#7dd3fc', '#3b82f6', '#1e1b4b'], 'Kiesza is from Calgary, Alberta, and the one-take video for “Hideaway” helped send the song to No. 1 in the UK in 2014.'),
      { t: 'Good Graces', a: 'Sabrina Carpenter', c: ['#9cc4f5', '#4f7fcf'] },
      { t: 'What Makes You Beautiful', a: 'One Direction', c: ['#f4d27a', '#c9893a'] },
      { t: 'Night Changes', a: 'One Direction', c: ['#8d93a8', '#444a63'] },
      CN('Stitches', 'Shawn Mendes', 'Pickering, Ont.', '#7a4a2b', '#241209', ['#fcd34d', '#b45309', '#451a03'], 'Shawn Mendes is from Pickering, Ontario, and got his start posting short cover videos on Vine in 2013, two years before “Stitches” made him a global name.'),
      { t: 'Fireproof', a: 'One Direction', c: ['#d9a0a0', '#8a4a4a'] }
    ] },
    { title: 'Gym Mix', items: [
      { t: 'Levitating', a: 'Dua Lipa', c: ['#f08ad0', '#8a2f9a'] },
      { t: 'As It Was', a: 'Harry Styles', c: ['#f4a6a0', '#b24a3f'] },
      CN('Peaches', 'Justin Bieber', 'Stratford, Ont.', '#a8453a', '#2a0f0a', ['#fdba74', '#f43f5e', '#4c0519'], 'Justin Bieber is from Stratford, Ontario, and was discovered through YouTube videos before “Peaches” debuted at No. 1 on the Billboard Hot 100 in 2021.'),
      { t: 'Anti-Hero', a: 'Taylor Swift', c: ['#7e8fa6', '#2d3a4f'] },
      { t: 'Flowers', a: 'Miley Cyrus', c: ['#f6d36b', '#c77a2a'] },
      { t: 'Cruel Summer', a: 'Taylor Swift', c: ['#f7a8c4', '#a84470'] },
      CN('Starboy', 'The Weeknd', 'Toronto, Ont.', '#7a1a1a', '#240808', ['#fca5a5', '#b91c1c', '#450a0a'], 'The Weeknd is from Toronto, Ontario, and “Starboy” took him to No. 1 on the Billboard Hot 100 in 2016.'),
      { t: 'good 4 u', a: 'Olivia Rodrigo', c: ['#c9a3f0', '#5e3aa0'] }
    ] }
  ];
  var POOL = [
    { t: 'Run Away With Me', a: 'Carly Rae Jepsen', town: 'Mission, B.C.', why: 'Same sparkly, synth-pop energy.', c1: '#8b1e43', c2: '#250812', img: true, dur: '04:11' },
    { t: 'greedy', a: 'Tate McRae', town: 'Calgary, Alta.', why: 'Cheeky pop with swagger to spare.', c1: '#6a2c7e', c2: '#1e0a28', art: ['#ff6aa8', '#7b2ff7', '#1b1042'], dur: '02:11' },
    { t: 'Scars To Your Beautiful', a: 'Alessia Cara', town: 'Brampton, Ont.', why: 'Warm voice, big-hearted chorus.', c1: '#0f6a6a', c2: '#05201f', art: ['#5eead4', '#0e7490', '#082f49'], dur: '03:50' },
    { t: 'Anything', a: 'Hedley', town: 'Vancouver, B.C.', why: 'Big, bright pop-rock to sing along to.', c1: '#1f4e8c', c2: '#08152b', art: ['#60a5fa', '#1d4ed8', '#172554'], dur: '03:27' },
    { t: 'Closer', a: 'Tegan and Sara', town: 'Calgary, Alta.', why: 'Bright, bouncy synth-pop.', c1: '#b4561b', c2: '#2e1204', art: ['#fdba74', '#ea580c', '#7c2d12'], dur: '03:13' },
    { t: 'Complicated', a: 'Avril Lavigne', town: 'Napanee, Ont.', why: 'Skate-park attitude, sing-along hooks.', c1: '#2f6b3a', c2: '#0a1f10', art: ['#86efac', '#16a34a', '#14532d'], dur: '04:04' },
    { t: 'Archie, Marry Me', a: 'Alvvays', town: 'Toronto, Ont.', why: 'Dreamy, jangly and sweet.', c1: '#7a3a5a', c2: '#240f1b', art: ['#f9a8d4', '#be185d', '#500724'], dur: '03:30' },
    { t: 'Drive My Soul', a: 'Lights', town: 'Timmins, Ont.', why: 'Glittery electropop with heart.', c1: '#4a3a9c', c2: '#120d2e', art: ['#c4b5fd', '#6d28d9', '#1e1b4b'], dur: '03:41' },
    { t: 'Dirty Dirty', a: 'Charlotte Cardin', town: 'Montréal, Que.', why: 'Velvet vocals, late-night pop.', c1: '#8a3b2b', c2: '#2a0f0a', art: ['#fda4af', '#e11d48', '#4c0519'], dur: '03:12' },
    { t: 'Show Me How', a: 'Men I Trust', town: 'Montréal, Que.', why: 'Dreamy, laid-back groove.', c1: '#2b5d7a', c2: '#08202d', art: ['#7dd3fc', '#0284c7', '#0c4a6e'], dur: '03:46' }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var phone = $('phone'), stage = $('stage'), deck = $('deck'), chip = $('chip'), chipTitle = $('chipTitle'), chipThumb = $('chipThumb');
  var skel = $('skel'), frame = $('frame'), loader = $('loader'), controls = $('controls'), cnBar = $('cnBar'), chipLabDef = chip.querySelector('.lab .def');
  var tally = $('tally'), count = $('count'), live = $('live'), toast = $('toast'), fxc = $('fxc'), finale = $('finale'), sheet = $('sheet'), plist = $('plist');
  var bBack = $('bBack'), bBack2 = $('bBack2'), bNo = $('bNo'), bYes = $('bYes'), bShuf = $('bShuf'), bNice = $('bNice'), pickEl = $('pick');
  var scrOpen = $('scrOpen'), scrLib = $('scrLib'), scrDet = $('scrDet'), tabbar = $('tabbar'), mini = $('mini');
  var lnk = $('lnk'), lf = $('lf');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = 1, scale = 1, run = 0, view = 'open', matchActive = false, detFrom = 'lib', detPl = 0;

  var curPl = 0, ITEMS = PLAYLISTS[0].items, N = ITEMS.length, MOS = [], saved = {};
  var idx = 0, assign = [], seen = [], tallyN = 0, hist = [], busy = false, dragging = false, closed = false;
  var topEl = null;
  var lag = false;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function D(ms) { return reduce ? 1 : ms * T; }
  function say(s) { live.textContent = s; }
  function songAt(i) { var it = ITEMS[i]; return it.cn ? it.p : POOL[assign[i]]; }

  /* ---------- fit to viewport ---------- */
  function fit() {
    var wide = window.innerWidth > 860;
    var availW = window.innerWidth - 32;
    var availH = window.innerHeight - 40;
    scale = clamp(Math.min(availW / 390, availH / 844), 0.5, 1.15);
    if (!wide) scale = clamp(Math.min(availW / 390, 1), 0.5, 1);
    document.documentElement.style.setProperty('--s', scale);
  }
  window.addEventListener('resize', fit); fit();

  /* aurora backdrops */
  Array.prototype.forEach.call(document.querySelectorAll('.bgl'), function (b) { b.innerHTML = '<img class="au" src="assets/aurora-red.svg" alt=""><img class="st" src="assets/43623.svg" alt="">'; });

  /* ---------- art ---------- */
  function artSvg(p) {
    var c = p.art, id = 'g' + Math.abs(hash(p.t));
    return '<svg class="art" viewBox="0 0 264 264" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + c[0] + '"/><stop offset=".55" stop-color="' + c[1] + '"/><stop offset="1" stop-color="' + c[2] + '"/></linearGradient></defs>' +
      '<rect width="264" height="264" fill="url(#' + id + ')"/>' +
      '<circle cx="132" cy="98" r="62" fill="' + c[0] + '" opacity=".55"/>' +
      '<circle cx="132" cy="98" r="40" fill="#fff" opacity=".22"/>' +
      '<g fill="' + c[2] + '" opacity=".5"><rect y="146" width="264" height="7"/><rect y="164" width="264" height="5"/><rect y="180" width="264" height="3"/></g></svg>';
  }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }
  function coverHTML(p) {
    if (p.img) return '<div class="cover"><img src="' + COVER_IMG + '" alt="Cover art for ' + p.t + '"></div>';
    return '<div class="cover">' + artSvg(p) + '<div class="ct"><i>' + p.t + '</i><span>' + p.a + '</span></div></div>';
  }
  function thumbBg(c) { return 'linear-gradient(135deg,' + c[0] + ',' + c[1] + ')'; }
  function mosaicColors(pl) { return PLAYLISTS[pl].items.filter(function (it) { return !it.cn; }).slice(0, 4).map(function (it) { return it.c[1]; }); }
  function mosaicHTML(cols) { return cols.map(function (c) { return '<span style="background:' + c + '"></span>'; }).join(''); }

  /* ---------- cards ---------- */
  function cardInner(p) {
    var stamps = p.cn ? '' : '<div class="stamp yes">oui!</div>' +
      '<div class="stamp no">non, merci</div>';
    var tail = p.cn ? '<div class="dyk"><h4>Did you know?</h4><p>' + p.fact + '</p></div>' :
      '<p class="why">' + p.why + '</p>' +
      '<div class="embed" data-dur="' + p.dur + '"><div class="ec">' + coverHTML(p) + '</div><div class="body">' +
        '<div class="et">' + p.t + '</div><div class="ea">' + p.a + '</div>' +
        '<div class="sv"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M12 8v8M8 12h8" stroke-linecap="round"/></svg>Save on Spotify</div>' +
        '<div class="bar"><i></i></div><span class="tm">' + p.dur + '</span><span class="dots">&middot;&middot;&middot;</span>' +
        '<button class="play" aria-label="Play preview"><svg viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z"/></svg></button>' +
        '<svg class="logo" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M5.5 9.2c4-1.2 9-.9 13 1.2M6.3 12.6c3.4-.9 7.1-.6 10.2 1.1M7 15.8c2.8-.7 5.5-.4 8 .9" stroke="#222" stroke-width="1.7" stroke-linecap="round" fill="none"/></svg>' +
      '</div></div>';
    return '<div class="cover-wrap">' + coverHTML(p) + stamps + '</div>' +
      '<div class="meta"><h2 class="title">' + p.t + '</h2><p class="artist">' + p.a + '</p>' +
      '<div class="town">' + LEAF_IMG + '<span>from ' + p.town + '</span></div></div>' + tail;
  }
  function makeCard(i, cls) {
    var el = document.createElement('div'), p = songAt(i);
    el.className = 'card ' + cls + (p.cn ? ' cn' : ''); el.dataset.i = i;
    el.innerHTML = cardInner(p);
    if (!p.cn) wirePlay(el);
    return el;
  }
  function wirePlay(el) {
    var btn = el.querySelector('.play'), bar = el.querySelector('.bar i'), tm = el.querySelector('.tm');
    var emb = el.querySelector('.embed');
    btn.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (emb._timer) { stopPlay(el); return; }
      var t0 = performance.now(), len = 30000;
      btn.innerHTML = '<svg viewBox="0 0 10 10"><rect x="1.5" y="1" width="2.6" height="8"/><rect x="5.9" y="1" width="2.6" height="8"/></svg>';
      emb._timer = setInterval(function () {
        var f = ((performance.now() - t0) % len) / len; bar.style.width = (f * 100) + '%';
        var s = Math.floor(f * 30); tm.textContent = '00:' + (s < 10 ? '0' : '') + s;
      }, 100);
    });
  }
  function stopPlay(el) {
    var emb = el && el.querySelector('.embed'); if (!emb || !emb._timer) return;
    clearInterval(emb._timer); emb._timer = null;
    el.querySelector('.play').innerHTML = '<svg viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z"/></svg>';
    el.querySelector('.bar i').style.width = '0'; el.querySelector('.tm').textContent = emb.dataset.dur;
  }
  function setTheme(p) { phone.style.setProperty('--c1', p.c1); phone.style.setProperty('--c2', p.c2); }
  function setMode(p) { phone.classList.toggle('cn', !!(p && p.cn)); }
  function setChip(i, animate) {
    var o = ITEMS[i]; if (o.cn) return;
    function apply() { chipTitle.textContent = o.t + ' — ' + o.a; chipThumb.innerHTML = ''; chipThumb.style.display = ''; chipThumb.style.background = thumbBg(o.c); chipLabDef.textContent = 'Replacing'; }
    if (!animate || reduce) { apply(); return; }
    var tx = chip.querySelector('.txt');
    tx.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }], { duration: D(120), fill: 'forwards' }).onfinish = function () {
      apply();
      tx.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: D(220), easing: 'ease-out', fill: 'forwards' });
    };
  }
  function setBack() { var v = hist.length ? 'false' : 'true'; bBack.setAttribute('aria-disabled', v); bBack2.setAttribute('aria-disabled', v); }
  function setBusyUI(on) { controls.classList.toggle('busy', on); cnBar.classList.toggle('busy', on); }
  function jump(p, a) {
    phone.classList.remove('snap'); phone.style.setProperty('--p', p); phone.style.setProperty('--a', a);
    void phone.offsetWidth; phone.classList.add('snap');
  }

  /* ---------- particles ---------- */
  var ctx = fxc.getContext('2d'); ctx.scale(2, 2);
  var parts = [], raf = 0, last = 0;
  var leafPath = new Path2D(LEAF_D);
  /* snowflake pattern from the design: one SVG, drawn per flake from a tinted sprite sheet */
  var FLAKE_BOX = [[156,0,188,28],[216,34,247,62],[113,48,191,121],[46,56,95,105],[212,82,289,169],[0,118,72,198],[122,148,154,177],[175,173,220,224],[70,208,114,258],[217,234,289,313],[136,255,168,283],[0,263,78,350],[99,311,177,384],[194,327,244,375],[43,370,74,398],[102,404,133,432]];
  var flakeSheet = null;
  (function () {
    var im = new Image();
    im.onload = function () {
      try {
        var c = document.createElement('canvas'); c.width = 580; c.height = 864;
        var x = c.getContext('2d'); x.drawImage(im, 0, 0, c.width, c.height);
        x.globalCompositeOperation = 'source-in'; x.fillStyle = '#e8f6ff'; x.fillRect(0, 0, c.width, c.height);
        flakeSheet = c;
      } catch (e) {}
    };
    im.src = 'assets/4e2d0.svg';
  })();
  var LEAFCOLS = ['#f9244f', '#ff6f8a', '#ffa3b8', '#ffffff', '#ffc27a', '#d8143f'];
  function burstLeaves(x, y, dir, n, spread) {
    if (reduce) return;
    for (var i = 0; i < n; i++) {
      var ang = (-Math.PI / 2) + (Math.random() - .5) * (spread || 2.6) + dir * .5;
      var sp = 180 + Math.random() * 420;
      parts.push({ k: 'leaf', x: x, y: y, vx: Math.cos(ang) * sp + dir * 120, vy: Math.sin(ang) * sp, g: 520, r: Math.random() * 6, vr: (Math.random() - .5) * 9,
        s: 0.14 + Math.random() * 0.2, col: LEAFCOLS[(Math.random() * LEAFCOLS.length) | 0], life: 0, max: 1.1 + Math.random() * .9, sway: Math.random() * 6, sw: 2 + Math.random() * 3 });
    }
    kick();
  }
  function puffSnow(x, y, dir, n) {
    if (reduce) return;
    for (var i = 0; i < n; i++) {
      var ang = Math.PI * (dir < 0 ? 1 : 0) + (Math.random() - .5) * 1.6;
      var sp = 120 + Math.random() * 380;
      parts.push({ k: Math.random() < .6 ? 'flake' : 'dot', x: x + (Math.random() - .5) * 80, y: y + (Math.random() - .5) * 160, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp * .6 - 40, g: 160,
        r: Math.random() * 6, vr: (Math.random() - .5) * 4, s: 2 + Math.random() * 5, f: (Math.random() * FLAKE_BOX.length) | 0, sz: 16 + Math.random() * 16, col: '#e8f6ff', life: 0, max: .9 + Math.random() * .8, sway: Math.random() * 6, sw: 1 });
    }
    kick();
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); } }
  function step(now) {
    var dt = Math.min(.04, (now - last) / 1000) / T; last = now;
    ctx.clearRect(0, 0, 390, 844);
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i]; p.life += dt;
      if (p.life > p.max) { parts.splice(i, 1); continue; }
      p.vy += p.g * dt; p.vx *= (1 - .9 * dt); p.x += p.vx * dt + Math.sin(p.life * p.sw * 3 + p.sway) * (p.k === 'leaf' ? 14 : 6) * dt; p.y += p.vy * dt; p.r += p.vr * dt;
      var f = 1 - p.life / p.max; ctx.globalAlpha = Math.min(1, f * 1.8);
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      if (p.k === 'leaf') { ctx.scale(p.s, p.s); ctx.translate(-50, -50); ctx.fillStyle = p.col; ctx.fill(leafPath); }
      else if (p.k === 'flake') {
        if (flakeSheet) { var bx = FLAKE_BOX[p.f], bw = bx[2] - bx[0], bh = bx[3] - bx[1], kk = p.sz / Math.max(bw, bh); ctx.drawImage(flakeSheet, bx[0] * 2, bx[1] * 2, bw * 2, bh * 2, -bw * kk / 2, -bh * kk / 2, bw * kk, bh * kk); }
        else { ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(0, 0, p.s, 0, 7); ctx.fill(); }
      }
      else { ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(0, 0, p.s, 0, 7); ctx.fill(); }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    if (parts.length) raf = requestAnimationFrame(step); else { raf = 0; ctx.clearRect(0, 0, 390, 844); }
  }

  /* ---------- tally ---------- */
  function setTally(n, up) {
    tallyN = n; count.textContent = n;
    if (reduce) return;
    tally.animate(up ? [{ transform: 'scale(1)' }, { transform: 'scale(1.28)' }, { transform: 'scale(.94)' }, { transform: 'scale(1)' }] : [{ transform: 'scale(1)' }, { transform: 'scale(.86)' }, { transform: 'scale(1)' }],
      { duration: D(460), easing: 'cubic-bezier(.3,1.3,.5,1)' });
    if (up) { tally.classList.remove('ping'); void tally.offsetWidth; tally.classList.add('ping'); }
  }
  function showToast(s) { toast.textContent = s; toast.classList.add('show'); clearTimeout(showToast._t); showToast._t = setTimeout(function () { toast.classList.remove('show'); }, 1500); }

  /* ---------- deck ---------- */
  function build() {
    deck.innerHTML = ''; assign = []; seen = []; var pi = 0;
    for (var i = 0; i < N; i++) assign.push(ITEMS[i].cn ? -1 : pi++);
    idx = 0; hist = []; tallyN = 0; count.textContent = '0';
    saved[curPl] = { hist: hist, assign: assign };
    topEl = makeCard(0, 'is-top');
    deck.appendChild(topEl);
    setTheme(songAt(0)); setMode(songAt(0)); setChip(0, false); setBack(); jump(0, 0);
    finale.classList.remove('on'); finale.setAttribute('aria-hidden', 'true');
    phone.dataset.lean = '';
  }

  function topTransform(dx, dy) { return 'translate3d(' + dx + 'px,' + (dy * .3) + 'px,0) rotate(' + (dx * .055) + 'deg)'; }
  var cur = { dx: 0, dy: 0 };

  function commit(dir, fromBtn) {
    if (busy || closed || !topEl) return; busy = true; dragging = false; deck.classList.remove('dragging');
    hintTok++; topEl.getAnimations().forEach(function (a) { a.cancel(); });
    var i = idx, pIdx = assign[i], P = POOL[pIdx], O = ITEMS[i];
    stopPlay(topEl);
    var start = fromBtn ? { dx: 0, dy: 0 } : cur;
    phone.classList.add('snap'); phone.style.setProperty('--p', dir); phone.style.setProperty('--a', 1);
    phone.dataset.lean = dir < 0 ? 'no' : '';
    var cx = 63 + 132 + start.dx, cy = 168 + 132 + start.dy * .3;
    var out = topEl;
    var coverWrap = out.querySelector('.cover-wrap');

    if (dir > 0) {
      var fly = null;
      if (!reduce) {
        fly = document.createElement('div'); fly.className = 'fly'; fly.innerHTML = coverHTML(P); fly.querySelector('.cover').style.cssText = 'position:absolute;inset:0';
        var ctEl = fly.querySelector('.ct'); if (ctEl) ctEl.style.display = '';
        sheet.appendChild(fly); coverWrap.style.visibility = 'hidden';
        var rot0 = start.dx * .055;
        fly.animate([
          { transform: 'translate(' + start.dx + 'px,' + (start.dy * .3) + 'px) rotate(' + rot0 + 'deg) scale(1)', opacity: 1, offset: 0 },
          { transform: 'translate(' + (start.dx + 70) + 'px,-70px) rotate(10deg) scale(.62)', opacity: 1, offset: .38 },
          { transform: 'translate(279px,-90px) rotate(0deg) scale(.17)', opacity: .95, offset: 1 }
        ], { duration: D(760), easing: 'cubic-bezier(.45,.05,.35,1)', fill: 'forwards' }).onfinish = function () {
          fly.remove(); setTally(tallyN + 1, true); burstLeaves(364, 114, 0, 9, 4.6);
        };
        burstLeaves(cx, cy, 1, 22, 2.8); setTimeout(function () { burstLeaves(cx + 120, cy - 60, 1, 6, 3); }, D(240));
      }
      if (reduce) setTally(tallyN + 1, true);
      out.animate([{ transform: topTransform(start.dx, start.dy), opacity: 1 }, { transform: 'translate3d(' + (560) + 'px,' + (start.dy * .3 - 30) + 'px,0) rotate(24deg)', opacity: 0 }],
        { duration: D(480), easing: 'cubic-bezier(.3,.7,.35,1)', fill: 'forwards' });
      say('Swapped ' + O.t + ' for ' + P.t + ' by ' + P.a + '.');
    } else {
      puffSnow(cx - 60, cy, -1, 26);
      chip.classList.add('kept'); setTimeout(function () { chip.classList.remove('kept'); }, D(900));
      out.animate([{ transform: topTransform(start.dx, start.dy), opacity: 1 }, { transform: 'translate3d(' + (-560) + 'px,' + (start.dy * .3 + 20) + 'px,0) rotate(-24deg)', opacity: 0 }],
        { duration: D(460), easing: 'cubic-bezier(.3,.7,.35,1)', fill: 'forwards' });
      say('Kept ' + O.t + ' by ' + O.a + '.');
    }

    setTimeout(function () {
      hist.push({ i: i, action: dir > 0 ? 'yes' : 'no', pool: pIdx, dir: dir });
      out.remove();
      idx = i + 1; topEl = null;
      jump(0, 0); phone.dataset.lean = '';
      setBack(); cur = { dx: 0, dy: 0 };
      if (idx < N) { readNext(idx, false); } else { busy = false; openFinale(); }
    }, D(dir > 0 ? 470 : 440));
  }

  /* already-Canadian card: one button moves on */
  function commitCn(start) {
    if (busy || closed || !topEl) return; busy = true; dragging = false; deck.classList.remove('dragging'); hintTok++;
    topEl.getAnimations().forEach(function (a) { a.cancel(); });
    var i = idx, out = topEl, st = start || { dx: 0, dy: 0 };
    phone.classList.add('snap'); phone.style.setProperty('--p', 1); phone.style.setProperty('--a', 1);
    burstLeaves(195 + st.dx, 300 + st.dy * .3, 1, 18, 2.8);
    if (!reduce) out.animate([{ transform: topTransform(st.dx, st.dy), opacity: 1 }, { transform: 'translate3d(560px,' + (st.dy * .3 - 30) + 'px,0) rotate(24deg)', opacity: 0 }], { duration: D(480), easing: 'cubic-bezier(.3,.7,.35,1)', fill: 'forwards' });
    say(ITEMS[i].t + ' is already Canadian.');
    setTimeout(function () {
      hist.push({ i: i, action: 'cn', pool: -1, dir: 1 });
      out.remove(); idx = i + 1; topEl = null; jump(0, 0); cur = { dx: 0, dy: 0 }; setBack();
      if (idx < N) readNext(idx, false); else { busy = false; openFinale(); }
    }, D(470));
  }

  function openFinale() {
    var yes = hist.filter(function (h) { return h.action === 'yes'; });
    var kept = hist.filter(function (h) { return h.action === 'no'; }).length;
    $('fsum').innerHTML = '<b>' + yes.length + ' swapped</b>  •  ' + kept + ' kept';
    var th = $('fthumbs'); th.innerHTML = '';
    yes.forEach(function (h, k) { var d = document.createElement('div'); d.className = 't'; d.style.zIndex = 20 - k; d.innerHTML = coverHTML(POOL[h.pool]); th.appendChild(d); });
    finale.classList.add('on'); finale.setAttribute('aria-hidden', 'false');
    if (yes.length && !reduce) setTimeout(function () { burstLeaves(195, 520, 0, 26, 3.2); }, D(250));
  }

  function back() {
    if (closed || view !== 'match') return;
    if (busy || !hist.length) { if (!hist.length) nudgeDisabled(); return; }
    busy = true;
    var e = hist.pop(); finale.classList.remove('on'); finale.setAttribute('aria-hidden', 'true');
    if (e.action === 'yes') setTally(Math.max(0, tallyN - 1), false);
    stopPlay(topEl);
    var gone = topEl;
    if (gone) { if (reduce) gone.remove(); else gone.animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(160), fill: 'forwards' }).onfinish = function () { gone.remove(); }; }
    idx = e.i; if (e.action !== 'cn') assign[e.i] = e.pool;
    var prev = makeCard(e.i, 'is-top'); deck.appendChild(prev); topEl = prev;
    jump(0, 0);
    var P = songAt(e.i); setTheme(P); setMode(P); setChip(e.i, true);
    var d = e.dir;
    if (!reduce) prev.animate([{ transform: 'translate3d(' + (d * 560) + 'px,0,0) rotate(' + (d * 24) + 'deg)', opacity: 0 }, { transform: 'translate3d(' + (-d * 18) + 'px,0,0) rotate(' + (-d * 2) + 'deg)', opacity: 1, offset: .72 }, { transform: 'none', opacity: 1 }],
      { duration: D(560), easing: 'cubic-bezier(.3,.9,.4,1)' });
    say('Back to ' + ITEMS[e.i].t + '.');
    setBack();
    setTimeout(function () { busy = false; }, D(560));
  }
  function nudgeDisabled() { if (reduce) return; var b = phone.classList.contains('cn') ? bBack2 : bBack; b.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 220 }); showToast('This is the first song'); }

  /* ---------- drag ---------- */
  var sx = 0, sy = 0, lx = 0, lt = 0, vx = 0, pid = null, raf2 = 0;
  function render() {
    raf2 = 0; if (!topEl) return;
    var p = clamp(cur.dx / 130, -1, 1);
    topEl.style.transform = topTransform(cur.dx, cur.dy);
    phone.style.setProperty('--p', p); phone.style.setProperty('--a', Math.abs(p));
    var lean = p > .45 ? 'yes' : (p < -.45 ? 'no' : '');
    phone.dataset.lean = lean === 'no' ? 'no' : '';
  }
  deck.addEventListener('pointerdown', function (e) {
    if (busy || closed || !topEl || e.target.closest('.play')) return;
    hintTok++; dragging = true; pid = e.pointerId; deck.setPointerCapture(pid); deck.classList.add('dragging');
    sx = e.clientX; sy = e.clientY; lx = sx; lt = performance.now(); vx = 0; cur = { dx: 0, dy: 0 };
    phone.classList.remove('snap'); topEl.getAnimations().forEach(function (a) { a.cancel(); });
  });
  deck.addEventListener('pointermove', function (e) {
    if (!dragging || e.pointerId !== pid) return;
    cur.dx = (e.clientX - sx) / scale; cur.dy = (e.clientY - sy) / scale;
    if (topEl && topEl.classList.contains('cn') && cur.dx < 0) cur.dx *= .15;
    var now = performance.now(), dt = now - lt; if (dt > 0) vx = .7 * vx + .3 * ((e.clientX - lx) / scale / dt); lx = e.clientX; lt = now;
    if (!raf2) raf2 = requestAnimationFrame(render);
  });
  function release(e) {
    if (!dragging || (e && e.pointerId !== pid)) return;
    dragging = false; deck.classList.remove('dragging');
    try { deck.releasePointerCapture(pid); } catch (x) {}
    var go = Math.abs(cur.dx) > 105 || (Math.abs(vx) > .55 && Math.abs(cur.dx) > 30);
    var rdir = (Math.abs(vx) > .55 && Math.abs(cur.dx) > 30 ? Math.sign(vx) : Math.sign(cur.dx)) || 1;
    var isCn = topEl && topEl.classList.contains('cn');
    if (isCn && rdir < 0) go = false;
    if (go) { if (isCn) commitCn({ dx: cur.dx, dy: cur.dy }); else commit(rdir, false); }
    else {
      phone.classList.add('snap'); phone.style.setProperty('--p', 0); phone.style.setProperty('--a', 0); phone.dataset.lean = '';
      if (topEl) { var from = topEl.style.transform; topEl.style.transform = '';
        if (!reduce) topEl.animate([{ transform: from }, { transform: 'translate3d(' + (-cur.dx * .06) + 'px,0,0) rotate(' + (-cur.dx * .004) + 'deg)', offset: .55 }, { transform: 'none' }], { duration: D(520), easing: 'cubic-bezier(.3,1.2,.5,1)' }); }
      cur = { dx: 0, dy: 0 };
    }
  }
  deck.addEventListener('pointerup', release); deck.addEventListener('pointercancel', release);

  /* ---------- buttons, keys ---------- */
  function tapCommit(dir) {
    if (busy || idx >= N || closed || view !== 'match') return;
    if (ITEMS[idx].cn) { if (dir > 0) commitCn(); return; }
    var btn = dir > 0 ? bYes : bNo;
    if (!reduce) btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(.9)' }, { transform: 'scale(1)' }], { duration: D(220), easing: 'ease-out' });
    commit(dir, true);
  }
  bYes.addEventListener('click', function () { tapCommit(1); });
  bNo.addEventListener('click', function () { tapCommit(-1); });
  bNice.addEventListener('click', function () { commitCn(); });
  bBack.addEventListener('click', back); bBack2.addEventListener('click', back);
  bShuf.addEventListener('click', shuffle2);
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'Escape') {
      if (view === 'plist') closePlaylist();
      else if (view === 'det') $('dBack').click();
      else if (view === 'open' && scrOpen.classList.contains('pasting')) setPasting(false);
      else if (view === 'open' && matchActive) { setView('plist'); }
      return;
    }
    if (e.target === lnk || view !== 'match') return;
    if (k === 'ArrowRight') { e.preventDefault(); tapCommit(1); }
    else if (k === 'ArrowLeft') { e.preventDefault(); tapCommit(-1); }
    else if (k === 'r' || k === 'R') shuffle2();
    else if (k === 'z' || k === 'Z' || k === 'Backspace') { if (k === 'Backspace') e.preventDefault(); back(); }
  });
  $('fUndo').addEventListener('click', back);
  $('fAgain').addEventListener('click', function () { goOpen(); });
  $('fView').addEventListener('click', function () { openDetail(curPl, 'full', 'match'); });
  $('fSwap').addEventListener('click', function () { openDetail(curPl, 'swap', 'match'); showToast('Playlist updated (demo)'); burstLeaves(195, 600, 0, 26, 3.4); });
  $('fSave').addEventListener('click', function () { saveNew(curPl, 'match'); });
  $('bAlt').addEventListener('click', function () { run++; stopBig(); loader.classList.remove('on'); phone.classList.remove('loading'); busy = false; goOpen(); });

  var hintTok = 0;
  function hint() {
    if (reduce || !topEl || topEl.classList.contains('cn')) return;
    var el = topEl, tok = ++hintTok;
    phone.classList.add('snap');
    setTimeout(function () { if (hintTok !== tok) return; phone.style.setProperty('--p', .3); phone.style.setProperty('--a', .3); }, D(500));
    el.animate([{ transform: 'none' }, { transform: topTransform(46, 0), offset: .3 }, { transform: topTransform(-46, 0), offset: .7 }, { transform: 'none' }], { duration: D(1300), delay: D(500), easing: 'ease-in-out' }).onfinish = function () { if (hintTok !== tok) return; phone.style.setProperty('--p', 0); phone.style.setProperty('--a', 0); };
    setTimeout(function () { if (hintTok !== tok) return; phone.style.setProperty('--p', -.3); phone.style.setProperty('--a', .3); }, D(500 + 900));
  }

  /* ---------- views ---------- */
  function setView(v) {
    view = v; phone.dataset.view = v;
    scrOpen.classList.toggle('on', v === 'open'); scrOpen.setAttribute('aria-hidden', v === 'open' ? 'false' : 'true');
    scrLib.classList.toggle('on', v === 'lib'); scrLib.setAttribute('aria-hidden', v === 'lib' ? 'false' : 'true');
    scrDet.classList.toggle('on', v === 'det'); scrDet.setAttribute('aria-hidden', v === 'det' ? 'false' : 'true');
    plist.setAttribute('aria-hidden', v === 'plist' ? 'false' : 'true');
    if (v === 'plist') tabbar.dataset.sel = 'match'; else if (v === 'lib') tabbar.dataset.sel = 'lib';
  }
  function setPasting(on) {
    scrOpen.classList.toggle('pasting', on);
    lnk.placeholder = on ? 'open.spotify.com/playlist/…' : 'Paste a playlist link';
    if (!on) lnk.blur();
  }
  function goOpen() {
    finale.classList.remove('on');
    setView('open'); setPasting(false); lnk.value = '';
  }

  /* ---------- playlist underlay ---------- */
  function rowsFor(pl) {
    var P = PLAYLISTS[pl], s = saved[pl], decided = {};
    if (s) s.hist.forEach(function (h) { decided[h.i] = h; });
    return P.items.map(function (it, i) {
      var h = decided[i];
      if (it.cn) return { t: it.t, a: it.a, th: '<div class="pc" style="background:' + thumbBg(it.c) + '"></div>', leaf: 1 };
      if (h && h.action === 'yes') { var S = POOL[h.pool]; return { t: S.t, a: S.a, th: '<div class="pc">' + coverHTML(S) + '</div>', leaf: 1, sw: 1, c: (S.art ? S.art[1] : S.c1) }; }
      return { t: it.t, a: it.a, th: '<div class="pc" style="background:' + thumbBg(it.c) + '"></div>', todo: !h };
    });
  }
  function statsFor(pl) {
    var P = PLAYLISTS[pl], s = saved[pl], sw = 0, cn = P.items.filter(function (i) { return i.cn; }).length;
    if (s) s.hist.forEach(function (h) { if (h.action === 'yes') sw++; });
    return { n: P.items.length, sw: sw, pct: Math.round((cn + sw) / P.items.length * 100) };
  }
  function renderPlaylist() {
    var rows = $('plistRows'); rows.innerHTML = '';
    var data = rowsFor(curPl), st = statsFor(curPl);
    data.forEach(function (r) {
      var el = document.createElement('div'); el.className = 'prow' + (r.todo ? ' todo' : '');
      el.innerHTML = r.th + '<div class="pm"><div class="pt"></div><div class="pa"></div></div>' + (r.leaf ? '<img class="lm" src="assets/412e0.svg" alt="">' : '');
      el.querySelector('.pt').textContent = r.t; el.querySelector('.pa').textContent = r.a;
      rows.appendChild(el);
    });
    $('phTitle').textContent = PLAYLISTS[curPl].title;
    $('psub').innerHTML = st.n + ' songs  •  <b>' + st.sw + ' swapped</b>';
    rows.scrollTop = 0;
    if (!reduce) Array.prototype.forEach.call(rows.children, function (r, k) {
      r.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: D(380), delay: D(200 + k * 45), fill: 'backwards', easing: 'ease-out' });
    });
  }
  function renderMini() {
    var P = idx < N ? songAt(idx) : null;
    mini.innerHTML = P ? '<span class="th">' + coverHTML(P) + '</span><span class="mx"><div class="mt"></div><div class="ma"></div></span>' :
      '<span class="mx"><div class="mt"></div><div class="ma"></div></span>';
    mini.querySelector('.mt').textContent = P ? P.t : 'All songs reviewed';
    mini.querySelector('.ma').textContent = P ? P.a : 'Tap to see your picks';
  }
  function openPlaylist() {
    if (busy || closed || view !== 'match') return; closed = true; stopPlay(topEl);
    renderPlaylist(); renderMini(); phone.classList.add('closed'); setView('plist'); say('Playlist open.');
  }
  function closePlaylist() {
    if (!closed || view !== 'plist') return; closed = false;
    phone.classList.remove('closed'); setView('match'); say('Back to matching.');
  }
  tally.addEventListener('click', openPlaylist);

  /* swipe the sheet down by its grabber */
  var gz = $('gz'), gdrag = null;
  gz.addEventListener('pointerdown', function (e) {
    if (busy || closed || view !== 'match') return;
    gdrag = { id: e.pointerId, y: e.clientY, dy: 0 }; gz.setPointerCapture(e.pointerId); sheet.style.transition = 'none';
  });
  gz.addEventListener('pointermove', function (e) {
    if (!gdrag || e.pointerId !== gdrag.id) return;
    gdrag.dy = Math.max(0, (e.clientY - gdrag.y) / scale);
    sheet.style.transform = 'translateY(' + gdrag.dy + 'px)'; sheet.style.borderRadius = '0';
  });
  function gend(e) {
    if (!gdrag || (e && e.pointerId !== gdrag.id)) return;
    var dy = gdrag.dy; gdrag = null; sheet.style.transition = ''; sheet.style.transform = ''; sheet.style.borderRadius = '';
    if (dy > 110) openPlaylist();
  }
  gz.addEventListener('pointerup', gend); gz.addEventListener('pointercancel', gend);
  gz.addEventListener('click', function (e) { if (e.detail === 0) openPlaylist(); });

  /* swipe the pill up (or tap it) to keep matching */
  var mdown = null;
  mini.addEventListener('pointerdown', function (e) { mdown = e.clientY; });
  mini.addEventListener('pointerup', function (e) { if (mdown == null) return; var dy = (e.clientY - mdown) / scale; mdown = null; if (dy < -25 || Math.abs(dy) < 8) closePlaylist(); });
  mini.addEventListener('click', function (e) { if (e.detail === 0) closePlaylist(); });

  /* ---------- tab bar ---------- */
  $('tabMatch').addEventListener('click', function () { if (!matchActive) { goOpen(); return; } renderPlaylist(); renderMini(); setView('plist'); });
  $('tabLib').addEventListener('click', function () { renderLib(); setView('lib'); });
  $('tabPlus').addEventListener('click', goOpen);

  /* ---------- open screen ---------- */
  function pcardHTML(pl, withSongs) {
    var P = PLAYLISTS[pl], st = statsFor(pl);
    return '<span class="th">' + mosaicHTML(mosaicColors(pl)) + '</span><span class="tx"><div class="tt">' + P.title + '</div><div class="ts">' + (st.pct === 100 ? '100% Canadian !' : st.pct + '% Canadian') + '</div></span>' +
      '<span class="ct">' + st.n + ' songs</span><svg class="chev" width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 7 7l-5.5 5.5"/></svg>';
  }
  function renderOpenCards() {
    var box = $('oPlays'); Array.prototype.forEach.call(box.querySelectorAll('.pcard'), function (n) { n.remove(); });
    PLAYLISTS.forEach(function (P, pl) {
      var b = document.createElement('button'); b.className = 'pcard'; b.innerHTML = pcardHTML(pl);
      b.addEventListener('click', function () { if (busy && view !== 'open') return; start(pl); });
      box.appendChild(b);
    });
  }
  lnk.addEventListener('focus', function () { setPasting(true); });
  lf.addEventListener('click', function () { lnk.focus({ preventScroll: true }); });
  $('xBtn').addEventListener('click', function () { lnk.value = ''; setPasting(false); });
  function shake() { lf.classList.remove('shake'); void lf.offsetWidth; lf.classList.add('shake'); }
  function typeDemo(cb) {
    var s = 'open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd', i = 0;
    (function t() { lnk.value = s.slice(0, ++i); if (i < s.length) setTimeout(t, reduce ? 1 : 16); else setTimeout(cb, D(350)); })();
  }
  function submitLink() {
    var v = lnk.value.trim();
    if (!v) { typeDemo(function () { start(0); }); return; }
    if (!/spotify/i.test(v)) { shake(); showToast('That doesn’t look like a Spotify link'); return; }
    start(0);
  }
  $('oTab').addEventListener('click', function () { if (!matchActive) { showToast('Pick a playlist to start matching'); return; } renderPlaylist(); renderMini(); setView('plist'); });
  lnk.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); submitLink(); } });

  /* on-screen keyboard */
  var kbShift = false, kbNum = false;
  var KB = { lower: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'], num: ['1234567890', '-/:;()$&@"', '.,?!\''] };
  function buildKb() {
    var L = kbNum ? KB.num : KB.lower, kb = $('kb'), h = '';
    function keys(s) { return s.split('').map(function (c) { var d = (kbShift && !kbNum) ? c.toUpperCase() : c; return '<button class="k" data-k="' + d + '" tabindex="-1">' + d + '</button>'; }).join(''); }
    h += '<div class="kr">' + keys(L[0]) + '</div>';
    h += '<div class="kr r2">' + keys(L[1]) + '</div>';
    h += '<div class="kr r3"><button class="k w' + (kbShift ? ' on' : '') + '" data-f="shift" tabindex="-1" aria-label="Shift">' + (kbNum ? '<span style="font-size:15px">#+=</span>' : '<svg width="20" height="20" viewBox="0 0 20 20" fill="' + (kbShift ? '#000' : 'none') + '" stroke="#000" stroke-width="1.7" stroke-linejoin="round"><path d="M10 2 2 10h4.5v6h7v-6H18z"/></svg>') + '</button><div class="mid">' + keys(L[2]) + '</div>' +
      '<button class="k w" data-f="del" tabindex="-1" aria-label="Delete"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="#000" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M8 2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8L1.5 10z"/><path d="m12 6.5 7 7m0-7-7 7"/></svg></button></div>';
    h += '<div class="kr"><button class="k sw" data-f="num" tabindex="-1">' + (kbNum ? 'ABC' : '123') + '</button><button class="k" data-k=" " tabindex="-1" aria-label="Space"></button><button class="k rt" data-f="ret" tabindex="-1" aria-label="Go"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 2v7a2 2 0 0 1-2 2H3m0 0 4-4m-4 4 4 4"/></svg></button></div>';
    h += '<div class="bb"><img src="assets/f1137.svg" alt=""><svg width="20" height="26" viewBox="0 0 20 26" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round"><rect x="6.5" y="1.5" width="7" height="14" rx="3.5"/><path d="M2.5 11.5a7.5 7.5 0 0 0 15 0M10 19v5"/></svg></div>';
    kb.innerHTML = h;
  }
  buildKb();
  $('kb').addEventListener('pointerdown', function (e) { e.preventDefault(); });
  $('kb').addEventListener('click', function (e) {
    var b = e.target.closest('.k'); if (!b) return;
    var f = b.dataset.f, k = b.dataset.k;
    if (f === 'shift') { if (!kbNum) { kbShift = !kbShift; buildKb(); } return; }
    if (f === 'num') { kbNum = !kbNum; kbShift = false; buildKb(); return; }
    if (f === 'del') { lnk.value = lnk.value.slice(0, -1); return; }
    if (f === 'ret') { submitLink(); return; }
    if (k != null) { lnk.value += k; if (kbShift) { kbShift = false; buildKb(); } lnk.scrollLeft = lnk.scrollWidth; }
  });

  /* ---------- library + detail ---------- */
  var SAVED = [];
  function createSaved(pl) {
    var P = PLAYLISTS[pl], rows = rowsFor(pl).filter(function (r) { return r.sw; });
    var e = { pl: pl, title: newTitle(P.title), rows: rows };
    var k = -1; SAVED.forEach(function (x, i) { if (x.pl === pl) k = i; });
    if (k >= 0) { SAVED[k] = e; return k; }
    SAVED.unshift(e); return 0;
  }
  function saveNew(pl, from) {
    var swapped = rowsFor(pl).filter(function (r) { return r.sw; }).length, sv = null;
    if (swapped) { sv = createSaved(pl); showToast('Saved to your library'); } else showToast('Swap a song first to save a playlist');
    openDetail(pl, 'new', from, sv);
  }
  function savedCardHTML(e) {
    var cols = e.rows.slice(0, 4).map(function (r) { return r.c; });
    for (var k = 0; cols.length < 4; k++) cols.push(cols[k % cols.length]);
    return '<span class="th">' + mosaicHTML(cols) + '</span><span class="tx"><div class="tt"></div><div class="ts">100% Canadian !</div></span>' +
      '<span class="ct">' + e.rows.length + ' song' + (e.rows.length === 1 ? '' : 's') + '</span><svg class="chev" width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 7 7l-5.5 5.5"/></svg>';
  }
  function renderLib() {
    var box = $('lCards'); box.innerHTML = '';
    SAVED.forEach(function (e, i) {
      var b = document.createElement('button'); b.className = 'pcard'; b.innerHTML = savedCardHTML(e);
      b.querySelector('.tt').textContent = e.title;
      b.addEventListener('click', function () { openDetail(e.pl, 'new', 'lib', i); });
      box.appendChild(b);
    });
    PLAYLISTS.forEach(function (P, pl) {
      var b = document.createElement('button'); b.className = 'pcard'; b.innerHTML = pcardHTML(pl);
      b.addEventListener('click', function () { openDetail(pl, 'full', 'lib'); });
      box.appendChild(b);
    });
    var recent = [];
    Object.keys(saved).forEach(function (k) { saved[k].hist.forEach(function (h) { if (h.action === 'yes') recent.push(h); }); });
    var g = $('lGrid'); g.innerHTML = '';
    for (var i = 0; i < 6; i++) {
      var d = document.createElement('div');
      var h = recent[recent.length - 1 - i]; if (h) d.innerHTML = coverHTML(POOL[h.pool]);
      g.appendChild(d);
    }
    $('lScroll').scrollTop = 0;
  }
  var detHist = [], dMode = 'full';
  function newTitle(t) { return t + ', Eh-dition'; }
  function openDetail(pl, mode, from, sv) {
    var fr = (view === 'det' && detHist.length) ? detHist[0].from : from;
    if (view !== 'det') detHist = [];
    detHist.push({ pl: pl, mode: mode, from: fr || 'lib', sv: sv == null ? null : sv });
    renderDetail(); setView('det');
  }
  function updateDSub() {
    var l = $('dList'), n = l.querySelectorAll('.drow').length, cn = l.querySelectorAll('.drow[data-cn]').length;
    $('dSub').textContent = dMode === 'full' ? n + ' songs  •  ' + cn + ' Canadian' : cn + ' Canadian song' + (cn === 1 ? '' : 's') + ' added';
  }
  function renderDetail() {
    var h = detHist[detHist.length - 1], pl = h.pl; dMode = h.mode; detPl = pl; detFrom = detHist[0].from;
    var P = PLAYLISTS[pl], all = rowsFor(pl);
    var sv = (h.sv != null && SAVED[h.sv]) ? SAVED[h.sv] : null;
    var rows = sv ? sv.rows : (dMode === 'full' ? all : all.filter(function (r) { return r.sw; }));
    $('dTitle').textContent = dMode === 'new' ? (sv ? sv.title : newTitle(P.title)) : P.title;
    $('dTb').classList.toggle('new', dMode === 'new');
    $('dSwap').textContent = dMode === 'new' ? 'See original playlist' : 'Swap all';
    var cols = dMode === 'full' ? mosaicColors(pl) : rows.slice(0, 4).map(function (r) { return r.c; });
    if (!cols.length) cols = mosaicColors(pl);
    for (var k = 0; cols.length < 4; k++) cols.push(cols[k % cols.length]);
    $('dCov').innerHTML = mosaicHTML(cols);
    var l = $('dList'); l.innerHTML = '';
    if (!rows.length) l.innerHTML = '<div class="dempty">No songs swapped yet.</div>';
    rows.forEach(function (r) {
      var el = document.createElement('div'); el.className = 'drow'; if (r.leaf) el.dataset.cn = '1';
      el.innerHTML = '<div class="rc">' + r.th + '<div class="pm"><div class="pt"></div><div class="pa"></div></div>' + (r.leaf ? '<img class="lm" src="assets/412e0.svg" alt="">' : '') + '</div>' +
        '<button class="rdel" aria-label="Remove song"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M7 1.5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7L1 9z"/><path d="m10.5 6 5 6m0-6-5 6"/></svg></button>';
      el.querySelector('.pt').textContent = r.t; el.querySelector('.pa').textContent = r.a;
      wireRow(el); l.appendChild(el);
    });
    l.scrollTop = 0; updateDSub();
  }
  function wireRow(el) {
    var rc = el.querySelector('.rc'), x0 = 0, y0 = 0, dx = 0, drag = false, pid = null, base = 0;
    rc.addEventListener('pointerdown', function (e) { pid = e.pointerId; x0 = e.clientX; y0 = e.clientY; dx = 0; drag = false; base = el.classList.contains('open') ? -86 : 0; });
    rc.addEventListener('pointermove', function (e) {
      if (e.pointerId !== pid) return;
      var mx = (e.clientX - x0) / scale, my = (e.clientY - y0) / scale;
      if (!drag) { if (Math.abs(mx) > 8 && Math.abs(mx) > Math.abs(my) * 1.5) { drag = true; try { rc.setPointerCapture(pid); } catch (x) {} rc.style.transition = 'none'; } else return; }
      dx = clamp(base + mx, -100, 0); rc.style.transform = 'translateX(' + dx + 'px)';
    });
    function end(e) {
      if (e.pointerId !== pid) return; pid = null; if (!drag) return; drag = false;
      rc.style.transition = ''; rc.style.transform = '';
      Array.prototype.forEach.call($('dList').querySelectorAll('.drow.open'), function (o) { if (o !== el) o.classList.remove('open'); });
      el.classList.toggle('open', dx < -43);
    }
    rc.addEventListener('pointerup', end); rc.addEventListener('pointercancel', end);
    el.querySelector('.rdel').addEventListener('click', function () {
      var h = el.offsetHeight; el.style.pointerEvents = 'none';
      if (reduce) { el.remove(); updateDSub(); return; }
      el.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: D(260), easing: 'ease-in', fill: 'forwards' }).onfinish = function () { el.remove(); updateDSub(); };
    });
  }
  $('dBack').addEventListener('click', function () {
    detHist = [];
    if (!closed) { closed = true; phone.classList.add('closed'); }
    renderLib(); setView('lib');
  });
  $('dSwap').addEventListener('click', function () {
    if (dMode === 'new') openDetail(detPl, 'full');
    else { showToast('Playlist updated (demo)'); burstLeaves(195, 520, 0, 30, 3.4); }
  });
  $('dAdd').addEventListener('click', function () { saveNew(detPl); });
  $('dSpot').addEventListener('click', function () { showToast('Opening Spotify (demo)'); });
  $('dUndo').addEventListener('click', function () { showToast('Nothing to undo yet'); });

  /* ---------- loaders: one contour, two speeds ---------- */
  var CITIES = [
    ['Vancouver', 49.2827, 123.1207], ['Whitehorse', 60.7212, 135.0568], ['Edmonton', 53.5461, 113.4938], ['Calgary', 51.0447, 114.0719],
    ['Regina', 50.4452, 104.6189], ['Winnipeg', 49.8951, 97.1384], ['Toronto', 43.6532, 79.3832], ['Ottawa', 45.4215, 75.6972],
    ['Montréal', 45.5019, 73.5674], ['Halifax', 44.6488, 63.5752], ['St. John’s', 47.5615, 52.7126]
  ];
  var STATUS = ['Reading your songs', 'Looking for good company', 'Lining up your picks'];
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, D(ms)); }); }
  (function buildOutline() {
    var ns = 'http://www.w3.org/2000/svg', s = $('ripples');
    ['fr-track', 'fr-tail', 'fr-head'].forEach(function (cls) {
      var r = document.createElementNS(ns, 'rect'); r.setAttribute('class', cls); r.setAttribute('x', 127); r.setAttribute('y', 232);
      r.setAttribute('width', 136); r.setAttribute('height', 136); r.setAttribute('rx', 30); r.setAttribute('pathLength', 100); s.appendChild(r);
    });
  })();

  var tickTimer = 0, statTimer = 0, cityI = 0, statI = 0;
  function tickCity() {
    var c = CITIES[cityI % CITIES.length]; cityI++;
    var cy = $('loCy');
    if (!reduce) cy.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: D(380), easing: 'ease-out' });
    cy.textContent = c[0];
  }
  function nextStatus() {
    var el = $('loS');
    if (reduce) { el.textContent = STATUS[statI++ % STATUS.length]; return; }
    el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(180), fill: 'forwards' }).onfinish = function () {
      el.textContent = STATUS[statI++ % STATUS.length];
      var a = el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: D(300), easing: 'ease-out', fill: 'both' });
      a.onfinish = function () { el.getAnimations().forEach(function (x) { x.cancel(); }); };
    };
  }
  function startBig() {
    loader.classList.add('on');
    ['loH', 'loS', 'loT', 'bAlt', 'loBg'].forEach(function (id) { $(id).getAnimations().forEach(function (a) { a.cancel(); }); $(id).style.opacity = 1; });
    $('ripples').getAnimations().forEach(function (a) { a.cancel(); }); $('ripples').style.opacity = 1; $('loMos').getAnimations().forEach(function (a) { a.cancel(); }); $('loMos').style.opacity = 1;
    $('loCy').textContent = CITIES[0][0]; cityI = 1;
    $('loS').textContent = STATUS[0]; statI = 1;
    clearInterval(tickTimer); clearInterval(statTimer);
    tickTimer = setInterval(tickCity, D(1050)); statTimer = setInterval(nextStatus, D(2300));
  }
  function stopBig() { clearInterval(tickTimer); clearInterval(statTimer); }

  async function start(pl) {
    var me = ++run; function alive() { return me === run; }
    curPl = pl; ITEMS = PLAYLISTS[pl].items; N = ITEMS.length; matchActive = true;
    MOS = mosaicColors(pl); $('loMos').innerHTML = mosaicHTML(MOS);
    if (closed) { closed = false; phone.classList.remove('closed'); }
    build();
    var card0 = topEl; if (card0 && card0.parentNode) card0.parentNode.removeChild(card0); topEl = null;
    busy = true; stopBig(); skel.classList.remove('on'); frame.classList.remove('on', 'ready'); setBusyUI(false);
    phone.classList.add('loading');
    setTheme({ c1: '#5a1a35', c2: '#1a0710' });
    chipLabDef.textContent = 'Reading your playlist'; chipTitle.textContent = PLAYLISTS[pl].title + ' · ' + N + ' songs';
    chipThumb.style.background = ''; chipThumb.style.display = 'grid'; chipThumb.style.gridTemplateColumns = '1fr 1fr'; chipThumb.innerHTML = mosaicHTML(MOS);
    startBig(); say('Reading your playlist.');
    setView('load');
    setTimeout(function () { if (view !== 'open') { scrOpen.classList.remove('pasting'); lnk.value = ''; lnk.blur(); } }, D(600));
    await sleep(5600); if (!alive()) return;
    /* hand-off: the playlist cover grows into the first card */
    stopBig();
    ['loH', 'loS', 'loT', 'bAlt'].forEach(function (id) { var e = $(id); if (!reduce) e.animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(260), fill: 'forwards' }); else e.style.opacity = 0; });
    if (!reduce) $('loBg').animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(600), easing: 'ease-out', fill: 'forwards' }); else $('loBg').style.opacity = 0;
    var ol = $('ripples'); ol.style.transformOrigin = '195px 300px';
    if (!reduce) ol.animate([{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(2.03)', opacity: 0 }], { duration: D(600), easing: 'cubic-bezier(.5,.1,.3,1)', fill: 'forwards' }); else ol.style.opacity = 0;
    topEl = card0; deck.appendChild(topEl);
    setTheme(songAt(0)); setMode(songAt(0)); setChip(0, true);
    phone.classList.remove('loading');
    var mos = $('loMos');
    if (!reduce) {
      topEl.animate([{ opacity: 0 }, { opacity: 0, offset: .45 }, { opacity: 1 }], { duration: D(640), easing: 'ease-out' });
      mos.animate([{ transform: 'scale(1)', opacity: 1, borderRadius: '4px' }, { transform: 'scale(2.2)', opacity: 0, borderRadius: '2px' }], { duration: D(600), easing: 'cubic-bezier(.5,.1,.3,1)', fill: 'forwards' });
      Array.prototype.forEach.call(topEl.querySelectorAll('.meta, .why, .embed, .dyk'), function (m, k) {
        m.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 0, transform: 'translateY(12px)', offset: .5 }, { opacity: 1, transform: 'none' }], { duration: D(820), delay: D(k * 70), easing: 'ease-out', fill: 'backwards' });
      });
    } else mos.style.opacity = 0;
    await sleep(700); if (!alive()) return;
    loader.classList.remove('on'); busy = false; setView('match'); say('Ready. Swap or keep the first song.');
    hint();
  }

  async function readNext(i, fromShuffle) {
    var me = run; busy = true;
    setBusyUI(true); frame.classList.remove('ready'); void frame.getBoundingClientRect(); frame.classList.add('on'); skel.classList.add('on');
    setMode(songAt(i));
    if (!fromShuffle) setChip(i, true);
    var wait = lag ? 3200 : (900 + Math.random() * 500);
    await sleep(wait); if (me !== run) return;
    var card = makeCard(i, 'is-top'); card.style.opacity = 0; deck.appendChild(card); topEl = card;
    setTheme(songAt(i));
    frame.classList.add('ready'); skel.classList.remove('on');
    if (!reduce) {
      var a = card.animate([{ opacity: 0, transform: 'translateY(16px) scale(.94)' }, { opacity: 1, transform: 'none' }], { duration: D(520), easing: 'cubic-bezier(.3,1.3,.5,1)', fill: 'both' });
      a.onfinish = function () { a.cancel(); card.style.opacity = ''; };
      Array.prototype.forEach.call(card.querySelectorAll('.meta, .why, .embed, .dyk'), function (m, k) {
        m.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 0, offset: .35 }, { opacity: 1, transform: 'none' }], { duration: D(700), delay: D(k * 60), easing: 'ease-out', fill: 'backwards' });
      });
    } else card.style.opacity = '';
    await sleep(560); if (me !== run) return;
    frame.classList.remove('on', 'ready'); setBusyUI(false); busy = false; setBack();
    say('Next song: ' + ITEMS[i].t + ' by ' + ITEMS[i].a + '.');
  }

  function shuffle2() {
    if (busy || closed || idx >= N || view !== 'match' || ITEMS[idx].cn) return; busy = true;
    var i = idx, curIdx = assign[i], next = curIdx;
    hintTok++; jump(0, 0); topEl.getAnimations().forEach(function (a) { a.cancel(); });
    for (var k = 1; k <= POOL.length; k++) { var c = (curIdx + k) % POOL.length; if (assign.indexOf(c) < 0) { next = c; break; } }
    assign[i] = next; seen[i] = (seen[i] || 1) + 1;
    stopPlay(topEl);
    bShuf.classList.remove('spin'); void bShuf.offsetWidth; bShuf.classList.add('spin');
    pickEl.textContent = 'Option ' + seen[i]; pickEl.classList.add('show'); setTimeout(function () { pickEl.classList.remove('show'); }, D(1200));
    var out = topEl;
    if (!reduce) out.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.94) translateY(10px)' }], { duration: D(220), easing: 'ease-in', fill: 'forwards' });
    setTimeout(function () { out.remove(); topEl = null; readNext(i, true); }, D(200));
    say('Looking for another pick.');
  }

  renderOpenCards();
  renderLib();
})();
