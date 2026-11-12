import { Link } from 'react-router-dom';
import { useTitle } from '../hooks.js';
import { Card, Chips, Crumbs, Cta, Faq, Grid, Section, Steps } from '../components/Ui.jsx';

export default function Pos() {
  useTitle('POS');
  return (
    <main className="cpage">
      <section>
        <Crumbs trail={[['/services', 'Services']]} current="POS" />
        <p className="eyebrow">POS System</p>
        <h2>Sell faster with a modern point of sale</h2>
        <p className="lead">A cloud POS that handles billing, barcodes, payments and stock in one simple screen, with live sales reports you can check from anywhere.</p>
        <div className="btns">
          <Link className="btn" to="/contact">Request a demo →</Link>
          <Link className="btn alt" to="/">← Back home</Link>
        </div>
      </section>

      <Section eyebrow="Why a POS" title="Checkout that keeps your customers happy">
        <Grid>
          <Card icon="⚡" title="Fast checkout" text="Scan, bill and print a receipt in seconds." />
          <Card icon="📦" title="Live stock" text="Every sale updates your stock right away." />
          <Card icon="📊" title="Know your numbers" text="See sales, profit and best sellers at any time." />
          <Card icon="☁️" title="Works anywhere" text="Cloud based, so you can check your shop from your phone." />
        </Grid>
      </Section>

      <Section eyebrow="Features" title="Everything you need at the counter">
        <Grid>
          <Card icon="🧾" title="Billing & Checkout" text="Quick, accurate bills for every customer." items={['Barcode scanning', 'Hold and resume bills', 'Printed or digital receipts']} />
          <Card icon="🏷️" title="Products & Barcodes" text="Manage your full catalogue easily." items={['Categories and variants', 'Barcode label printing', 'Bulk import from Excel']} />
          <Card icon="📦" title="Inventory Sync" text="Always know what is in stock." items={['Live stock levels', 'Low-stock alerts', 'Stock transfers between stores']} />
          <Card icon="💳" title="Payments" text="Take payment the way customers want to pay." items={['Cash, card and wallets', 'Split payments', 'Daily cash-up']} />
          <Card icon="🧑‍🤝‍🧑" title="Customers & Loyalty" text="Build repeat business." items={['Customer records', 'Points and rewards', 'Purchase history']} />
          <Card icon="🎁" title="Discounts & Offers" text="Run promotions without the hassle." items={['Item and bill discounts', 'Coupons and vouchers', 'Time-based offers']} />
          <Card icon="🏬" title="Multi-store" text="Run every branch from one place." items={['Central product list', 'Branch-wise reports', 'Shared customers']} />
          <Card icon="🔐" title="Staff & Roles" text="Control who can do what." items={['Cashier logins', 'Shift reports', 'Manager approvals']} />
          <Card icon="📈" title="Reports" text="Understand your business at a glance." items={['Daily and monthly sales', 'Profit and best sellers', 'Export to Excel and PDF']} />
        </Grid>
      </Section>

      <Section eyebrow="Hardware" title="Works with the equipment you already use">
        <Chips items={['Barcode scanners', 'Receipt printers', 'Cash drawers', 'Card terminals', 'Tablets & PCs', 'Touch screens']} />
      </Section>
      <Section eyebrow="Businesses" title="Made for shops of every kind">
        <Chips items={['Retail shops', 'Supermarkets', 'Restaurants & cafés', 'Pharmacies', 'Salons', 'Wholesale counters']} />
      </Section>
      <Section eyebrow="Setup" title="From first call to your first sale">
        <Steps items={[['Discovery', 'We learn how your shop runs today.'], ['Product setup', 'We load your products, prices and categories.'], ['Hardware & payments', 'We connect scanners, printers and payment options.'], ['Training', 'Your cashiers learn the system hands-on.'], ['Go-live & support', 'We launch with you and stay on call.']]} />
      </Section>
      <Section eyebrow="Cloud & security" title="Hosted on Oquraa Cloud, protected by design">
        <Grid>
          <Card icon="☁️" title="Cloud hosted" text="Open your POS from any device, with nothing to maintain." />
          <Card icon="🔒" title="Role-based access" text="Each person sees only what they need." />
          <Card icon="💾" title="Automatic backups" text="Your sales data is backed up regularly." />
          <Card icon="🔗" title="Integrations" text="Connect accounting, e-commerce and online payments." />
        </Grid>
      </Section>
      <Section eyebrow="FAQ" title="Common questions">
        <Faq items={[
          ['Does the POS work without internet?', 'Billing can continue during a short connection drop and sync again when you are back online. We will confirm the exact setup for your shop during the demo.'],
          ['What hardware do I need?', 'A tablet, PC or touch screen is enough to start. A barcode scanner, receipt printer and cash drawer are common additions, and we can advise on what suits you.'],
          ['Can I use it for more than one shop?', 'Yes. You can manage several branches with shared products and branch-wise reports.'],
          ['Can you move my existing products over?', 'Yes. We import products, prices and customers from Excel or your current system.'],
          ['Do you provide training and support?', 'Yes. We train your team before go-live and provide ongoing support afterwards.'],
        ]} />
      </Section>
      <section>
        <Cta title="See the POS in action" text="Book a demo and we will show you how it can work in your shop." primary={['Request a demo →', '/contact']} secondary={['See our software services', '/software']} />
      </section>
    </main>
  );
}
