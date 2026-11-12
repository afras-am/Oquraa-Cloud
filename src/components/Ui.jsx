import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Crumbs({ trail = [], current }) {
  return (
    <div className="crumbs">
      <Link to="/">← Home</Link>
      <span>/</span>
      {trail.map(([to, label]) => (
        <Fragment key={to}>
          <Link to={to}>{label}</Link>
          <span>/</span>
        </Fragment>
      ))}
      <b>{current}</b>
    </div>
  );
}

export function Section({ eyebrow, title, children }) {
  return (
    <section>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="sm">{title}</h2>}
      {children}
    </section>
  );
}

export function Card({ icon, title, text, items, to, btn, tile }) {
  return (
    <div className="card">
      <div
        className="ic"
        style={tile ? { background: 'var(--bg2)', border: '1px solid var(--line)', fontSize: 26 } : undefined}
      >
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      {items && <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>}
      {to && (
        <div className="btns">
          <Link className="btn" to={to}>{btn} →</Link>
        </div>
      )}
    </div>
  );
}

export const Grid = ({ children }) => <div className="grid">{children}</div>;

export function Steps({ items }) {
  return (
    <div className="steps">
      {items.map(([h, p]) => (
        <div className="step" key={h}>
          <h3>{h}</h3>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

export const Chips = ({ items }) => (
  <div className="chips">{items.map((i) => <span key={i}>{i}</span>)}</div>
);

export const Faq = ({ items }) => (
  <>
    {items.map(([q, a]) => (
      <details key={q}>
        <summary>{q}</summary>
        <p>{a}</p>
      </details>
    ))}
  </>
);

export function Cta({ title, text, primary, secondary }) {
  return (
    <div className="cta">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="btns" style={{ justifyContent: 'center' }}>
        <Link className="btn" to={primary[1]}>{primary[0]}</Link>
        <Link className="btn" to={secondary[1]}>{secondary[0]}</Link>
      </div>
    </div>
  );
}

export function ServiceCards() {
  return (
    <Grid>
      <Card
        icon="🧾"
        title="POS System"
        text="Fast billing, live stock and clear sales reports for your shop or business."
        items={['Barcode billing and receipts', 'Cash, card and split payments', 'Live stock across every store', 'Customers, loyalty and discounts', 'Daily and monthly sales reports']}
        to="/pos"
        btn="Explore POS"
      />
      <Card
        icon="💻"
        title="Software Development"
        text="Custom web and mobile software built around the way your business works."
        items={['Custom business software', 'Web applications and portals', 'Mobile apps for iOS and Android', 'Integrations and APIs', 'Ongoing maintenance and support']}
        to="/software"
        btn="Explore software"
      />
    </Grid>
  );
}
