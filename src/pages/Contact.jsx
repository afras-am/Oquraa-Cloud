import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EMAIL, LINKEDIN } from '../config.js';
import { useTitle } from '../hooks.js';
import { Crumbs } from '../components/Ui.jsx';

export default function Contact() {
  useTitle('Contact us');
  const [d, setD] = useState({ name: '', email: '', phone: '', topic: 'General enquiry', message: '' });
  const [msg, setMsg] = useState('');
  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${d.name}\nEmail: ${d.email}${d.phone ? `\nPhone: ${d.phone}` : ''}\n\n${d.message}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(`[${d.topic}] Enquiry from ${d.name}`)}&body=${encodeURIComponent(body)}`;
    setMsg(`Opening your email app… if nothing opens, please email us at ${EMAIL}.`);
    window.location.href = url;
  };

  return (
    <main className="cpage">
      <section>
        <Crumbs current="Contact us" />
        <p className="eyebrow">Contact us</p>
        <h2>Let’s talk about your business</h2>
        <div className="cgrid">
          <form className="cform" onSubmit={submit}>
            <div className="row">
              <label>Name<input required autoComplete="name" placeholder="Your name" value={d.name} onChange={set('name')} /></label>
              <label>Email<input type="email" required autoComplete="email" placeholder="you@company.com" value={d.email} onChange={set('email')} /></label>
            </div>
            <div className="row">
              <label>Phone (optional)<input type="tel" autoComplete="tel" placeholder="+94 ..." value={d.phone} onChange={set('phone')} /></label>
              <label>Topic
                <select value={d.topic} onChange={set('topic')}>
                  <option>General enquiry</option>
                  <option>POS system</option>
                  <option>Software development</option>
                </select>
              </label>
            </div>
            <label>Message<textarea required placeholder="Tell us about your project or question…" value={d.message} onChange={set('message')} /></label>
            <button className="btn" type="submit">Send message →</button>
            <p className="cmsg" role="status">{msg}</p>
          </form>
          <aside className="cinfo">
            <div className="card"><h3>Email</h3><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div className="card"><h3>LinkedIn</h3><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">Oquraa Cloud on LinkedIn</a></div>
            <div className="card"><h3>Back to the site</h3><Link to="/">← Home</Link></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
