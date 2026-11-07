import { Link } from "react-router-dom";
import Icon from "./Icon";
import InquiryForm from "./InquiryForm";

export function PageHead({ title, text }) {
  return (<section className="phead"><div className="wrap"><h1>{title}</h1>{text && <p>{text}</p>}</div></section>);
}
export function Cta() {
  return (
    <section className="wrap cta-wrap">
      <div className="cta">
        <div><h2>Ready to Transform Your Business?</h2><p>Share a few details and we will reply with next steps within one working day.</p></div>
        <InquiryForm />
      </div>
    </section>
  );
}
export function ServiceCard({ s }) {
  return (<Link to={`/services/${s.slug}`} className="svc"><Icon name={s.icon} size={38} /><h3>{s.title}</h3><p>{s.short}</p></Link>);
}
