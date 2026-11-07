import { PageHead, Cta, ServiceCard } from "../components/Bits";
import { services } from "../lib/data";
import usePageTitle from "../lib/usePageTitle";
export default function Services() {
  usePageTitle("Services");
  return (
    <main>
      <PageHead title="Our Services" text="Eight service divisions covering everything from first idea to launch and support." />
      <section className="sec alt"><div className="wrap"><div className="grid4">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></div></section>
      <Cta />
    </main>
  );
}
