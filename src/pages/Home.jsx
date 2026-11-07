import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { Cta, ServiceCard } from "../components/Bits";
import { services, steps, industries, projects, techs, testimonials } from "../lib/data";
import usePageTitle from "../lib/usePageTitle";

export default function Home() {
  usePageTitle();
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Let&apos;s Grow<br />Your Ideas.</h1>
            <p className="sub">Innovate. Develop. Transform.</p>
            <p className="lead">We build websites, software and AI automation that help startups and businesses in Pakistan and worldwide grow online.</p>
            <div className="actions"><Link to="/contact" className="btn btn-primary">Start Your Project</Link><Link to="/services" className="btn btn-ghost">Explore Services</Link></div>
          </div>
          <div className="scene" aria-hidden="true">
            <div className="scene-in">
              <div className="plate" />
              <div className="tile"><img src="/logo-mark.png" alt="" /></div>
            <div className="card c1"><b>AI chatbot</b><span className="bub">How can I help you today?</span><span className="bub me">Track my order</span></div>
            <div className="card c2"><b>Dashboard</b><div className="bars"><i style={{height:"40%"}}/><i style={{height:"62%"}}/><i style={{height:"50%"}}/><i style={{height:"85%"}}/><i style={{height:"72%"}}/></div></div>
            <div className="card c3"><b>Mobile app</b><div className="phone"><i/><i/><i/></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip"><div className="marquee"><div className="track">{[...techs, "Healthcare", "Finance", "Retail", ...techs, "Healthcare", "Finance", "Retail"].map((t, i) => <span key={i}>{t}</span>)}</div></div></section>

      <section className="sec alt"><div className="wrap"><h2 className="c">Our Services</h2>
        <div className="grid4">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></div></section>

      <section className="sec"><div className="wrap why">
        <div><h2>Why choose us</h2>
          <ul className="ticks">{["Transparent process.", "Practical solutions.", "Dependable support."].map((t) => <li key={t}><i><Icon name="check" size={14} /></i>{t}</li>)}</ul>
          <p className="muted">Written scope, clear milestones and honest timelines, from first call to launch.</p></div>
        <div className="art" aria-hidden="true"><div className="win"><i/><i/><i/></div></div>
      </div></section>

      <section className="sec alt"><div className="wrap"><h2 className="c">Featured Projects</h2>
        <div className="grid3">{projects.slice(0, 3).map(([t, d]) => <article className="proj" key={t}><div className="thumb" /><h3>{t}</h3><p>{d}</p><span className="tag">Demo project</span></article>)}</div>
        <p className="c more"><Link to="/portfolio" className="link">View all projects</Link></p></div></section>

      <section className="sec"><div className="wrap"><h2 className="c">7-Step Process</h2>
        <ol className="flow">{steps.map(([t, ic, d], i) => <li key={t}><Icon name={ic} size={34} /><b>{t}</b><span>{d}</span>{i < 6 && <Icon name="arrow" size={18} className="ar" />}</li>)}</ol></div></section>

      <section className="sec alt"><div className="wrap"><h2 className="c">Industries We Serve</h2>
        <div className="inds">{industries.map(([t, ic]) => <Link to="/industries" key={t}><Icon name={ic} size={30} /><b>{t}</b></Link>)}</div></div></section>

      <section className="sec"><div className="wrap"><h2 className="c">Testimonials</h2>
        {testimonials.length ? <div className="grid3">{testimonials.map((t) => <blockquote className="proj" key={t.name}><p>“{t.quote}”</p><b>{t.name}</b><span className="tag">{t.role}</span></blockquote>)}</div>
          : <p className="c muted">Client reviews will appear here once our first projects are delivered.</p>}</div></section>

      <Cta />
    </main>
  );
}
