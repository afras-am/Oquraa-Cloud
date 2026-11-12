import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks.js';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Pos from './pages/Pos.jsx';
import Software from './pages/Software.jsx';
import WhyUs from './pages/WhyUs.jsx';
import Contact from './pages/Contact.jsx';

function ProgressBar() {
  const ref = useRef(null);
  useEffect(() => {
    const on = () => {
      const m = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${m > 0 ? Math.min(window.scrollY / m, 1) : 0})`;
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return <div id="sp" ref={ref} />;
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useReveal(pathname);

  return (
    <>
      <ProgressBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/software" element={<Software />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
