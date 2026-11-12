import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero.mp4';
import { useTitle } from '../hooks.js';
import { Chips, Cta, Faq, Section, Steps, Card, Grid, ServiceCards } from '../components/Ui.jsx';

export default function Home() {
  useTitle('');
  const video = useRef(null);
  const copy = useRef(null);
  const bottom = useRef(null);

  // Hero parallax
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let tick = false;
    const frame = () => {
      tick = false;
      const y = window.scrollY;
      const h = window.innerHeight;
      if (y > h * 1.2) return;
      const f = Math.max(0, 1 - y / (h * 0.55));
      if (video.current) video.current.style.transform = `translate3d(0,${y * 0.15}px,0) scale(${1 + y / 2500})`;
      if (copy.current) { copy.current.style.opacity = f; copy.current.style.transform = `translate3d(0,${-y * 0.25}px,0)`; }
      if (bottom.current) { bottom.current.style.opacity = f; bottom.current.style.transform = `translate3d(0,${-y * 0.12}px,0)`; }
    };
    const on = () => { if (!tick) { tick = true; requestAnimationFrame(frame); } };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <header className="hero" id="home">
        <video ref={video} src={heroVideo} autoPlay muted loop playsInline preload="auto" />
        <div className="tint" />
        <div className="veil" />
        <div className="copy" ref={copy}>
          <h1>Welcome to <b>Oquraa</b> Cloud</h1>
        </div>
        <div className="float f1"><span>☁</span>99.9% uptime goal</div>
        <div className="float f2"><span>🔒</span>Secure by design</div>
        <div className="bottom" ref={bottom}>
          <div><p className="tag">The ultimate cloud<br />hack is here.</p></div>
          <div>
            <p className="sub">Bye bye downtime. See you later complicated infrastructure. Cloud that simply works for your business.</p>
            <div className="btns">
              <Link className="btn" to="/contact">Get started →</Link>
              <Link className="btn alt" to="/services">Explore services</Link>
            </div>
          </div>
        </div>
      </header>

      <section>
        <p className="eyebrow">About Oquraa Cloud</p>
        <h2 className="sm">Cloud, POS and software from one friendly team</h2>
        <p className="lead" style={{ margin: '0 0 32px' }}>
          Oquraa Cloud helps businesses sell faster with a modern POS system and build the software they need, with real people supporting you every step of the way.
        </p>
        <div className="stats">
          <div className="stat"><b>Cloud</b><span>Hosting and storage that scales</span></div>
          <div className="stat"><b>POS</b><span>Fast billing and live stock</span></div>
          <div className="stat"><b>Software</b><span>Web and mobile apps built for you</span></div>
          <div className="stat"><b>Support</b><span>Friendly help when you need it</span></div>
        </div>
      </section>

      <Section eyebrow="Services" title="What we offer">
        <ServiceCards />
        <div className="btns"><Link className="btn" to="/services">View all services →</Link></div>
      </Section>

      <div className="band">
        <section>
          <div className="split">
            <div>
              <p className="eyebrow">POS System</p>
              <h2 className="sm">Sell faster, stock smarter</h2>
              <p className="lead" style={{ margin: '0 0 20px' }}>Billing, barcodes, payments and stock in one simple cloud POS, with live sales reports for every shop.</p>
              <Chips items={['Billing', 'Barcode', 'Stock', 'Payments', 'Reports']} />
              <div className="btns">
                <Link className="btn" to="/pos">Explore the POS →</Link>
                <Link className="btn alt" to="/contact">Request a demo</Link>
              </div>
            </div>
            <div className="panel">
              <h3 style={{ marginBottom: 12 }}>What you get</h3>
              <ul className="tick">
                <li>Fast checkout with barcode scanning</li>
                <li>Live stock across every store</li>
                <li>Cash, card and split payments</li>
                <li>Sales reports and end-of-day summary</li>
                <li>Works on tablet, PC or touch screen</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="split">
          <div className="panel">
            <h3 style={{ marginBottom: 12 }}>How we build</h3>
            <ul className="tick">
              <li>Short cycles with regular progress updates</li>
              <li>Clean, simple design that people enjoy using</li>
              <li>Secure, tested and ready to scale</li>
              <li>Hosted and supported on Oquraa Cloud</li>
              <li>You own what we build</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Software</p>
            <h2 className="sm">Custom software, built around you</h2>
            <p className="lead" style={{ margin: '0 0 20px' }}>From internal tools to customer portals and mobile apps, we turn your idea into working software.</p>
            <Chips items={['Web apps', 'Mobile apps', 'E-commerce', 'Integrations', 'UI/UX']} />
            <div className="btns">
              <Link className="btn" to="/software">Explore software →</Link>
              <Link className="btn alt" to="/contact">Start a project</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <section>
          <p className="eyebrow">Why Oquraa</p>
          <h2 className="sm">Simple, reliable and built around you</h2>
          <Grid>
            <Card tile icon="⏱️" title="Reliable" text="Infrastructure designed for availability, so your team stays online." />
            <Card tile icon="🛡️" title="Secure" text="Your data protected with modern best practices at every layer." />
            <Card tile icon="🤝" title="Transparent" text="Clear plans and clear communication, with no surprises." />
            <Card tile icon="🎧" title="Personal" text="Real people who understand your business and respond quickly." />
          </Grid>
          <div className="btns"><Link className="btn" to="/why-us">Why choose us →</Link></div>
        </section>
      </div>

      <Section eyebrow="How we work" title="From first chat to live in four steps">
        <Steps items={[['Discover', 'We learn your goals, systems and requirements.'], ['Design', 'We plan the right setup for your needs and budget.'], ['Deploy', 'We build, migrate and test everything carefully.'], ['Support', 'We monitor, optimise and keep you running.']]} />
      </Section>

      <Section eyebrow="Industries" title="Solutions for every kind of business">
        <Chips items={['Retail', 'Wholesale & distribution', 'Manufacturing', 'Professional services', 'Education', 'Healthcare', 'Construction', 'Hospitality']} />
      </Section>

      <Section eyebrow="FAQ" title="Quick answers">
        <Faq items={[
          ['What does Oquraa Cloud do?', 'We provide POS systems and custom software, hosted and supported on Oquraa Cloud by a friendly team.'],
          ['Can you move our existing systems to the cloud?', 'Yes. We plan and run the migration carefully to keep disruption to a minimum.'],
          ['Do you offer support after launch?', 'Yes. We monitor, maintain and improve your systems, and are available when you need help.'],
          ['How do we get started?', 'Send us a message from the contact page. We will talk through your needs and suggest the next steps.'],
        ]} />
      </Section>

      <section>
        <Cta
          title="Ready to move to the cloud?"
          text="Reach out to start a conversation and we will suggest the next steps."
          primary={['Contact us →', '/contact']}
          secondary={['See our services', '/services']}
        />
      </section>
    </>
  );
}
