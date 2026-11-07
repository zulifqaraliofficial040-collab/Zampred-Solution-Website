import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import usePageTitle from "../lib/usePageTitle";
import NotFound from "./NotFound";
import { PageHead, Cta } from "../components/Bits";
import { services, steps } from "../lib/data";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  usePageTitle(s ? s.title : "Service");
  if (!s) return <NotFound />;
  return (
    <main>
      <PageHead title={s.title} text={s.short} />
      <section className="sec"><div className="wrap two">
        <div><h2>The problem we solve</h2><p className="muted">{s.problem}</p>
          <h2 className="gap">What you get</h2>
          <ul className="ticks">{s.items.map((t) => <li key={t}><i><Icon name="check" size={14} /></i>{t}</li>)}</ul></div>
        <aside className="side"><h3>Our process</h3><ol>{steps.map(([t]) => <li key={t}>{t}</li>)}</ol>
          <Link to="/contact" className="btn btn-primary">Start Your Project</Link></aside>
      </div></section>
      <Cta />
    </main>
  );
}
