import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/portfolio", "Portfolio"], ["/industries", "Industries"], ["/contact", "Contact"]];

export function Brand() {
  return (
    <Link to="/" className="brand">
      <img src="/logo-mark.png" alt="" />
      <span><b>ZAMPRED</b><small>SOLUTIONS</small></span>
    </Link>
  );
}

export default function Header() {
  const { pathname: path } = useLocation();
  const [open, setOpen] = useState(false);
  const on = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="nav">
      <Brand />
      <nav className={open ? "open" : ""}>
        {links.map(([h, l]) => (
          <Link key={h} to={h} className={on(h) ? "active" : ""} onClick={() => setOpen(false)}>{l}</Link>
        ))}
      </nav>
      <Link to="/contact" className="btn btn-primary nav-cta">Start Your Project</Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
    </header>
  );
}
