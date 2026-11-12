import { useEffect, useState } from 'react';

export function useTitle(t) {
  useEffect(() => { document.title = t ? `${t} · Oquraa Cloud` : 'Oquraa Cloud'; }, [t]);
}

export function useTheme() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('oq-theme'); } catch { return null; } });
  useEffect(() => {
    const r = document.documentElement;
    if (theme) r.setAttribute('data-theme', theme); else r.removeAttribute('data-theme');
  }, [theme]);
  const isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const toggle = () => {
    const n = isDark ? 'light' : 'dark';
    setTheme(n);
    try { localStorage.setItem('oq-theme', n); } catch { /* ignore */ }
  };
  return { isDark, toggle };
}

const SEL = '.eyebrow,section h2,.lead,.grid>.card,.step,.chips,.cpage .btns,.cta,.stat,.panel,details,.cpage>section>.cform';

// Fade-and-rise animation for elements as they scroll into view
export function useReveal(dep) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    const timers = [];
    const io = new IntersectionObserver(
      (es) => es.forEach((en) => {
        if (!en.isIntersecting) return;
        const e = en.target;
        io.unobserve(e);
        e.classList.add('in');
        timers.push(setTimeout(() => { e.classList.remove('rv', 'in'); e.style.removeProperty('--d'); }, 1300));
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll(SEL).forEach((e) => {
      if (!e.classList.contains('rv')) {
        const p = e.parentNode;
        p._n = p._n || 0;
        e.style.setProperty('--d', (p._n++ % 6) * 0.09 + 's');
        e.classList.add('rv');
      }
      io.observe(e);
    });
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [dep]);
}
