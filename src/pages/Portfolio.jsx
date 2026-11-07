import { PageHead, Cta } from "../components/Bits";
import { projects } from "../lib/data";
import usePageTitle from "../lib/usePageTitle";
export default function Portfolio() {
  usePageTitle("Portfolio");
  return (
    <main>
      <PageHead title="Portfolio" text="Demonstration projects built with sample data to show our approach. Real client case studies will be added as projects launch." />
      <section className="sec alt"><div className="wrap"><div className="grid3">
        {projects.map(([t, d]) => <article className="proj" key={t}><div className="thumb" /><h3>{t}</h3><p>{d}</p><span className="tag">Demo project</span></article>)}
      </div></div></section>
      <Cta />
    </main>
  );
}
