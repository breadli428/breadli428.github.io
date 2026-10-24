(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme: system → light → dark ---------- */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    const order = ['system', 'light', 'dark'];
    const label = { system: 'Theme: automatic', light: 'Theme: light', dark: 'Theme: dark' };
    const current = () => root.getAttribute('data-theme') || 'system';
    themeBtn.setAttribute('aria-label', label[current()]);
    themeBtn.addEventListener('click', () => {
      const next = order[(order.indexOf(current()) + 1) % order.length];
      if (next === 'system') root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      themeBtn.setAttribute('aria-label', label[next]);
    });
  }

  /* ---------- Global nav ---------- */
  const nav = document.querySelector('.gnav');
  const hero = document.querySelector('.hero');
  const menuBtn = document.querySelector('.gnav-menu-btn');
  if (menuBtn) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.querySelectorAll('.gnav-links a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  const heroMedia = document.querySelector('.hero-media');
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 4);
    if (hero) nav.classList.toggle('is-over-hero', y < hero.offsetHeight * 0.25);
    if (heroMedia && !reduceMotion) {
      const r = heroMedia.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
      heroMedia.style.setProperty('--p', p.toFixed(3));
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Scroll spy for nav + article TOC ---------- */
  const spy = (links, attr) => {
    const map = new Map();
    links.forEach((a) => {
      const id = decodeURIComponent((a.getAttribute(attr) || '').split('#')[1] || '');
      const el = id && document.getElementById(id);
      if (el) map.set(el, a);
    });
    if (!map.size) return;
    // The active target is the last one whose top has passed 30% of the viewport.
    const targets = [...map.keys()];
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let current = null;
      targets.forEach((el) => { if (el.getBoundingClientRect().top <= line) current = el; });
      links.forEach((l) => l.classList.toggle('is-active', current !== null && map.get(current) === l));
    };
    window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  };
  if (document.body.classList.contains('home')) spy([...document.querySelectorAll('.gnav-links a')], 'href');
  spy([...document.querySelectorAll('.toc a')], 'href');

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Carousels ---------- */
  document.querySelectorAll('[data-carousel]').forEach((c) => {
    const track = c.querySelector('.carousel-track');
    const prev = c.querySelector('[data-prev]');
    const next = c.querySelector('[data-next]');
    if (!track || !prev || !next) return;
    const step = () => {
      const card = track.firstElementChild;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
      const per = card ? card.getBoundingClientRect().width + gap : 400;
      return Math.max(per, Math.floor(track.clientWidth / per) * per);
    };
    const update = () => {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* ---------- Modals ---------- */
  const openModal = (dlg) => {
    if (!dlg) return;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  };
  document.querySelectorAll('dialog.modal').forEach((dlg) => {
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => dlg.close()));
  });

  // News cards open the shared news dialog with that item's content.
  const newsDlg = document.getElementById('news-modal');
  document.querySelectorAll('[data-news]').forEach((card) => {
    card.addEventListener('click', () => {
      const tpl = document.getElementById(card.dataset.news);
      if (!tpl || !newsDlg) return;
      newsDlg.querySelector('[data-slot]').replaceChildren(tpl.content.cloneNode(true));
      openModal(newsDlg);
    });
  });

  // News archive: show/hide and filter by year.
  const archiveToggle = document.querySelector('[data-archive-toggle]');
  const archive = document.getElementById('news-archive');
  if (archiveToggle && archive) {
    archiveToggle.addEventListener('click', () => {
      const show = archive.hidden;
      archive.hidden = !show;
      archiveToggle.setAttribute('aria-expanded', String(show));
      archiveToggle.querySelector('span').textContent = show ? 'Hide all news' : archiveToggle.dataset.label;
      if (show) archive.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    });
    const tabs = archive.querySelectorAll('.year-tab');
    tabs.forEach((tab) => tab.addEventListener('click', () => {
      tabs.forEach((t) => t.setAttribute('aria-pressed', String(t === tab)));
      const y = tab.dataset.year;
      archive.querySelectorAll('[data-year]').forEach((g) => {
        if (g.classList.contains('year-tab')) return;
        g.hidden = y !== 'all' && g.dataset.year !== y;
      });
    }));
  }

  // "Show more" buttons for long grids.
  document.querySelectorAll('[data-show-more]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const grid = document.getElementById(btn.dataset.showMore);
      grid.querySelectorAll('.is-extra').forEach((el) => { el.hidden = false; el.classList.add('is-in'); });
      btn.parentElement.remove();
    });
  });

  // Cite dialog + copy to clipboard.
  document.querySelectorAll('[data-cite]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(document.getElementById(btn.dataset.cite));
    });
  });
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = document.getElementById(btn.dataset.copy).textContent;
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = old; }, 1600);
      } catch (err) {}
    });
  });

  /* ---------- Search (Pagefind, generated at deploy time) ---------- */
  const searchDlg = document.getElementById('search-modal');
  let searchLoaded = false;
  const openSearch = () => {
    openModal(searchDlg);
    if (searchLoaded) { searchDlg.querySelector('input')?.focus(); return; }
    searchLoaded = true;
    const base = root.dataset.base || '/';
    const css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = base + 'pagefind/pagefind-ui.css';
    document.head.appendChild(css);
    const s = document.createElement('script');
    s.src = base + 'pagefind/pagefind-ui.js';
    s.onload = () => {
      new window.PagefindUI({ element: '#search', showSubResults: true, showImages: false, resetStyles: false });
      setTimeout(() => searchDlg.querySelector('input')?.focus(), 50);
    };
    s.onerror = () => {
      document.getElementById('search').innerHTML = '<p class="search-fallback">Search is available on the published site (the index is built during deployment).</p>';
    };
    document.head.appendChild(s);
  };
  document.querySelectorAll('[data-search]').forEach((b) => b.addEventListener('click', openSearch));
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k' && searchDlg) { e.preventDefault(); openSearch(); }
  });
})();
