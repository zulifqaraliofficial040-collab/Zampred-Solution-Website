import { Link } from "react-router-dom";
import { Brand } from "./Header";
import { services, contact } from "../lib/data";

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="wrap foot-grid">
          <div><Brand /><p>Let&apos;s Grow Your Ideas.</p><p className="soc"><span>f</span><span>in</span><span>X</span></p></div>
          <div><b>Services</b>{services.slice(0, 5).map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div>
          <div><b>Company</b><Link to="/about">About</Link><Link to="/portfolio">Portfolio</Link><Link to="/industries">Industries</Link><Link to="/contact">Contact</Link></div>
          <div><b>Get in touch</b><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a></div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Zampred Solutions. All rights reserved.</p>
      </footer>
      <a className="wa" href={`https://wa.me/${contact.whatsapp}`} aria-label="Chat on WhatsApp">WA</a>
    </>
  );
}
