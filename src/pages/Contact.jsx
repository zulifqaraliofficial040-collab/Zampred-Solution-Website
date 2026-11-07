import InquiryForm from "../components/InquiryForm";
import { PageHead } from "../components/Bits";
import { contact } from "../lib/data";
import usePageTitle from "../lib/usePageTitle";
export default function Contact() {
  usePageTitle("Contact");
  return (
    <main>
      <PageHead title="Contact Us" text="Tell us about your project. We reply within one working day." />
      <section className="sec"><div className="wrap two">
        <div><h2>Let&apos;s talk</h2>
          <p className="muted">Share your goals, budget and deadline. For complex projects we start with a short paid discovery phase so the quote is accurate.</p>
          <p className="gap"><b>Email</b><br /><a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p><b>WhatsApp</b><br /><a className="link" href={`https://wa.me/${contact.whatsapp}`}>Message us</a></p></div>
        <InquiryForm />
      </div></section>
    </main>
  );
}
