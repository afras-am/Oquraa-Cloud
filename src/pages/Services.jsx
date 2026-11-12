import { Link } from 'react-router-dom';
import { useTitle } from '../hooks.js';
import { Chips, Cta, Crumbs, Faq, Section, ServiceCards, Steps } from '../components/Ui.jsx';

export default function Services() {
  useTitle('Services');
  return (
    <main className="cpage">
      <section>
        <Crumbs current="Services" />
        <p className="eyebrow">Services</p>
        <h2>Two services, built to help you grow</h2>
        <p className="lead">A modern POS system for your sales and custom software for everything else, both hosted and supported on Oquraa Cloud.</p>
        <div className="btns">
          <Link className="btn" to="/contact">Get a quote →</Link>
          <Link className="btn alt" to="/">← Back home</Link>
        </div>
      </section>
      <Section eyebrow="What we offer" title="Choose what your business needs"><ServiceCards /></Section>
      <Section eyebrow="Included" title="What comes with both services">
        <Chips items={['Cloud hosting', 'Automatic backups', 'Secure access', 'Training', 'Friendly support', 'Clear reporting']} />
      </Section>
      <Section eyebrow="How it works" title="Getting started is simple">
        <Steps items={[['Tell us your needs', 'Share how your business runs and what you want to achieve.'], ['Get a plan', 'We propose the right solution and a clear price.'], ['We build it', 'We set up, build and test everything for you.'], ['We support you', 'We train your team and keep improving as you grow.']]} />
      </Section>
      <Section eyebrow="FAQ" title="Common questions">
        <Faq items={[
          ['Can I use the POS and custom software together?', 'Yes. We can connect your POS with custom software, accounting or an online shop so your data stays in sync.'],
          ['How is pricing worked out?', 'It depends on what you need, such as the number of shops, users and features. We give you a clear quote after a short chat.'],
          ['Do you support us after launch?', 'Yes. We provide training, updates and ongoing support so you are never on your own.'],
        ]} />
      </Section>
      <section>
        <Cta title="Let’s plan your next step" text="Tell us about your business and we will suggest the right solution." primary={['Contact us →', '/contact']} secondary={['Back to home', '/']} />
      </section>
    </main>
  );
}
