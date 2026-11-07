import { PageHead, Cta } from "../components/Bits";
import usePageTitle from "../lib/usePageTitle";
const vals = [["Innovation", "Modern, practical solutions to real problems."], ["Integrity", "Honest communication on skills, cost, timelines and limits."], ["Quality", "Tested and documented work before handover."], ["Client partnership", "We understand your goals before recommending technology."], ["Continuous learning", "Current tools, skills and delivery methods."]];
export default function About() {
  usePageTitle("About");
  return (
    <main>
      <PageHead title="About Zampred Solutions" text="A technology partner that turns business ideas into useful digital products, intelligent workflows and measurable online growth." />
      <section className="sec"><div className="wrap two">
        <div><h2>Our mission</h2><p className="muted">To empower businesses with innovative technology, intelligent automation and creative digital solutions that accelerate growth.</p></div>
        <div><h2>Our vision</h2><p className="muted">To become a trusted technology partner for local and global businesses, helping transform ideas into impactful digital products.</p></div>
      </div></section>
      <section className="sec alt"><div className="wrap"><h2 className="c">Our values</h2>
        <div className="grid3">{vals.map(([t, d]) => <article className="svc plain" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section className="sec"><div className="wrap"><h2>How we deliver</h2>
        <p className="muted narrow">Every project has one accountable owner, a signed scope, milestone updates and QA checks before delivery. For specialist work such as advanced mobile, data or cloud projects, we bring in vetted partners and tell you clearly who is responsible for what.</p></div></section>
      <Cta />
    </main>
  );
}
