import { Link } from 'react-router-dom';
import { useTitle } from '../hooks.js';
import { Card, Chips, Crumbs, Cta, Faq, Grid, Section, Steps } from '../components/Ui.jsx';

export default function Software() {
  useTitle('Software');
  return (
    <main className="cpage">
      <section>
        <Crumbs trail={[['/services', 'Services']]} current="Software" />
        <p className="eyebrow">Software</p>
        <h2>Software built for the way you work</h2>
        <p className="lead">From idea to launch, we design and build web and mobile software that fits your business, then host and support it on Oquraa Cloud.</p>
        <div className="btns">
          <Link className="btn" to="/contact">Start a project →</Link>
          <Link className="btn alt" to="/">← Back home</Link>
        </div>
      </section>

      <Section eyebrow="What we build" title="Software for every part of your business">
        <Grid>
          <Card icon="🛠" title="Custom Business Software" text="Systems made to match your exact processes." items={['Workflow and approval tools', 'Internal dashboards', 'Admin panels']} />
          <Card icon="🌐" title="Web Applications" text="Fast, secure web apps and portals." items={['Customer and partner portals', 'SaaS products', 'Responsive on any device']} />
          <Card icon="📱" title="Mobile Apps" text="Apps that keep your people connected." items={['iOS and Android', 'Push notifications', 'Offline-ready features']} />
          <Card icon="🛍️" title="E-commerce & Online Shops" text="Sell online with a smooth checkout." items={['Product and inventory management', 'Payments and orders', 'Customer accounts']} />
          <Card icon="🔗" title="Integration & APIs" text="Make your tools talk to each other." items={['REST APIs', 'Payment and SMS gateways', 'Data sync with POS and accounting']} />
          <Card icon="🎨" title="UI/UX Design" text="Clean, simple interfaces people enjoy." items={['Wireframes and prototypes', 'Design systems', 'Usability testing']} />
          <Card icon="☁️" title="Cloud & DevOps" text="Ship and run software reliably." items={['Cloud migration', 'Automated deployments', 'Monitoring and backups']} />
          <Card icon="🧰" title="Maintenance & Support" text="Keep everything running and improving." items={['Bug fixes and updates', 'Performance tuning', 'Priority support']} />
        </Grid>
      </Section>
      <Section eyebrow="Technology" title="Modern tools, chosen to fit the job">
        <Chips items={['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'REST APIs', 'Docker', 'Git & CI/CD', 'Responsive design']} />
      </Section>
      <Section eyebrow="Process" title="How a project runs">
        <Steps items={[['Discover', 'We learn your goals, users and constraints.'], ['Design', 'We plan the features and shape the experience.'], ['Develop', 'We build in short cycles and share progress often.'], ['Test', 'We check quality, security and performance.'], ['Launch', 'We deploy to Oquraa Cloud and train your team.'], ['Support', 'We monitor, fix and improve after launch.']]} />
      </Section>
      <Section eyebrow="Ways to work with us" title="Choose what suits your project">
        <Grid>
          <Card icon="📦" title="Fixed-scope project" text="A clear plan, timeline and price for a defined product." />
          <Card icon="👥" title="Dedicated team" text="Developers and designers working as part of your team." />
          <Card icon="🛡️" title="Support retainer" text="Ongoing updates, fixes and improvements each month." />
        </Grid>
      </Section>
      <Section eyebrow="FAQ" title="Common questions">
        <Faq items={[
          ['How much does custom software cost?', 'It depends on the features, the number of users and the timeline. After a short discovery chat we give you a clear estimate.'],
          ['Who owns the software?', 'You can own the finished software. We agree this clearly at the start of every project.'],
          ['Can you improve or take over an existing system?', 'Yes. We can review what you have, fix problems, add features or rebuild parts of it.'],
          ['Will you host the software too?', 'Yes. We can host and monitor it on Oquraa Cloud, with backups and support included.'],
          ['Do you work with a small business?', 'Yes. We build solutions for businesses of every size and can start small.'],
        ]} />
      </Section>
      <section>
        <Cta title="Have an idea? Let’s build it" text="Tell us what you need and we will reply with the next steps." primary={['Start a project →', '/contact']} secondary={['Explore our POS', '/pos']} />
      </section>
    </main>
  );
}
