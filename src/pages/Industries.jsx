import Icon from "../components/Icon";
import { PageHead, Cta } from "../components/Bits";
import { industries } from "../lib/data";
import usePageTitle from "../lib/usePageTitle";
export default function Industries() {
  usePageTitle("Industries");
  return (
    <main>
      <PageHead title="Industries We Serve" text="Solutions shaped around how each sector actually works." />
      <section className="sec alt"><div className="wrap"><div className="grid3">
        {industries.map(([t, ic, d]) => <article className="svc plain" key={t}><Icon name={ic} size={36} /><h3>{t}</h3><p>{d}</p></article>)}
      </div></div></section>
      <Cta />
    </main>
  );
}
