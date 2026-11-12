import { Link } from 'react-router-dom';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';
import { EMAIL, LINKEDIN } from '../config.js';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ftg">
        <div>
          <div className="flogo">
            <img className="lg-l" src={logoLight} alt="Oquraa Cloud" />
            <img className="lg-d" src={logoDark} alt="Oquraa Cloud" />
          </div>
          <p>POS systems and custom software, hosted and supported on Oquraa Cloud.</p>
          <a className="li" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Oquraa Cloud on LinkedIn" title="Oquraa Cloud on LinkedIn">in</a>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">All services</Link></li>
            <li><Link to="/pos">POS System</Link></li>
            <li><Link to="/software">Software Development</Link></li>
            <li><Link to="/contact">Request a demo</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><Link to="/contact">Send a message</Link></li>
            <li><a href={`mailto:${EMAIL}`}>Email us</a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="ftb">
        <span>© 2026 Oquraa Cloud. All rights reserved.</span>
        <button className="linkbtn" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
