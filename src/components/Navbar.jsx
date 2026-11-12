import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';
import { useTheme } from '../hooks.js';

export default function Navbar() {
  const { pathname } = useLocation();
  const { isDark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); setDd(false); }, [pathname]);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 10);
    s();
    window.addEventListener('scroll', s, { passive: true });
    return () => window.removeEventListener('scroll', s);
  }, []);

  useEffect(() => {
    if (!dd) return undefined;
    const close = () => setDd(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [dd]);

  const servicesActive = ['/services', '/pos', '/software'].includes(pathname);
  const cls = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link className="logo" to="/" aria-label="Oquraa Cloud home">
        <img className="lg-l" src={logoLight} alt="Oquraa Cloud" />
        <img className="lg-d" src={logoDark} alt="Oquraa Cloud" />
      </Link>

      <div className={'links' + (open ? ' open' : '')} id="links">
        <NavLink to="/" end className={cls}>Home</NavLink>
        <div className={'dd' + (dd ? ' open' : '')}>
          <Link className={'ddt' + (servicesActive ? ' active' : '')} to="/services">Services</Link>
          <button
            className="ddb"
            type="button"
            aria-label="Open services menu"
            aria-expanded={dd}
            onClick={(e) => { e.stopPropagation(); setDd((v) => !v); }}
          >
            ▾
          </button>
          <div className="ddm">
            <div className="ddi">
              <NavLink to="/services" className={cls}>All services</NavLink>
              <NavLink to="/pos" className={cls}>POS System</NavLink>
              <NavLink to="/software" className={cls}>Software Development</NavLink>
            </div>
          </div>
        </div>
        <NavLink to="/why-us" className={cls}>Why Us</NavLink>
        <NavLink to="/contact" className={cls}>Contact</NavLink>
      </div>

      <div className="right">
        <button className="pill" id="theme" type="button" aria-label="Toggle theme" onClick={toggle}>
          {isDark ? '☀' : '☾'}
        </button>
        <Link className="pill cta-l" to="/contact">Get a quote</Link>
        <button
          className="pill"
          id="burger"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
