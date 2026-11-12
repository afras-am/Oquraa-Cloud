import { Link } from 'react-router-dom';
import { useTitle } from '../hooks.js';
import { Card, Chips, Crumbs, Cta, Faq, Grid, Section, Steps } from '../components/Ui.jsx';

export default function WhyUs() {
  useTitle('Why Us');
  return (
    <main className="cpage">
      <section>
        <Crumbs current="Why Us" />
        <p className="eyebrow">Why Oquraa</p>
        <h2>Simple, reliable and built around you</h2>
        <p className="lead">Technology should make business easier. Here is what you can expect when you work with Oquraa Cloud.</p>
        <div className="btns">
          <Link className="btn" to="/contact">Talk to us →</Link>
          <Link className="btn alt" to="/">← Back home</Link>
        </div>
      </section>
      <Section eyebrow="Our promise" title="What makes us different">
        <Grid>
          <Card tile icon="⏱️" title="Reliable" text="Infrastructure designed for availability, so your team stays online." />
          <Card tile icon="🛡️" title="Secure" text="Your data protected with modern best practices at every layer." />
          <Card tile icon="🤝" title="Transparent" text="Clear plans and clear communication, with no surprises." />
          <Card tile icon="🎧" title="Personal" text="Real people who understand your business and respond quickly." />
          <Card tile icon="🚀" title="Fast to start" text="We get you set up quickly, with a clear plan from day one." />
          <Card tile icon="📈" title="Ready to grow" text="Start small and scale up as your business grows." />
        </Grid>
      </Section>
      <Section eyebrow="Our way of working" title="From first chat to long-term support">
        <Steps items={[['Discover', 'We listen first and learn how your business runs.'], ['Design', 'We shape a plan that fits your needs and budget.'], ['Deliver', 'We build and launch with regular updates.'], ['Support', 'We stay with you to keep improving.']]} />
      </Section>
      <Section eyebrow="Built for" title="Businesses of every size">
        <Chips items={['Startups', 'Small businesses', 'Growing companies', 'Retail & distribution', 'Schools & training', 'Service providers']} />
      </Section>
      <Section eyebrow="FAQ" title="Common questions">
        <Faq items={[
          ['Why choose Oquraa Cloud?', 'You get cloud, POS and software from one team, with clear communication and friendly support.'],
          ['Will we always know what is happening?', 'Yes. We share progress regularly and explain things in plain language.'],
          ['What if we need help after launch?', 'We provide ongoing support, updates and improvements so you are never on your own.'],
        ]} />
      </Section>
      <section>
        <Cta title="Ready to work with us?" text="Send us a message and we will get back to you with the next steps." primary={['Contact us →', '/contact']} secondary={['See our services', '/services']} />
      </section>
    </main>
  );
}
